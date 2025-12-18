# lambert lénack

Lambert Lénack — Web + CMS Monorepo
A monorepo containing the public website built with Nuxt 3 and a Sanity v3 Studio for content management.

Monorepo Structure
web — Nuxt 3 application (frontend)
studio — Sanity Studio v3 (CMS)
Package manager: Yarn 1 workspaces

Tech Stack
Nuxt 3 with @nuxtjs/sanity, TailwindCSS, nuxt-swiper, GSAP
Sanity v3 Studio with Presentation Tool and Media plugin
Prettier formatting
Getting Started
Install
Root: yarn install
Develop (both apps together)
Root: yarn dev (runs web at http://localhost:3000 and studio at http://localhost:3333)
Develop individually
Web: yarn workspace web dev
Studio: yarn workspace studio dev
Environment Variables
Create .env files as needed (root or per workspace).

Web (web/)
NUXT_SANITY_PROJECT_ID — Sanity project ID
NUXT_SANITY_DATASET — Sanity dataset (e.g., production)
NUXT_SANITY_API_VERSION — Optional, defaults to 2024-03-15
NUXT_SANITY_STUDIO_URL — For visual editing (default: http://localhost:3333)
NUXT_SANITY_API_READ_TOKEN — Optional read token for preview/visual editing
Studio (studio/)
SANITY_STUDIO_PROJECT_ID — Sanity project ID
SANITY_STUDIO_DATASET — Sanity dataset
Notes:

GA config is present in runtimeConfig.public.googleAnalytics in web/nuxt.config.ts.
Visual editing/preview is wired via the Sanity Presentation Tool (enable/disable routes under /preview/...).
Useful Scripts
Root
yarn dev — Run web and studio concurrently
yarn format — Prettier
Web
yarn workspace web dev — Nuxt dev server
yarn workspace web build — Build
yarn workspace web preview — Preview production build
yarn workspace web generate — Static generate (if deploying as SSG)
Studio
yarn workspace studio dev — Sanity Studio dev
yarn workspace studio build — Build Studio
yarn workspace studio deploy — Deploy Studio
yarn workspace studio deploy-graphql — Deploy GraphQL API
yarn workspace studio codegen — Generate TypeScript types from Sanity schema
Development Notes
Tailwind config in web/tailwind.config.js
Nuxt config in web/nuxt.config.ts:
nuxtjs/sanity
setup and visual editing
routeRules includes a redirect for /fr/** to /**
PostCSS includes postcss-nested
Sanity config in studio/sanity.config.ts:
Presentation Tool with preview URLs pointing to the Nuxt app
Custom structure and media plugin
Build & Deploy
Web
For static hosting: yarn workspace web generate
For SSR hosting: yarn workspace web build (serve with a Node adapter or platform of choice)
Studio
Deploy to Sanity managed hosting: yarn workspace studio deploy
