<!-- <script setup lang="ts">
import type { SanityImageAsset, SanityReference } from 'sanity-codegen'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/vue'
import { Navigation, Pagination, Mousewheel } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import type { Swiper as _Swiper } from 'swiper/types'

const swiperInstance = ref<_Swiper | null>(null)

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

watchEffect(() => {
  if (!swiperInstance.value) {
    return
  }
  if (props.goToCredits) {
    swiperInstance.value.slideTo(length)
  } else {
    swiperInstance.value.slideTo(0)
  }
})
onMounted(() => {
  // Read more about Swiper instance: https://swiperjs.com/swiper-api#methods--properties
  // swiper.instance.on('slideChange', function () {
  //   console.log('slide changed')
  // })
})

const onInit = (swiper: any) => {
  console.log('swiper initialized')
  swiperInstance.value = swiper
  console.log(swiper)
}

const onSlideChange = (e: any) => {
  console.log('slide changed', e)
}

const handlePrev = () => {
  if (swiperInstance.value) {
    swiperInstance.value.slidePrev()
  }
}

const handleNext = () => {
  console.log('next')
  if (swiperInstance.value) {
    swiperInstance.value.slideNext()
  }
}
</script>

<template>
  <ClientOnly>
    <Swiper
      :modules="[Navigation, Pagination, Mousewheel]"
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
        // sensitivity: 0.1,
        thresholdTime: 400,
      }"
      @swiper="onInit"
      @slideChange="onSlideChange"
    >
      <SwiperSlide v-for="(slide, idx) in props.slider" :key="idx">
        <img
          v-if="slide"
          class="visual"
          :src="$urlFor(slide).width(1000).height(1000).url()"
          alt="Cover image"
        />
      </SwiperSlide>
      <SwiperSlide>
        <slot name="text" />
      </SwiperSlide>
    </Swiper>
  </ClientOnly>

  <button class="btn--prev" @click="handlePrev">Prev</button>
  <button class="btn--next" @click="handleNext">Next</button>
  <div class="swiper-pagination"></div>
  <Pagination type="fraction" />
</template>

<style lang="scss">
swiper-slide,
.swiper-slide {
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
  }
}
.swiper-pagination {
  position: fixed !important;
  right: var(--space-xl) !important;
  bottom: var(--space-xl) !important;
}

button {
  position: fixed;
  width: 38%;
  height: calc(var(--vh) * 100);
  top: 0;
  /* text-indent: -9999px; */
  z-index: 50;
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
  swiper-slide,
  .swiper-slide {
    /* background-color: red; */
    height: calc(var(--vh) * 100);
  }
}
</style> -->
