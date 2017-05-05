import Vue from 'vue/dist/vue.esm'
import VueAppend from '../'

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
  }
});