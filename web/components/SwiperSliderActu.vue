<script setup lang="ts">
// import { set } from '#app/compat/capi'
import type {
  SanityImageAsset,
  SanityKeyedReference,
  SanityReference,
} from 'sanity-codegen'
import { watch, ref, computed } from 'vue'
import type { Article } from '~/types/schema'
import { _linkResolver } from '../utils/index'

const props = defineProps<{
  // slider?:
  //   | Array<{
  //       _type: 'image'
  //       asset: SanityReference<SanityImageAsset>
  //     }>
  //   | any
  slides?: Array<SanityKeyedReference<Article>> | any
}>()
// const length: number = props.slider.length
const swiperRef = ref(null)
const swiperInstance = ref(null)
const swiper = useSwiper(swiperRef)
let prevSlide = 0

// console.log(props.goToCredits, length, prevSlide, swiperRef)
watchEffect(() => {
  // if (props.goToCredits) {
  //   swiper.to(props.slider.length)
  // } else {
  //   swiper.to(prevSlide)
  // }
})

onMounted(() => {
  setTimeout(() => {
    const swiperEl = document.querySelector('swiper-container')
    _handleSlideChange(swiperEl)
    if (swiperEl) {
      swiperEl.addEventListener('swiperslidechange', ({ target }) => {
        _handleSlideChange(swiperEl)
        _storeCurrentIndex()
      })
    }
  }, 2000)
})

const _storeCurrentIndex = () => {
  setTimeout(() => {
    const currentSliderIndex = Number(
      document.querySelector('.swiper-pagination-current').innerText,
    )
    if (currentSliderIndex && currentSliderIndex < length)
      prevSlide = Number(currentSliderIndex) - 1
    console.log({ currentSliderIndex, prevSlide })
  }, 0)
}

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
      <swiper-slide v-for="(slide, idx) in props.slides" :key="idx">
        <img
          v-if="slide && slide.imageCover"
          class="visual"
          :src="$urlFor(slide.imageCover).width(2000).height(2000).url()"
          alt="Cover image"
        />
        <div class="footer">
          <h2 v-if="slide.title && slide.title.fr" class="title">
            <!-- {{ slide.title.fr }} -->
            <NuxtLink
              v-if="slide.link && slide.link.link && slide.link.label"
              :to="_linkResolver(slide.link?.link)"
            >
              {{ slide.title.fr }}
            </NuxtLink>
            <span v-else>{{ slide.title.fr }}</span>
          </h2>
        </div>
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
  justify-content: space-between;
  flex-direction: column;
  height: calc(var(--vh) * 100 - var(--space-xxl, 10rem) / 2);
  width: calc(100% - var(--space-xxl, 10rem));
  img {
    object-fit: cover;
    object-fit: contain;
    width: 100%;
    height: calc(var(--vh) * 100 - calc(var(--space-xxl, 10rem)));

    width: auto;
    object-fit: unset;
  }
  .footer {
    padding: var(--space-sm);
    padding: 0;
    padding-bottom: var(--space-xl);
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-transform: uppercase;
    gap: 0.3rem;
    .inner {
      display: inline-block;
    }
    h2 {
      font-size: inherit;
      font-weight: normal;
      line-height: normal;

      text-transform: uppercase;
    }
    span {
      position: absolute;
      right: -1.4em;
      top: -0.222em;
      font-size: 1.333em;
    }
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
    height: calc(var(--vh) * 100 - 130px);

    img {
      object-fit: contain;
      height: calc(var(--vh) * 100 - 260px);
    }
    .footer {
      padding: 15px;
      z-index: 51;
      h2 {
        font-size: 10px;

        &,
        a {
          line-height: 1.3;
          display: inline-block;
        }
      }
      span {
        font-size: 14px;
        top: -3px;
      }
    }
  }
  .swiper-pagination {
    font-size: 10px;
  }
}
</style>
