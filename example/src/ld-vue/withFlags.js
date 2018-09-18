export default {
  inject: ['ld'],

  computed: {
    flags: function() {
      return this.ld.flags
    },
  },
}
