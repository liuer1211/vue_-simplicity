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

