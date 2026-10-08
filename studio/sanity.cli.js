import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'q7ct7sx2',
    dataset: 'production'
  },
  studioHost: 'wrigglybun',
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/cli#auto-updates
     */
    autoUpdates: true,
    appId: 'x74up530sk1nbhdh8vr5vem4',
  }
})
