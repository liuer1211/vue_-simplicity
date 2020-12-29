import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/page/main/index' // 首页
import Login from '@/page/login/login' // 登陆
import Swiper from '@/page/swiper/swiper' // 九宫格
import Top1 from '@/page/top/top1' // 下拉加载
import DropDown from '@/page/dropDown/dropDown' // 无限滚动
import Scroller from '@/page/dropDown/scroller' // 下拉刷新，上拉加载

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
    },
    {
      path: '/dropDown',
      name: 'dropDown',
      component: DropDown
    },
    {
      path: '/top1',
      name: 'top1',
      component: Top1
    },
    {
      path: '/scroller',
      name: 'scroller',
      component: Scroller
    }
  ]
})
