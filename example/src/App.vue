<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
  import {Component, Prop, Vue} from 'vue-property-decorator';
  import camelCase from 'lodash.camelcase';
  import {initLDClient, ldClient} from './initLDClient';

  @Component
  export default class App extends Vue {
    mounted() {
      this.$nextTick(async () => {
        this.$root.$data.flags= await initLDClient('client-side-id', {key: 'yus'});

        ldClient.on('change', changes => {
          const flattened = {};
          for (const key in changes) {
            flattened[camelCase(key)] = changes[key].current;
          }
          this.$root.$data.flags = {...this.$root.$data.flags, ...flattened};
        });
      })
    }
  }
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
