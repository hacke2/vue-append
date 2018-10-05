# vue-append

> vue-append, like v-html directive, but it can call javascript function

## Install

```
npm install vue-append --save
# or
yarn add vue-append
```

#### Es6 module

- Available through npm as `vue-append`.

``` js
  import VueAppend from 'vue-append'
  Vue.use(VueAppend)
```

#### CommonJS

``` js
  var VueAppend = require('vue-append')
  Vue.use(VueAppend)
```

#### Direct include

- You can also directly include it with a `<script>` tag. It will automatically install itself, and will add a global `VueAppend`.

## Event

### appended

- if html append and no throw error, it will fire `appended` event.

### appenderr

- if throw error when html appended, it will fire `appenderr` event.

## Usage

#### Using the `v-append` directive

template:

``` html
<div id="app">
    <div v-append="html" @appended="appended"></div>
</div>
```

js:

```js
import Vue from 'vue/dist/vue.esm'
import VueAppend from 'vue-append'

// use the plugin
Vue.use(VueAppend);

const html = `
<div id="test">1</div>
<script>
var i = 1;
setInterval(function() {
    document.getElementById("test").innerHTML = ++i;
}, 1000);
</script>

`;

new Vue({
  el: '#app',
  data: {
    html: html
  },
  methods: {
    appended() {
      console.log('appended!')
    }
  }
});
```

See `/example` for a timer demo. To build it, run `npm install && npm run build`.

## License

[MIT](http://opensource.org/licenses/MIT)
