import camelCase from 'lodash.camelcase'
import { initLDClient, ldClient } from './initLDClient'

export default ({clientSideId, user, options}) => ({
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

  mounted() {
    this.initLD()
  },

  methods: {
    initLD: async function() {
      this.flags = await initLDClient(clientSideId, user, options);
      ldClient.on('change', changes => {
        const flattened = {}
        for (const key in changes) {
          flattened[camelCase(key)] = changes[key].current
        }
        this.flags = { ...this.flags, ...flattened }
      })
    },
  },
})
