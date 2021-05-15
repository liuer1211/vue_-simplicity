<template>
  <div class="music-main">
    <!--类别-->
    <div class="music-main-type">
      <h2>类别</h2>
      <div class="swiper-container" id="s1">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="music-type-list">
              <div class="music-type-model">
                <div class="music-type-icon"><van-icon name="fire-o" /></div>
                <span>摇滚</span>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="music-type-list">
              <div class="music-type-model">
                <div class="music-type-icon"><van-icon name="fire-o" /></div>
                <span>摇滚</span>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="music-type-list">
              <div class="music-type-model">
                <div class="music-type-icon"><van-icon name="fire-o" /></div>
                <span>摇滚</span>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="music-type-list">
              <div class="music-type-model">
                <div class="music-type-icon"><van-icon name="fire-o" /></div>
                <span>摇滚</span>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="music-type-list">
              <div class="music-type-model">
                <div class="music-type-icon"><van-icon name="fire-o" /></div>
                <span>摇滚</span>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="music-type-list">
              <div class="music-type-model">
                <div class="music-type-icon"><van-icon name="fire-o" /></div>
                <span>摇滚</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--mv-->
    <div class="music-main-mv">
      <h2>MV</h2>
      <div class="swiper-container" id="s2">
        <div class="swiper-wrapper">
          <div class="swiper-slide" style="width: 80%;">
            <div class="music-mv-list">
              <div class="music-mv-model">
                <img src="https://cn.bing.com/th?id=OHR.HolidayNubble_ZH-CN8122183595_UHD.jpg&rf=LaDigue_UHD.jpg&pid=hp&w=2880&h=1620&rs=1&c=4"/>
                <div class="music-mv-cen">
                  <span>沧海一声笑</span>
                  <span>许冠杰、黄霑、顾嘉辉</span>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide" style="width: 80%;">
            <div class="music-mv-list">
              <div class="music-mv-model">
                <img src="https://cn.bing.com/th?id=OHR.HolidayNubble_ZH-CN8122183595_UHD.jpg&rf=LaDigue_UHD.jpg&pid=hp&w=2880&h=1620&rs=1&c=4"/>
                <div class="music-mv-cen">
                  <span>沧海一声笑</span>
                  <span>许冠杰、黄霑、顾嘉辉</span>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide" style="width: 80%;">
            <div class="music-mv-list">
              <div class="music-mv-model">
                <img src="https://cn.bing.com/th?id=OHR.HolidayNubble_ZH-CN8122183595_UHD.jpg&rf=LaDigue_UHD.jpg&pid=hp&w=2880&h=1620&rs=1&c=4"/>
                <div class="music-mv-cen">
                  <span>沧海一声笑</span>
                  <span>许冠杰、黄霑、顾嘉辉</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--列表-->
    <div class="music-main-song">
      <h2>歌单</h2>
      <div class="music-song-list">
        <div class="music-song-model" :class="songActive === index ? 'active' : '' " v-for="(item, index) in songList" :key="index">
          <div class="music-song-left" @click="getSong(index)">
            <div class="music-song-num">{{item.num}}</div>
            <div class="music-song-s-m">
              <span>{{item.song}}</span>
              <span>{{item.singer}}</span>
            </div>
          </div>
          <div class="music-song-right">
            <span>{{item.time}}</span>
            <span @click="getPop()">...</span>
          </div>
        </div>
      </div>
    </div>
<!--    <input v-model="msg" type="text" style="color:#000;"/>-->
<!--    <div></div>-->
    <!--弹出层-->
    <van-popup v-model="show" position="bottom" :style="{ height: '30%' }" round safe-area-inset-bottom>
      <div class="music-pop-main">
        <div class="music-pop-model">
          <div>
            <!--<img src=""/>-->
            <van-icon class="m-p" name="star-o" />
          </div>
          <span>star</span>
        </div>
        <div class="music-pop-model">
          <div>
            <!--<img src=""/>-->
            <van-icon class="m-p" name="setting-o" />
          </div>
          <span>setting</span>
        </div>
        <div class="music-pop-model">
          <div>
            <!--<img src=""/>-->
            <van-icon class="m-p" name="add-o" />
          </div>
          <span>add</span>
        </div>
        <div class="music-pop-model">
          <div>
            <!--<img src=""/>-->
            <van-icon class="m-p" name="share-o" />
          </div>
          <span>share</span>
        </div>
        <div class="music-pop-model">
          <div>
            <!--<img src=""/>-->
            <van-icon class="m-p" name="eye-o" />
          </div>
          <span>eye</span>
        </div>
        <div class="music-pop-model">
          <div>
            <!--<img src=""/>-->
            <van-icon class="m-p" name="flower-o" />
          </div>
          <span>flower</span>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    data() {
      return{
        msg:'qqq',
        show: false, // 是否展示弹出层
        songActive: 0, // 歌列表下标
        songList: [
          {
            num: '01',
            song: '沧海一声笑',
            singer: '许冠杰',
            time: '3:45'
          },
          {
            num: '02',
            song: '云裳羽衣曲',
            singer: '周深',
            time: '4:57'
          }
        ] // 歌列表
      }
    },
    methods:{
      getList1() {
        this.$nextTick(() => {// 一旦完成界面更新, 立即调用(此条语句要写在数据更新之后)
          // 创建一个Swiper实例对象, 来实现轮播
          new Swiper('#s1', {
            slidesPerView: 4,
            loop: false, // 可以循环轮播
          })
        })
      },
      getList2() {
        this.$nextTick(() => {// 一旦完成界面更新, 立即调用(此条语句要写在数据更新之后)
          // 创建一个Swiper实例对象, 来实现轮播
          new Swiper('#s2', {
            slidesPerView: 'auto',
            spaceBetween: 30,
            loop: false, // 可以循环轮播
          })
        })
      },
      // 切换歌词列表
      getSong(index) {
        this.songActive = index
      },
      // 歌词分享
      getPop() {
        // 整个大的div有点击事件，也可以阻止冒泡 @click.stop=''
        this.show= true
      }
    },
    mounted() {
      this.getList1()
      this.getList2()
    }
  }
