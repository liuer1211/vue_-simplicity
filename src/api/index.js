/*
* 包含多个应用的接口
* */
import ajax from './ajax'

// main  获得列表
export const reqMainList = () => ajax('/mainList')

// swiper 九宫格列表
export const reqSwiperList = () => ajax('/swiperList')
