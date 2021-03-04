/*直接更新state的多个方法对象*/
import { RECEIVE_MAINLIST, RECEIVE_SWIPERLIST, RECEIVE_NEWSLIST, RECEIVE_NOVELLIST, RECEIVE_SONGLIST, RECEIVE_POETRYLIST } from "./mutation-types";

export default {
  // 获取首页列表,然后更改数据
  [RECEIVE_MAINLIST](state,{list}){
    state.mainList=list
  },
  // 获取首页列表,然后更改数据
  [RECEIVE_SWIPERLIST](state,{list}){
    state.swiperList=list
  },
  // 获取新闻列表,然后更改数据
  [RECEIVE_NEWSLIST](state,{list}){
    state.newsList=list
  },
  // 获取小说列表,然后更改数据
  [RECEIVE_NOVELLIST](state,{list}){
    state.novelList=list
  },
  // 获取歌曲列表,然后更改数据
  [RECEIVE_SONGLIST](state,{list}){
    state.songList=list
  },
  // 获取诗词列表,然后更改数据
  [RECEIVE_POETRYLIST](state,{list}){
    state.poetryList=list
  }
}
