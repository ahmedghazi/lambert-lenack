<script setup lang="ts">
import { PortableText } from '@portabletext/vue'
import type { ListArticlesUI } from '~/types/schema'
import { portableTextComponents } from '~/utils/sanity-api/portableTextComponents'

defineProps<{ input: ListArticlesUI }>()

onMounted(() => {
  console.log('ModuleListArticlesUI mounted')
  // console.log()
})
</script>

<template>
  <section class="module module--listArticlesUI">
    <div class="inner">
      <div class="grid grid-cols-1 gap-md">
        <Article v-for="item in input.items" :key="item._id" :input="item" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.module {
  padding-top: var(--space-xl);

  .inner {
    max-width: 800px;
    margin: 0 auto;
  }
}
@media (max-width: 800px) {
  .module {
    padding-top: 0;
  }
}
</style>
