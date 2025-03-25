import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {presentationTool} from 'sanity/presentation'
import {visionTool} from '@sanity/vision'
import schemaTypes from './schemaTypes'
import {structure} from './src/deskStructure'
import {media} from 'sanity-plugin-media'
import {linkResolver} from './src/linkResolver'

// import {schemaTypes} from './schemas'

export const projectId = process.env.SANITY_STUDIO_PROJECT_ID!
export const dataset = process.env.SANITY_STUDIO_DATASET!

export default defineConfig({
  name: 'lambert-lenack',
  title: 'Lambert Lénack',
  projectId,
  dataset,
  // plugins: [structureTool({structure}), visionTool(), ...(isDev ? devOnlyPlugins : []), media()],

  plugins: [
    structureTool({structure}),
    media(),
    presentationTool({
      title: 'Live preview',
      resolve: linkResolver,
      previewUrl: {
        origin: process.env.SANITY_STUDIO_PREVIEW_URL || 'http://localhost:3000',
        // preview: '/',
        previewMode: {
          enable: '/preview/enable',
          disable: '/preview/disable',
        },
      },
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
})
