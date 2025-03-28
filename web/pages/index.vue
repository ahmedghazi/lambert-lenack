<script setup lang="ts">
import ContentModules from '~/components/ContentModules.vue'
import type { PageModulaire, Project, Seo } from '~/types/schema'
import { homeQuery } from '~/utils/sanity-api/queries'

const query = groq`${homeQuery}`
const { data, refresh } = await useSanityQuery<PageModulaire>(query)

if (data && data.value?.seo) {
  const seo: Seo = data.value.seo
  useSeoMeta({
    title: `Accueil — ${seo?.metaTitle} | ${data?.value.title}`,
    ogTitle: seo?.metaTitle,
    ogDescription: seo?.metaDescription,
    description: seo?.metaDescription,
    ogImage: seo?.metaImage?.asset.url,
  })
}
</script>

<template>
  <div class="content content--home">
    <!-- <pre>{{ JSON.stringify(data?.seo, null, 2) }}</pre> -->
    <ContentModules v-if="data && data.modules" :input="data.modules" />
  </div>
</template>

<style scoped>
.content {
  padding: calc(var(--space-xxl) / 2) var(--space-xxl);
}
@media (max-width: 800px) {
  .content {
    padding-left: 66px;
    padding-right: 66px;
    padding-top: 130px;
  }
}
</style>
