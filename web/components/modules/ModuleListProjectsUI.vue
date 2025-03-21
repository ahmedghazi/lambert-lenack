<script setup lang="ts">
import type { Project, ListProjectsUI } from '~/types/schema'

defineProps<{ input: ListProjectsUI }>()
</script>

<template>
  <section class="module module--listProjectsUI">
    <div class="grid grid-cols-1 gap-md md:grid-cols-4">
      <Card v-for="item in input.items || []" :key="item._id" :input="item" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.module {
  padding-top: var(--space-xl);
}
</style>
