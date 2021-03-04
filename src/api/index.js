/*
* 包含多个应用的接口
* */
import ajax from './ajax'

// main  获得列表
export const reqMainList = () => ajax('/mainList')

// swiper 九宫格列表
export const reqSwiperList = () => ajax('/swiperList')

// 新闻列表
export const reqNewsList = () => ajax('/newsList')

// 小说列表
export const reqNovelList = () => ajax('/novelList')

// 歌曲列表
export const reqSongList = () => ajax('/songList')

// 诗词列表
export const reqPoetryList = () => ajax('/poetryList')

