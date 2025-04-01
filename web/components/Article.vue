<script setup lang="ts">
import { PortableText } from '@portabletext/vue'
import type { Article } from '~/types/schema'
import { portableTextComponents } from '~/utils/sanity-api/portableTextComponents'
defineProps<{ input: Article }>()
</script>

<template>
  <article>
    <img
      v-if="input.imageCover"
      class="visual"
      :src="urlFor(input.imageCover).width(500).url()"
      alt="Cover image"
    />

    <div class="header">
      <time v-if="input.date" :datetime="input.date">{{
        _formatDate(input.date)
      }}</time>
      <h2 v-if="input.title && input.title.fr" class="title">
        {{ input.title.fr }}
      </h2>

      <div v-if="input.text && input.text.fr" class="text">
        <PortableText
          :value="input.text.fr"
          :components="portableTextComponents"
        />
      </div>
      <NuxtLink
        v-if="input.link && input.link.link && input.link.label"
        :to="_linkResolver(input.link?.link)"
      >
        {{ input.link.label.fr }}
      </NuxtLink>
    </div>
  </article>
</template>

<style lang="scss" scoped>
article {
  margin-bottom: 15%;
  opacity: 1;
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
</style>
