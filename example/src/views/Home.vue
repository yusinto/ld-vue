<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <p>
            {{this.$root.$data.flags.devTestFlag ? 'Flag on' : 'Flag off'}}
        </p>
    </div>
</template>

<script>
  import {Component, Vue} from 'vue-property-decorator';

  @Component
  export default class Home extends Vue {
    updated() {
      console.log(`Home.updated.devTestFlag: ${this.$root.$data.flags.devTestFlag}`);
    }

//    mounted() {
//      console.log(`Home.mounted.devTestFlag: ${this.$root.$data.flags.devTestFlag}`);
//    }
  }
</script>
