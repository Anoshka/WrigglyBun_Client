import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {presentationTool} from 'sanity/presentation'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {structure} from './structure'

const previewOrigin =
  // eslint-disable-next-line no-undef -- Sanity Studio injects process.env at build time
  process.env.SANITY_STUDIO_PREVIEW_ORIGIN || 'https://wrigglybunview.netlify.app'

export default defineConfig({
  name: 'default',
  title: 'WrigglyBun — Edit Content',

  projectId: 'q7ct7sx2',
  dataset: 'production',

  plugins: [
    presentationTool({
      previewUrl: {
        origin: previewOrigin,
        previewMode: {
          enable: '/preview/enable',
          disable: '/preview/disable',
        },
      },
    }),
    structureTool({structure}),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
