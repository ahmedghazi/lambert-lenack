<script setup lang="ts">
// import { set } from '#app/compat/capi'
import type { SanityImageAsset, SanityReference } from 'sanity-codegen'

const props = defineProps<{
  slider?:
    | Array<{
        _type: 'image'
        asset: SanityReference<SanityImageAsset>
      }>
    | any
  goToCredits?: boolean
}>()
const length: number = props.slider.length
const swiperRef = ref(null)
const swiperInstance = ref(null)
const swiper = useSwiper(swiperRef)
let prevSlide = 0

// console.log(props.goToCredits, length, prevSlide, swiperRef)
watchEffect(() => {
  if (props.goToCredits) {
    const currentSliderIndex = document.querySelector(
      '.swiper-pagination-current',
    ).innerText
    if (currentSliderIndex) prevSlide = Number(currentSliderIndex) - 1
    console.log(prevSlide)

    swiper.to(props.slider.length)
  } else {
    swiper.to(prevSlide)
  }
})

onMounted(() => {
  // Read more about Swiper instance: https://swiperjs.com/swiper-api#methods--properties

  setTimeout(() => {
    const swiperEl = document.querySelector('swiper-container')
    _handleSlideChange(swiperEl)
    if (swiperEl) {
      swiperEl.addEventListener('swiperslidechange', ({ target }) => {
        _handleSlideChange(swiperEl)
      })
    }
  }, 2000)
})

const _handleSlideChange = (swiperEl: any) => {
  // console.log(swiperEl)
  const currentSlide = swiperEl.querySelector('.swiper-slide-active')
  if (!currentSlide) return

  // console.log({ currentSliderIndex })
  const currentSlideImg = currentSlide.querySelector('img')
  if (!currentSlideImg) return

  const bounding = currentSlideImg.getBoundingClientRect()
  const leftOver = (window.innerWidth - bounding.width) / 2
  const controls: NodeListOf<HTMLButtonElement> =
    document.querySelectorAll('.btn-controls')
  controls.forEach((control: HTMLButtonElement) => {
    control.style.width = `${leftOver}px`
  })
}

// const onSlideChange = () => {
//   console.log('slide changed', swiper)
//   const currentSlide = swiper.realIndex
//   console.log('currentSlide', currentSlide)
// }

// const onInit = (swiper: any) => {
//   console.log('swiper initialized')
//   swiperInstance.value = swiper
// }
</script>

<template>
  <ClientOnly>
    <swiper-container
      ref="swiperRef"
      :speed="0"
      :pagination="{
        type: 'fraction',
        el: '.swiper-pagination',
      }"
      :autoplay="false"
      :keyboard="true"
      :lazyPreloadPrevNext="0"
      :loop="true"
      :mousewheel="{
        enabled: true,
        thresholdTime: 400,
      }"
      :onAny="
        (event) => {
          console.log('event', event)
        }
      "
    >
      <swiper-slide v-for="(slide, idx) in props.slider" :key="idx">
        <img
          v-if="slide"
          class="visual"
          :src="$urlFor(slide).width(1000).height(1000).url()"
          alt="Cover image"
        />
      </swiper-slide>
      <swiper-slide>
        <slot name="text" />
      </swiper-slide>
    </swiper-container>
  </ClientOnly>

  <button class="btn-controls btn--prev" @click="swiper.prev()">Prev</button>
  <button class="btn-controls btn--next" @click="swiper.next()">Next</button>
  <div class="swiper-pagination"></div>
</template>

<style lang="scss">
swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;

  height: calc(var(--vh) * 100 - calc(var(--space-xxl)));
  width: calc(100% - 340px);
  width: calc(100% - var(--space-xxl));

  img {
    object-fit: cover;
    object-fit: contain;
    width: 100%;
    height: 100%;
    width: auto;
    height: 100%;
    object-fit: unset;
  }
}
.swiper-pagination {
  position: fixed !important;
  right: var(--space-xl) !important;
  bottom: var(--space-xl) !important;
}

button {
  position: fixed;
  width: 30%;
  height: calc(var(--vh) * 100);
  top: 0;
  text-indent: -9999px;
  z-index: 50;
  /* background: red; */
  &.btn--prev {
    left: 0;
  }
  &.btn--next {
    right: 0;
  }
}

@media (max-width: 800px) {
  .swiper-pagination {
    right: 15px !important;
    bottom: 15px !important;
  }
  swiper-slide {
    /* background-color: red; */
    height: calc(var(--vh) * 100);
  }
}
</style>
