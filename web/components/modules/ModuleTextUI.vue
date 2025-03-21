<script setup lang="ts">
import type { TextUI } from '../../types/schema'
import { PortableText, type PortableTextComponents } from '@portabletext/vue'
defineProps<{ input: TextUI }>()

const components: PortableTextComponents = {
  block: {
    'text-lg': (_, { slots }) =>
      h('p', { class: 'text-lg' }, slots.default?.()),
  },
  marks: {
    align_center: (_, { slots }) =>
      h('div', { class: 'text-center' }, slots.default?.()),

    linkExternal: ({ value }, { slots }) => {
      const rel = !value.href.startsWith('/')
        ? 'noreferrer noopener'
        : undefined
      return h('a', { href: value.href, rel }, slots.default?.())
    },
  },
}
</script>

<template>
  <section class="module module--textUI">
    <div class="inner">
      <ClientOnly>
        <div v-if="input.text && input.text.fr" class="text labeur">
          <PortableText :value="input.text.fr" :components="components" />
        </div>
      </ClientOnly>
    </div>
  </section>
</template>

<style lang="scss">
.module {
  padding-top: var(--space-xl);
}
.inner {
  max-width: 800px;
  margin: auto;
  .text {
    .text-lg {
      line-height: 1.2;
    }
    p {
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
