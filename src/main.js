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
// import VueScrollProgress from 'vue-scroll-progress';
// import animated from 'animate.css'
import vant from 'vant';
import 'vant/lib/index.css';
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
import '../node_modules/echarts/map/js/china.js' // 引入中国地图
import md5 from 'js-md5';
Vue.prototype.$md5 = md5;

import 'normalize.css/normalize.css'
import './mock/mockServer' // 加载mockServer即可

import '@/permission' // 全局路由配置


// Vue.use(animated)
Vue.use(ElementUI)
Vue.use(infiniteScroll)
Vue.use(VueScroller)
Vue.use(BaiduMap, {
  ak: 'o5kR2wIYSWqM5jPq4q1BaGeKGdCGSkkH'
});
// Vue.use(VueScrollProgress)
Vue.use(vant)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
  router, //使用上vue-router
  store
})
