import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {presentationTool} from 'sanity/presentation'
import {visionTool} from '@sanity/vision'
import schemaTypes from './schemaTypes'
import {structure} from './src/deskStructure'
import {media} from 'sanity-plugin-media'
import {linkResolver} from './src/linkResolver'
import {resolveProductionUrlAlt} from './src/actions/resolveProductionUrlAlt'

// import {schemaTypes} from './schemas'

export const projectId = process.env.SANITY_STUDIO_PROJECT_ID!
export const dataset = process.env.SANITY_STUDIO_DATASET!
const remoteURL = 'https://www.lambertlenack.com'
const localURL = 'http://localhost:3000'
const previewURL = window.location.hostname === 'localhost' ? localURL : remoteURL

export default defineConfig({
  name: 'lambert-lenack',
  title: 'Lambert Lénack',
  projectId,
  dataset,

  plugins: [
    structureTool({structure}),
    media(),
    presentationTool({
      title: 'Live preview',
      resolve: linkResolver,
      previewUrl: {
        origin: previewURL,
        // process.env.SANITY_STUDIO_PREVIEW_URL ||
        // 'https://backoffice--lambert-lenack.sanity.studio',
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
  document: {
    productionUrl: async (prev, context) => {
      const {document} = context

      return resolveProductionUrlAlt(document)
    },
    // actions: [resolveProductionUrl],
  },
})
