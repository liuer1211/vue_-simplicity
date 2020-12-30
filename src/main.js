/*
入口JS
 */
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import infiniteScroll from 'vue-infinite-scroll'
import VueScroller from 'vue-scroller'
import BaiduMap from 'vue-baidu-map'

import 'normalize.css/normalize.css'
import './mock/mockServer' // 加载mockServer即可


Vue.use(ElementUI)
Vue.use(infiniteScroll)
Vue.use(VueScroller)
Vue.use(BaiduMap, {
  ak: 'o5kR2wIYSWqM5jPq4q1BaGeKGdCGSkkH'
});

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
  router, //使用上vue-router
  store
})
