<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import type { Settings } from '~/types/schema'
import { settingsQuery } from '~/utils/sanity-api/queries'

const query = groq`${settingsQuery}`
const { data } = await useSanityQuery<Settings>(query, {})

const isOpen = ref<boolean>(false)
const toggle = (val: boolean) => {
  isOpen.value = val
}

const route = useRoute()

watch(
  route,
  (value) => {
    toggle(false)
  },
  { deep: true, immediate: true },
)

watch(
  () => isOpen.value,
  (value) => {
    console.log(value)
    if (value) {
      animeIn()
    } else {
      animeOut()
    }
  },
)

// const tl = gsap.timeline({ paused: true })
const animeIn = () => {
  gsap.fromTo(
    '.nav-item',
    { opacity: 0 },
    {
      opacity: 1,
      duration: 0.5,
      stagger: {
        each: 0.05,
      },
    },
  )
}
const animeOut = () => {
  gsap.fromTo(
    '.nav-item',
    { opacity: 1 },
    {
      opacity: 0,
      duration: 0.5,
      stagger: {
        each: 0.05,
        from: 'end',
      },
    },
  )
}
</script>
<template>
  <nav
    @click="toggle(!isOpen)"
    @mouseenter="toggle(true)"
    @mouseleave="toggle(false)"
    :class="{ 'is-open': isOpen === true }"
  >
    <div id="plus">
      <div><span></span> <span></span></div>
    </div>
    <div>
      <ul class="nav-primary">
        <li v-for="li in data?.navPrimary" :key="li._key" class="nav-item">
          <NuxtLink
            v-if="li._type === 'linkInternal' && li.link"
            :to="_linkResolver(li.link)"
          >
            <span v-if="li.label">{{ li.label.fr }}</span>
          </NuxtLink>
        </li>
      </ul>
      <ul class="nav-secondary">
        <li v-for="li in data?.navSecondary" :key="li._key" class="nav-item">
          <NuxtLink
            v-if="li._type === 'linkInternal' && li.link"
            :to="_linkResolver(li.link)"
          >
            <span v-if="li.label">{{ li.label.fr }}</span>
          </NuxtLink>
          <a
            v-if="li._type === 'linkExternal'"
            :href="li.link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ li.label }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  padding: 20px 40px;
  /* top: 20px; */
  /* left: 40px; */
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 88px;
  text-transform: uppercase;
}
#plus {
  transition:
    opacity 0.2s,
    visibility 0.2s;
  transition-delay: 0.8s;
  width: 32px;
  height: 32px;
  display: block;
  z-index: 1001;
  margin-left: -8px;
  margin-top: -8px;
  cursor: pointer;
}
#plus > div {
  transform: translateY(16px) translateX(8px);
}
#plus span {
  background: #333;
  width: 16px;
  height: 2px;
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  transition: transform 100ms linear;
}
#plus span:first-child {
  transform: rotate(90deg);
}
ul {
  margin-bottom: 18px;
  li {
    font-size: 11px;
    line-height: 18px;
    opacity: 0;
  }
}

@media (max-width: 800px) {
  nav {
    inset: 0;
    padding: 20px;
    transition: background-color 0.2s;
    pointer-events: none;
    #plus {
      pointer-events: all;
    }
    &.is-open {
      background: #fff;
      pointer-events: all;
    }
  }
}
</style>
