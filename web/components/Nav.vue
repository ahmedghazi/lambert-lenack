<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import type { Settings } from '~/types/schema'
import { settingsQuery } from '~/utils/sanity-api/queries'

const query = groq`${settingsQuery}`
const { data } = await useSanityQuery<Settings>(query, {})
const isMobile = ref<boolean>(false)
const isOpen = ref<boolean>(false)

onMounted(() => {
  if (window.innerWidth < 800) {
    isMobile.value = true
  }
})
const toggle = (val: boolean) => {
  // console.log('toggle', val)
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

// watch(
//   () => isOpen.value,
//   (value) => {
//     // console.log(value)
//     if (value) {
//       animeIn()
//     } else {
//       animeOut()
//     }
//   },
//   { deep: true },
// )

// const animeIn = () => {
//   gsap.to('.nav-item', {
//     opacity: 1,
//     duration: 0.5,
//     stagger: {
//       each: 0.05,
//     },
//   })
// }
// const animeOut = () => {
//   gsap.to('.nav-item', {
//     opacity: 0,
//     duration: 0.5,
//     stagger: {
//       each: 0.05,
//       from: 'end',
//     },
//   })
// }

// const animeOutDelayed = () => {
//   setTimeout(() => {
//     toggle(false)
//   }, 1000)
// }
</script>
<template>
  <nav @click="toggle(!isOpen)" :class="{ 'is-open': isOpen === true }">
    <div id="plus">
      <div><span></span> <span></span></div>
    </div>
    <div class="menu-container">
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
  display: none;
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
    /* opacity: 0; */
  }
}

@media (max-width: 800px) {
  nav {
    inset: 0;
    padding: 20px;
    transition: background-color 0.2s;
    pointer-events: none;

    &.is-open {
      background: #fff;
      pointer-events: all;
      .menu-container {
        display: block;
      }
    }
    #plus {
      pointer-events: all;
      display: block;
    }
    .menu-container {
      display: none;
    }
  }
}
</style>
