// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

import 'normalize.css/normalize.css'
import './mock/mockServer' // 加载mockServer即可

Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App),
  router //使用上vue-router
})
