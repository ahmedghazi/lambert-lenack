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
    <div class="grid grid-cols-1- gap-y-md md:grid-cols-4">
      <Card v-for="item in input.items || []" :key="item._id" :input="item" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.module {
  article {
    opacity: 0;
  }
}
@media screen and (min-width: 600px) {
  .grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media screen and (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
@media screen and (min-width: 1200px) {
  .module {
    padding-top: var(--space-xl);
  }
  .grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}
</style>
