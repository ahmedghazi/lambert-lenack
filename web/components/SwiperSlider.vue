<script setup lang="ts">
import type { SanityImageAsset, SanityReference } from 'sanity-codegen'

const containerRef = ref(null)

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

const swiper = useSwiper(containerRef)

watchEffect(() => {
  if (props.goToCredits) {
    swiper.to(length)
  } else {
    swiper.to(0)
  }
})
onMounted(() => {
  // Read more about Swiper instance: https://swiperjs.com/swiper-api#methods--properties
  // console.log(swiper.instance)
})
/*
direction: "horizontal",
centeredSlides: !0,
preventClicks: !1,
preventClicksPropagation: !1,
speed: 0,
allowTouchMove: !0,
followFinger: !1,
pagination: {
    el: ".pagination",
    type: "fraction"
},
mousewheel: {
    sensitivity: 500
},
*/
</script>

<template>
  <ClientOnly>
    <swiper-container
      ref="containerRef"
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
        sensitivity: 0.1,
        thresholdTime: 200,
      }"
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

  <button class="btn--prev" @click="swiper.prev()">Prev</button>
  <button class="btn--next" @click="swiper.next()">Next</button>
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
  text-indent: -9999px;
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
  swiper-slide {
    /* background-color: red; */
    height: calc(var(--vh) * 100);
  }
}
</style>
