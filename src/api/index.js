/*
* 包含多个应用的接口
* */
import ajax from './ajax'

// main  获得列表
export const reqMainList = () => ajax('/mainList')
