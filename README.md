# ld-vue

[![npm version](https://img.shields.io/npm/v/ld-vue.svg?style=flat-square)](https://www.npmjs.com/package/ld-vue) [![npm downloads](https://img.shields.io/npm/dm/ld-vue.svg?style=flat-square)](https://www.npmjs.com/package/ld-vue) [![npm](https://img.shields.io/npm/dt/ld-vue.svg?style=flat-square)](https://www.npmjs.com/package/ld-vue) [![npm](https://img.shields.io/npm/l/ld-vue.svg?style=flat-square)](https://www.npmjs.com/package/ld-vue)

> **The quickest and easiest way to integrate launch darkly with Vue** :tada:

Why this package?
* Easy and fast to use. Two steps to get feature flags into your Vue app.
* Supports subscription out of the box. You get live changes on the client as you toggle features.
* You automatically get camelCased keys as opposed to the default kebab-cased.

## Installation

yarn add ld-vue

## Quickstart

1. Use the `withFlagProvider` mixin on your root App:

    ```js
    <script>
    import Component, { mixins } from 'vue-class-component'
    import { withFlagProvider } from 'ld-vue'

    @Component
    export default class App extends mixins(withFlagProvider('client-side-id'),) {}
    </script>
    ```

2. Use the `withFlags` mixin on any components needing flags:

    ```js
    <template>
      <div>
        {{this.flags.devTestFlag ? 'Flag on' : 'Flag off'}}
      </div>
    </template>
    <script>
    import Component, { mixins } from 'vue-class-component'
    import { withFlags } from 'ld-vue'

    @Component
    export default class Home extends mixins(withFlags) {}
    </script>
    ```

That's it!

## API
### withFlagProvider({clientSideId, user, options})
This is a mixin which accepts a config object with the above properties. `clientSideId` is
mandatory.

For example:

```js
<script>
import Component, { mixins } from 'vue-class-component'
import { withFlagProvider } from 'ld-vue'

@Component
export default class App extends mixins(withFlagProvider('client-side-id'),) {}
</script>
```

The `user` property is optional. You can initialise the sdk with a custom user by specifying one. This must be an object containing
at least a "key" property. If you don't specify a user object, ld-vue will create a default one that looks like this:

```js
const defaultUser = {
  key: uuid.v4(), // random guid
  ip: ip.address(),
  custom: {
    browser: userAgentParser.getResult().browser.name,
    device
  }
};
```

For more info on the user object, see [here](http://docs.launchdarkly.com/docs/js-sdk-reference#section-users).

The `options` property is optional. It can be used to pass in extra options such as [Bootstrapping](https://github.com/launchdarkly/js-client#bootstrapping).
For example:

```javascript
withFlagProvider({
    clientSideId,
    options: {
      bootstrap: 'localStorage',
    },
});
```

### withFlags
This is a mixin which injects all your flags to the specified component via props. Your flags will be available
as camelCased properties under `this.props.flags`. For example:

```js
<template>
  <div>
    {{this.flags.devTestFlag ? 'Flag on' : 'Flag off'}}
  </div>
</template>
<script>
import Component, { mixins } from 'vue-class-component'
import { withFlags } from 'ld-vue'

@Component
export default class Home extends mixins(withFlags) {}
</script>
```

### ldClient
Internally ld-vue initialises the ldclient-js sdk and stores a reference to the resultant ldClient object in memory.
You can use this object to access the [official sdk methods](https://github.com/launchdarkly/js-client) directly. 
For example, you can do things like:

```js
<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import {ldClient} from 'ld-vue';

@Component
export default class Home extends Vue {
  mounted() {
    ldClient.track('home page loaded');
  }
}
</script>
```

For more info on changing user context, see the [official documentation](http://docs.launchdarkly.com/docs/js-sdk-reference#section-changing-the-user-context).

## Example
Check the [example](https://github.com/yusinto/ld-vue/tree/master/example) for a standard vue cli app with feature flags.
Remember to enter your client side sdk in the [root app file](https://github.com/yusinto/ld-vue/blob/master/example/src/App.vue)
and create a test flag called `dev-test-flag` before running the example!
