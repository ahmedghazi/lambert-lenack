<script lang="ts" setup>
import type { Project } from '~/types/schema'
import { urlFor } from '~/utils'

defineProps<{ input: Project }>()
</script>

<template>
  <article class="card">
    <NuxtLink :to="_linkResolver(input)">
      <img
        v-if="input.imageCover"
        class="visual"
        :src="urlFor(input.imageCover).width(500).height(500).url()"
        alt="Cover image"
      />

      <div v-else class="card__cover--none" />

      <div class="header">
        <h2 v-if="input.title" class="card__title">{{ input.title.fr }}</h2>
      </div>
    </NuxtLink>
  </article>
</template>

<style scoped lang="scss">
.card {
  font-size: var(--text-sm);

  &:hover {
    .header {
      opacity: 1;
    }
  }
  .visual {
    /* margin-bottom: 19%; */
    aspect-ratio: 1 / 1;
    object-fit: contain;
  }
  .header {
    text-align: center;
    transition: opacity 0.5s;
    opacity: 0;
    transform: translateY(-3em);
    h2 {
      text-align: center;
      line-height: 1.2;
      text-transform: uppercase;
    }
  }
}
@media (min-width: 575px) {
}

@media (min-width: 800px) {
}
</style>
