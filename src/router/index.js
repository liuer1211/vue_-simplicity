import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/page/main/index' // 首页
import Login from '@/page/login/login' // 登陆
import Swiper from '@/page/swiper/swiper' // 九宫格

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/swiper',
      name: 'swiper',
      component: Swiper
    }
  ]
})
