# vue-append

> vue-append, like v-html directive, but it can call javascript function

## Install

```
npm install vue-append --save
#or
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

## Usage

#### Using the `v-append` directive

template:

``` html
<a v-append="html"></a>
```

html:

```html
<div id="test">1</div>
<script>
var i = 1;
setInterval(function() {
    document.getElementById("test").innerHTML = ++i;
}, 1000);
</script>
```

See `/example` for a timer demo. To build it, run `npm install && npm run build`.

## License

[MIT](http://opensource.org/licenses/MIT)
