import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/page/main/index'
import Login from '@/page/login/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: Index
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
