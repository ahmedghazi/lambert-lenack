<script setup lang="ts">
import { PortableText } from '@portabletext/vue'
import type { SliderArticlesUI } from '~/types/schema'
import { portableTextComponents } from '~/utils/sanity-api/portableTextComponents'
import SwiperSlider from '../SwiperSlider.vue'
import SwiperSliderActu from '../SwiperSliderActu.vue'
// import SwiperSlider from '../SwiperSlider.vue'

const props = defineProps<{ input: SliderArticlesUI }>()

onMounted(() => {
  console.log('ModuleListArticlesUI mounted')
})
console.log('ModuleListArticlesUI', props.input)
</script>

<template>
  <section class="module module--slider-articles-ui">
    <div class="slider">
      <SwiperSliderActu v-if="input.items" :slides="input.items">
      </SwiperSliderActu>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.module--slider-articles-ui {
  // background-color: red;
}
@media (max-width: 800px) {
  .module {
    padding-top: 0;
  }
}
</style>
