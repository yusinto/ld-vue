<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <p>
            {{this.flags.devTestFlag ? 'Flag on' : 'Flag off'}}
        </p>
    </div>
</template>

<script>
  import Component, {mixins as Mixin} from 'vue-class-component';
  import {withFlags} from '../ld-vue';

  @Component
  export default class Home extends Mixin(withFlags) {
    updated() {
      console.log(`Home.updated.devTestFlag: ${this.flags.devTestFlag}`);
    }

    mounted() {
      console.log(`Home.mounted.devTestFlag: ${this.flags.devTestFlag}`);
    }
  }
</script>
