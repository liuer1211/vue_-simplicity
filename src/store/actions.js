/*
* 通过mutations间接更新state的多个方法的对象
* */
import { 
  RECEIVE_MAINLIST, RECEIVE_SWIPERLIST, RECEIVE_NEWSLIST, RECEIVE_NOVELLIST, RECEIVE_SONGLIST, RECEIVE_POETRYLIST, 
  QUERY_ADDRESS} from "./mutation-types";
import { reqMainList, reqSwiperList, reqNewsList, reqNovelList, reqSongList, reqPoetryList, 
  reqAddress } from '../api'

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
  // 获得新闻数据方法
  async getNovelList({commit}) {
    const res = await reqNovelList()
    const result=res.data
    if(result.code===1){
      const list=result.data
      commit(RECEIVE_NOVELLIST,{list})
    }
  },
  // 获得歌曲数据方法
  async getSongList({commit}) {
    const res = await reqSongList()
    const result=res.data
    if(result.code===1){
      const list=result.data
      commit(RECEIVE_SONGLIST,{list})
    }
  },
  // 获得诗词数据方法
  async getPoetryList({commit}) {
    const res = await reqPoetryList()
    const result=res.data
    if(result.code===1){
      const list=result.data
      commit(RECEIVE_POETRYLIST,{list})
    }
  },
  // 获得地理位置
  async getAddress({commit},code) {
    try {
      const res = await reqAddress(code)
      const result=res.data
      console.log("r-----",result.data);
      if(result.code===0){
        const datas=result.data
        commit(QUERY_ADDRESS,{datas})
      }
    } catch(e) {
      console.log("地理位置--接口异常");
    }
  },
}
