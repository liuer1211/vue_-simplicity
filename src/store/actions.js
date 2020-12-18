/*
* 通过mutations间接更新state的多个方法的对象
* */
import {reqHaHa} from '../api'

export default {
  //地址
  async getAddress({commit, state}) {
    //console.log('...........')
    //发送异步ajax请求
    // const geohash = state.latitude + ',' + state.longitude
    const res=await reqHaHa()
    // const result=res.data
    // //console.log('re',result)
    // //提交一个mutations
    // if(result.code===0){
    //   //address  是 对应mutation方法的对象
    //   const address=result.data
    //   commit(RECEIVE_ADDRESS,{address})
    // }
  }
}
