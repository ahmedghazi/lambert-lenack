/**
 * Sanity CLI Configuration
 * This file configures the Sanity CLI tool with project-specific settings
 * and customizes the Vite bundler configuration.
 * Learn more: https://www.sanity.io/docs/cli
 */

import {defineCliConfig} from 'sanity/cli'

// const projectId = process.env.SANITY_STUDIO_PROJECT_ID || 'awak6olh'
// const dataset = process.env.SANITY_STUDIO_DATASET || 'production'

export default defineCliConfig({
  api: {
    projectId: 'awak6olh',
    dataset: 'production',
  },
  studioHost: process.env.SANITY_STUDIO_STUDIO_HOST || 'backoffice--lambert-lenack', // Visit https://www.sanity.io/docs/environment-variables to leanr more about using environment variables for local & production.
  deployment: {
    autoUpdates: true,
    appId: 'g0jm68x85ededbyfdqai5nxr',
  },
})
