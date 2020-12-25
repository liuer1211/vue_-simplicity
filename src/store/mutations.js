/*直接更新state的多个方法对象*/
import { RECEIVE_MAINLIST, RECEIVE_SWIPERLIST, RECEIVE_NEWSLIST } from "./mutation-types";

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
  }
}