</script>

<style scoped lang="scss">
  .music-main{
    color: #fff;
    .music-main-type{
      >h2{
        font-size: 1rem;
        margin: 0 0 0.2rem 0;
        padding: 0.5rem;
      }
      .music-type-list{
        display: flex;
        align-items: center;
        .music-type-model{
          background: #464748;
          border-radius: 0.2rem;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -ms-flex-direction: column;
          flex-direction: column;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          padding: 0.4rem 0.2rem;
          margin: 0 0 0 0.5rem;
          box-shadow: 0 0 0.1rem 0 #8c8c8ce0;
          .music-type-icon{
            font-size: 1rem;
            width: 3rem;
            height: 2rem;
            display: flex;
            justify-content: center;
            align-items: flex-start;
          }
          >span{
            font-size: 0.7rem;
          }
        }
      }
    }
    .music-main-mv{
      margin: 0.5rem 0 0;
      h2{
        padding: 0.5rem;
        margin: 0;
        font-size: 1rem;
      }
      .music-mv-list{
        .music-mv-model{
          position: relative;
          border-radius: 0.2rem;
          margin: 0 0 0 0.5rem;
          /*width: 10rem;*/
          height: 8rem;
          img{
            border-radius: 0.2rem;
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            box-shadow: 0 0 0.1rem 0 #8c8c8ce0;
          }
          .music-mv-cen{
            position: absolute;
            bottom: 0;
            left: 0;
            display: flex;
            flex-direction: column;
            padding: 0.5rem;
            box-sizing: border-box;
            span:nth-child(1){
              font-size: 0.8rem;
            }
            span:nth-child(2){
              font-size: 0.6rem;
              margin: 0.2rem 0 0 0;
            }
          }
        }
      }
    }
    .music-main-song{
      margin: 0.5rem 0 0;
      h2{
        padding: 0.5rem;
        margin: 0;
        font-size: 1rem;
      }
      .music-song-list{
        .music-song-model{
          padding: 0.5rem;
          width: 100%;
          box-sizing: border-box;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          &:not(:last-child){
            border-bottom: 0.01rem solid #2f2f2f;
          }
          &.active{
            background-image: linear-gradient(to right, #9b864b, #000);
          }
          .music-song-left{
            display: flex;
            align-items: center;
            flex: 4;
            cursor: pointer;
            overflow: hidden;
            .music-song-num{
              margin: 0 0.4rem 0 0;
              font-size: 0.9rem;
            }
            .music-song-s-m{
              display: flex;
              justify-content: space-between;
              flex-direction: column;
              overflow: hidden;
              span{
                overflow: hidden;
                -ms-text-overflow: ellipsis;
                text-overflow: ellipsis;
                white-space: nowrap;
              }
              span:nth-child(1){
                font-size: 0.7rem;
                margin: 0 0 0.1rem 0;
              }
              span:nth-child(2){
                font-size: 0.6rem;
              }
            }
          }
          .music-song-right{
            -webkit-box-flex: 1;
            -ms-flex: 1;
            flex: 1;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            span:nth-child(1){
              font-size: 0.7rem;
            }
            span:nth-child(2){
              cursor: pointer;
              padding: 0 0 0 0.3rem;
            }
          }
        }
      }
    }
    .music-pop-main{
      color: #000;
      padding: 0.8rem 0.5rem;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      display: flex;
      flex-wrap: wrap;
      .music-pop-model{
        cursor: pointer;
        width: 25%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        padding: 0.4rem 0;
        box-sizing: border-box;
        >div{
          img{
            display: block;
            border-radius: 50%;
            width: 2rem;
            height: 2rem;
          }
          .m-p{
            color: #fd7500;
          }
        }
        span{
          font-size: 0.7rem;
          color: #fd7500;
        }
      }
    }
    /deep/ .van-icon{
      color: #efc805;
      font-size: 1.5rem;
    }
  }
</style>
