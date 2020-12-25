/*
* 通过mutations间接更新state的多个方法的对象
* */
import { RECEIVE_MAINLIST, RECEIVE_SWIPERLIST, RECEIVE_NEWSLIST } from "./mutation-types";
import { reqMainList, reqSwiperList, reqNewsList } from '../api'

export default {
  // 获得首页数据方法
  async getMainList({commit}) {
    const res = await reqMainList()
    const result=res.data
    if(result.code===1){
      const list=result.data
      commit(RECEIVE_MAINLIST,{list})
    }
  },
  // 获得九宫格数据方法
  async getSwiperList({commit}) {
    const res = await reqSwiperList()
    const result=res.data
    if(result.code===1){
      const list=result.data
      commit(RECEIVE_SWIPERLIST,{list})
    }
  },
  // 获得新闻数据方法
  async getNewsList({commit}) {
    const res = await reqNewsList()
    const result=res.data
    if(result.code===1){
      const list=result.data
      commit(RECEIVE_NEWSLIST,{list})
    }
  },
}
