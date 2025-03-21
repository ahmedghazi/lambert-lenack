<script setup lang="ts">
import ContentModules from '~/components/ContentModules.vue'
import type { PageModulaire, Project } from '~/types/schema'
import { homeQuery } from '~/utils/sanity-api/queries'

const query = groq`${homeQuery}`
const { data } = await useSanityQuery<PageModulaire>(query)
</script>

<template>
  <div class="content content--home">
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
