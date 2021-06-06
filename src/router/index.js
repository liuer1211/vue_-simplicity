import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/page/main/index' // 首页
import Login from '@/page/login/login' // 登陆
import Swiper from '@/page/swiper/swiper' // 九宫格
import Top1 from '@/page/top/top1' // 吸顶1
import Top2 from '@/page/top/top2' // 吸顶2
import DropDown from '@/page/dropDown/dropDown' // 无限滚动
import Scroller from '@/page/dropDown/scroller' // 下拉刷新，上拉加载
import Mescroll from '@/page/dropDown/mescroll' // 下拉刷新，上拉加载
import Map from '@/page/map/map' // 百度地图
import User from '@/page/user/user' // 我的
import Echarts from '@/page/echarts/echarts' // 图标
import Music from '@/page/music/music' // 音乐
import Novel from '@/page/novel/novel' // 小说
import Song from '@/page/song/song' // 歌曲
import Poetry from '@/page/poetry/poetry' // 诗词
import Game from '@/page/game/game' // 游戏
import Achievement from '@/page/achievement/achievement' // 成就
import NovalYe from '@/page/achievement/yelingxi/novalYe' // 小说-夜灵犀传奇
import NovalYeMain from '@/page/achievement/yelingxi/model/novalYeMain' // 小说-夜灵犀传奇
import Card from '@/page/card/card' // 成就卡片

Vue.use(Router)
// 避免到当前位置的冗余导航。 简单来说就是重复触发了同一个路由。
const originalPush = Router.prototype.push

Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

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
      path: '/top2',
      name: 'top2',
      component: Top2
    },
    {
      path: '/scroller',
      name: 'scroller',
      component: Scroller
    },
    {
      path: '/mescroll',
      name: 'mescroll',
      component: Mescroll
    },
    {
      path: '/map',
      name: 'map',
      component: Map
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/echarts',
      name: 'echarts',
      component: Echarts
    },
    {
      path: '/music',
      name: 'music',
      component: Music
    },
    {
      path: '/novel',
      name: 'novel',
      component: Novel
    },
    {
      path: '/song',
      name: 'song',
      component: Song
    },
    {
      path: '/poetry',
      name: 'poetry',
      component: Poetry
    },
    {
      path: '/game',
      name: 'game',
      component: Game
    },
    {
      path: '/achievement',
      name: 'achievement',
      component: Achievement
    },
    {
      path: '/novalYe',
      name: 'novalYe',
      component: NovalYe,
    },
    {
      path: '/novalYeMain',
      name: 'novalYeMain',
      component: NovalYeMain,
    },
    {
      path: '/card',
      name: 'card',
      component: Card,
    }
  ]
})
