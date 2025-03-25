// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/sanity',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          'IBM Plex Mono': [500, 700],
          Inter: [500, 700, 800],
          'PT Serif': [400, 700],
          download: true,
          inject: true,
        },
      },
    ],
    '@nuxtjs/tailwindcss',
    'nuxt-swiper',
  ],

  sanity: {
    // minimal: false,
    projectId: process.env.NUXT_SANITY_PROJECT_ID,
    dataset: process.env.NUXT_SANITY_DATASET,
    useCdn: true, // `false` if you want to ensure fresh data
    apiVersion: process.env.NUXT_SANITY_API_VERSION || '2024-03-15',
    globalHelper: true,
    visualEditing: {
      studioUrl: process.env.NUXT_SANITY_STUDIO_URL || 'http://localhost:3333',
      token: process.env.NUXT_SANITY_API_READ_TOKEN,
      zIndex: 9999,
      // stega: true,
    },
  },

  postcss: {
    plugins: {
      autoprefixer: {},
      'postcss-nested': {},
    },
  },
  vite: {
    optimizeDeps: {
      include: ['shallowequal', 'lodash/startCase.js'],
    },
  },

  compatibilityDate: '2024-12-17',
})
