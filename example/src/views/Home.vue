<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <p>
            {{this.flags.devTestFlag ? 'Flag on' : 'Flag off'}}
        </p>
    </div>
</template>
<script>
import Component, { mixins as Mixin } from 'vue-class-component'
import { withFlags } from 'ld-vue'

@Component
export default class Home extends Mixin(withFlags) {}
</script>
