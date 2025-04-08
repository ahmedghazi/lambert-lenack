<script setup lang="ts">
import type { PageModulaire, Seo } from '~/types/schema'
import { pageModulaireQuery } from '~/utils/sanity-api/queries'

const route = useRoute()
const query = groq`${pageModulaireQuery}`
const { data } = await useSanityQuery<PageModulaire>(query, {
  slug: route.params.slug,
})

if (!data.value) {
  console.error('No data returned from Sanity query')
  throw createError({
    statusCode: 404,
    statusMessage: "Désolé la page demandée n'existe pas.",
  })
}

const pageData = data.value || ({} as PageModulaire)
const seo = pageData.seo || ({} as Seo)
const pageTitle = seo.metaTitle || pageData?.title?.fr || 'Lambert Lénack'

useSeoMeta({
  title: `Lambert Lénack — ${pageTitle}`,
  ogTitle: pageTitle,
  ogDescription: seo?.metaDescription || '',
  description: seo?.metaDescription || '',
  ogImage: seo?.metaImage?.asset?.url || '',
})

// Debug logging
console.log('SEO Data:', {
  title: pageTitle,
  description: seo?.metaDescription,
  image: seo?.metaImage?.asset?.url,
})
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
