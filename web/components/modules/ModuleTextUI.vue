<script setup lang="ts">
import { portableTextComponents } from '~/utils/sanity-api/portableTextComponents'
import type { TextUI } from '../../types/schema'
import { PortableText, type PortableTextComponents } from '@portabletext/vue'
defineProps<{ input: TextUI }>()
</script>

<template>
  <section class="module module--textUI">
    <div class="inner">
      <ClientOnly>
        <div v-if="input.text && input.text.fr" class="text labeur">
          <PortableText
            :value="input.text.fr"
            :components="portableTextComponents"
          />
        </div>
      </ClientOnly>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.module--textUI {
  padding-top: calc(var(--space-xl) * 1.4);
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
