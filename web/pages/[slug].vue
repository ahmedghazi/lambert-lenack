<script setup lang="ts">
import type { PageModulaire } from '~/types/schema'
import { pageModulaireQuery } from '~/utils/sanity-api/queries'

const route = useRoute()
const query = groq`${pageModulaireQuery}`
const { data } = await useSanityQuery<PageModulaire>(query, {
  slug: route.params.slug,
})

// definePageMeta({
//   title: data && data.seo ? data.seo.metaTitle : 'title',
//   description: 'desc',
// })
</script>

<template>
  <div class="content content--page-modulaire">
    <ContentModules v-if="data && data.modules" :input="data.modules" />
  </div>
</template>

<style scoped>
.content {
  padding: calc(var(--space-xxl) / 2) var(--space-xxl);
}
@media (max-width: 800px) {
  .content {
    padding-left: 56px;
    padding-right: 56px;
    padding-top: 130px;
  }
}
</style>
