import camelCase from 'lodash.camelcase'
import { initLDClient, ldClient } from './initLDClient'

export default {
  data() {
    return {
      flags: {},
    }
  },

  provide() {
    return {
      ld: this.$data,
    }
  },

  methods: {
    initLD: async function(clientSideId) {
      this.flags = await initLDClient(clientSideId, { key: 'yus' })
      ldClient.on('change', changes => {
        const flattened = {}
        for (const key in changes) {
          flattened[camelCase(key)] = changes[key].current
        }
        this.flags = { ...this.flags, ...flattened }
      })
    },
  },
}
