<script setup lang="ts">
import type { Project, ListProjectsUI } from '~/types/schema'
import gsap from 'gsap'

defineProps<{ input: ListProjectsUI }>()

onMounted(() => {
  gsap.to('.card', {
    opacity: 1,
    duration: 0.5,
    stagger: {
      each: 0.2,
    },
  })
})
</script>

<template>
  <section class="module module--listProjectsUI">
    <div class="grid grid-cols-1 gap-md md:grid-cols-4">
      <Card v-for="item in input.items || []" :key="item._id" :input="item" />
    </div>
  </section>
</template>

<style lang="scss">
.module {
  padding-top: var(--space-xl);
  article {
    opacity: 0;
  }
}
</style>
