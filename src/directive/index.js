import Vue from 'vue'

Vue.directive('color',{
  bind:function(el,bindings){
    //首次调用
  },
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el, binding, vNode) {
    // console.log('i1-',el)
    // console.log('i2-',binding)
    // console.log('i22-',binding.value)
    // console.log('i3-',vNode)
  },
  update:function(el, binding, vNode){
    //只要是有数据变化，都会调用
    console.log('u1-',el)
    console.log('u2-',binding)
    // console.log('u22-',binding.value)
    if (binding.value !== '111') {
      console.log('不为指定的值')
    }
    console.log('u3-',vNode)
  },
  unbind:function(){
    //解绑
  }
})

Vue.directive('focus',{
  bind:function(el){
    el.focus()
    console.log('f1-')
  },
  updated:function(el){
    el.focus()
    console.log('f2-')
  },
  inserted:function(el){
    el.focus()
    console.log('f3-')
  },
})
