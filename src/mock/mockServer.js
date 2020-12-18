/*
使用mockjs提供mock数据接口
 */
import Mock from 'mockjs'
import data from './data.json'

// main  获得列表
Mock.mock('/mainList', {code:1, data: data.mainList})
