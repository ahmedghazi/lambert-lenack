<script setup lang="ts">
import type {
  ListArticlesUI,
  ListProjectsUI,
  SliderArticlesUI,
  SanityKeyed,
  TextUI,
} from '~/types/schema'
import ModuleListProjectsUI from './modules/ModuleListProjectsUI.vue'
import ModuleTextUI from './modules/ModuleTextUI.vue'
import ModuleListArticlesUI from './modules/ModuleListArticlesUI.vue'
import ModuleSliderArticlesUI from './modules/ModuleSliderArticlesUI.vue'
// import { modules } from '~/utils/sanity-api/fragments'

defineProps({
  input: Array<
    | SanityKeyed<TextUI>
    | SanityKeyed<ListProjectsUI>
    | SanityKeyed<ListArticlesUI>
    | SanityKeyed<SliderArticlesUI>
  >,
})
</script>

<template>
  <div class="modules" v-for="item in input" :key="item._key">
    <!-- <div>{{ item._type }}</div> -->
    <div v-if="item._type == 'listProjectsUI'">
      <ModuleListProjectsUI :input="item" />
    </div>
    <div v-if="item._type == 'listArticlesUI'">
      <ModuleListArticlesUI :input="item" />
    </div>
    <div v-if="item._type == 'sliderArticlesUI'">
      <ModuleSliderArticlesUI :input="item" />
    </div>
    <div v-if="item._type == 'textUI'">
      <ModuleTextUI :input="item" />
    </div>
  </div>
</template>

<style lang=""></style>
