import Vue from 'vue/dist/vue.esm'
import VueAppend from '../'

// use the plugin
Vue.use(VueAppend);

const html = `
<div id="test">1</div>
<script
  src="https://code.jquery.com/jquery-3.4.1.min.js"
  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  crossorigin="anonymous"></script>
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
      console.log('appended!');
      alert(window.jQuery);
    }
  }
});
