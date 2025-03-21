<script setup lang="ts">
import { PortableText } from '@portabletext/vue'
import type { ListArticlesUI } from '~/types/schema'

defineProps<{ input: ListArticlesUI }>()

onMounted(() => {
  console.log('ModuleListArticlesUI mounted')
  // console.log()
})

const _formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  })
}
</script>

<template>
  <section class="module module--listArticlesUI">
    <div class="inner">
      <div class="grid grid-cols-1 gap-md">
        <article v-for="item in input.items" :key="item._id">
          <img
            v-if="item.imageCover"
            class="visual"
            :src="urlFor(item.imageCover).width(500).url()"
            alt="Cover image"
          />

          <div class="header">
            <time v-if="item.date" :datetime="item.date">{{
              _formatDate(item.date)
            }}</time>
            <h2 v-if="item.title && item.title.fr" class="title">
              {{ item.title.fr }}
            </h2>

            <div v-if="item.text && item.text.fr" class="text">
              <PortableText :value="item.text.fr" />
            </div>
            <!-- <pre>{{ JSON.stringify(item.link, null, 2) }}</pre> -->
            <NuxtLink
              v-if="item.link && item.link.link && item.link.label"
              :to="_linkResolver(item.link?.link)"
            >
              {{ item.link.label.fr }}
            </NuxtLink>
          </div>
        </article>
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

  article {
    margin-bottom: 15%;
  }
  img {
    width: 100%;
    margin-bottom: 30px;
  }
  h2 {
    font-size: 18px;
    font-weight: normal;
    line-height: 1.2;
    margin: 0 0 15px;
  }
  .text {
    margin-bottom: 10px;
    p {
      font-size: 12px;
      line-height: 1.6;
    }
  }
}
@media (max-width: 800px) {
  .module {
    padding-top: 0;
  }
}
</style>
