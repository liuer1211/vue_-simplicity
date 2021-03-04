/*
使用mockjs提供mock数据接口
 */
import Mock from 'mockjs'
import data from './data.json'

// main  获得列表
Mock.mock('/mainList', {code:1, data: data.mainList})

// 九宫格
Mock.mock('/swiperList', {code:1, data: data.swiperList})

// 新闻数据列表
Mock.mock('/newsList', {code:1, data: data.newsList})

// 小说数据列表
Mock.mock('/novelList', {code:1, data: data.novelList})

// 歌曲数据列表
Mock.mock('/songList', {code:1, data: data.songList})

// 诗词数据列表
Mock.mock('/poetryList', {code:1, data: data.poetryList})
