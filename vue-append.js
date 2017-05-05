;(function () {
  var vueAppend = {}

  var slice = [].slice,
    singleTagRE = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    tagExpanderRE = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
    table = document.createElement('table'),
    fragmentRE = /^\s*<(\w+|!)[^>]*>/,
    tableRow = document.createElement('tr'),
    containers = {
      'tr': document.createElement('tbody'),
      'tbody': table, 'thead': table, 'tfoot': table,
      'td': tableRow, 'th': tableRow,
      '*': document.createElement('div')
    };

  var fragment = function(html, name, properties) {
    var dom, nodes, container
    // A special case optimization for a single tag
    if (singleTagRE.test(html)) dom = document.createElement(RegExp.$1)

    if (!dom) {
      if (html.replace) html = html.replace(tagExpanderRE, "<$1></$2>")
      if (name === undefined) name = fragmentRE.test(html) && RegExp.$1
      if (!(name in containers)) name = '*'

      container = containers[name]
      container.innerHTML = '' + html
      dom = slice.call(container.childNodes).map(function(child){
        return container.removeChild(child)
      })
    }

    return dom
  }

  function traverseNode(node, fun) {
    fun(node)
    for (var key in node.childNodes) traverseNode(node.childNodes[key], fun)
  }

  var append = function (nodes, target) {
    nodes.forEach(function(_node){
      var node = _node.cloneNode(true)

      traverseNode(target.insertBefore(node, target.nextSibling), function(el){
        if (el.nodeName != null && el.nodeName.toUpperCase() === 'SCRIPT' &&
          (!el.type || el.type === 'text/javascript') && !el.src)
          window['eval'].call(window, el.innerHTML)
      })
    })
  }

  // exposed global options
  vueAppend.config = {};

  vueAppend.install = function (Vue) {


    Vue.directive('append', {
      inserted: function (el, data) {
        append(fragment(data.value), el);
      }
    })
  }

  if (typeof exports == "object") {
    module.exports = vueAppend
  } else if (typeof define == "function" && define.amd) {
    define([], function(){ return vueAppend })
  } else if (window.Vue) {
    window.VueTouch = vueAppend
    Vue.use(vueAppend)
  }

})()
