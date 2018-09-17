<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <p>
            {{this.ld.flags.devTestFlag ? 'Flag on' : 'Flag off'}}
        </p>
    </div>
</template>

<script>
//    export default {
//      inject: ['ld'],
//      updated() {
//        console.log(`Home.updated.devTestFlag: ${this.ld.flags.devTestFlag}`);
//      },
//      created() {
//        console.log(`Home.created.devTestFlag: ${this.ld.flags.devTestFlag}`);
//      }
//    };
  import Component, {mixins as Mixin} from 'vue-class-component';
  import WithFlags from '../ld-vue/withFlags';

  @Component
  export default class Home extends Mixin(WithFlags) {
    updated() {
      console.log(`Home.updated.devTestFlag: ${this.ld.flags.devTestFlag}`);
    }

    mounted() {
      console.log(`Home.mounted.devTestFlag: ${this.ld.flags.devTestFlag}`);
    }
  }
</script>
