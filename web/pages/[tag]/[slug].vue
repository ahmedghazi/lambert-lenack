<script setup lang="ts">
import { PortableText } from '@portabletext/vue'
import { projectQuery } from '~/utils/sanity-api/queries'
import type { Project } from '~/types/schema'

const route = useRoute()
// console.log(route.params)
const query = groq`${projectQuery}`
const { data } = await useSanityQuery<Project>(query, {
  slug: route.params.slug,
})

const isCredit = ref<boolean>(false)
const toggleCredits = () => {
  isCredit.value = !isCredit.value
}
</script>

<template>
  <section v-if="data" class="content content--project">
    <div class="slider">
      <SwiperSlider
        v-if="data.slider"
        :slider="data.slider"
        :goToCredits="isCredit"
      >
        <template #text>
          <div class="infos">
            <div v-if="data.text && data.text.fr" class="text">
              <PortableText :value="data.text.fr" />
            </div>
            <div class="metas">
              <ul>
                <li v-for="(item, idx) in data.metas" :key="idx">
                  {{ item.key }}:
                  <PortableText
                    v-if="item.val && item.val.fr"
                    :value="item.val.fr"
                  />
                </li>
              </ul>
            </div>
          </div>
        </template>
      </SwiperSlider>
    </div>

    <div class="footer">
      <div class="inner">
        <h1 v-if="data.title" @click="toggleCredits">{{ data.title.fr }}</h1>
        <span v-if="!isCredit">+</span>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.content {
  padding: calc(var(--space-xxl) / 2) var(--space-xxl);
}
.footer {
  position: fixed;
  padding: var(--space-xl);
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  /* display: flex; */
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  .inner {
    /*
    gap: 1em; */
    display: inline-block;
  }
  h1 {
    cursor: pointer;
  }
  span {
    position: absolute;
    right: -1.4em;
    top: -0.222em;
    font-size: 1.333em;
  }
}
.infos {
  width: 75%;
  max-width: 350px;
  max-height: 75%;
  margin: 0;
  overflow-y: auto !important;
  overflow-anchor: none;
  -ms-overflow-style: none;
  touch-action: auto;
  -ms-touch-action: auto;
  scrollbar-color: #ddd #fff;
  scrollbar-gutter: stable;
  appearance: none;
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  font-size: 11px;
  p {
    padding-right: 15px;
  }
  .metas {
    margin-top: 40px;
    column-count: 2;
    li {
      margin-bottom: 10px;
    }
  }
}
@media (max-width: 800px) {
  .content {
    padding-left: 66px;
    padding-right: 66px;
    padding-top: 130px;
    padding: 0 20px;
    /* padding: 65px 20px; */
  }
  .footer {
    padding: 15px;
    z-index: 51;
  }
}
</style>
