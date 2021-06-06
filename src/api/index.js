/*
* 包含多个应用的接口
* */
import ajax from './ajax'

const BASE_URL='/api'

// 1、根据经纬度获取位置详情
export const reqAddress=(geohash)=>ajax(`${BASE_URL}/position/${geohash}`)   //param
// 2、获取食品分类列表
export const reqFoodCategorys = () => ajax(BASE_URL+'/index_category')
// 3、根据经纬度获取商铺列表
export const reqShops = (longitude, latitude) => ajax(BASE_URL+'/shops', {longitude, latitude})  //query

// //注册接口
// export const reqRegister =(user) => ajax('/register',user,'POST')
// //登录接口
// export const reqLogin=({username,password})=>ajax('/login',{username,password},'POST')
// //更新用户信息
// export const reqUpdateUser=(user)=> ajax('/update',user,'POST')

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

