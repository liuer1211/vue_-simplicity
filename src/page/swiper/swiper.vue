<template>
  <div class="swiper-main">
    <div class="swiper-main-tit">九宫格</div>
    <div class="swiper-main-cen">
      <div class="swiper-container" v-if="swiperList.length">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(swiperListitem, index) in swiperListArr" :key="index">
            <div class="swiper-main-model">
              <div class="swiper-model" v-for="(item, index) in swiperListitem" :key="index">
                <div class="swiper-model-up">
                  <div class="swiper-model-bg">
                    <!--<i class="sw-icon" >图</i>-->
                    <!--:class="item.icon"-->
                    <van-icon :name="item.icon" />
                  </div>
                </div>
                <div class="swiper-model-bot">{{item.name}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-main-bot">
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    data () {
      return {
      }
    },
    computed:{
      ...mapState(['swiperList']),
      // 计算属性
      swiperListArr() {
        let {swiperList} = this
        // 准备空的2维数组
        const arr = [] // [[{}],[{}]]
        // 准备一个小数组(最大长度为9)
        let minArr = []
        // 遍历val
        swiperList.forEach(c => {
          // 如果当前小数组已经满了, 创建一个新的
          if(minArr.length===9) {
            // 够9个了，清空，新建
            minArr = []
          }
          // 如果minArr是空的, 将小数组保存到大数组中
          if(minArr.length===0) {
            // 够9个了，加进去
            arr.push(minArr)
          }
          // 将当前分类保存到小数组中，加进去
          minArr.push(c)
        })
        return arr
      }
    },
    methods: {
      // 设置背景
      setBodyBackGround () {
        document.body.style.background = '#353434'
      },
      // 清除背景
      clearBodyBackGround () {
        document.body.style.background = ''
      },
      // 获得九宫格数据，调方法
      ...mapActions(['getSwiperList']),
    },
    watch: {
      swiperList(val) {
        // 界面更新就立即创建Swiper对象
        this.$nextTick(() => {// 一旦完成界面更新, 立即调用(此条语句要写在数据更新之后)
          // 创建一个Swiper实例对象, 来实现轮播
          new Swiper('.swiper-container', {
            loop: true, // 可以循环轮播
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
          })
        })
      }
    },
    mounted() {
      // 进来的时候,清除背景
      this.setBodyBackGround()
      // 获得九宫格数据
      // this.$store.dispatch('getSwiperList')
      this.getSwiperList()
    },
    beforeDestroy() {
      // 离开页面的时候清除
      this.clearBodyBackGround()
    }
  }
</script>

<style scoped lang="scss">
  .swiper-main{
    .swiper-main-tit{
      padding: 2rem 1rem;
      color: #fff;
      text-align: center;
    }
    .swiper-main-cen{
      background: #3c3a3a;
      border-radius: 0.4rem;
      margin: 1rem;
      .swiper-main-model{
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        box-sizing: border-box;
        padding: 0.5rem 0;
        .swiper-model{
          width: 33.33%;
          padding: 0.5rem;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          text-align: center;
          .swiper-model-up{
            display: flex;
            justify-content: center;
            .swiper-model-bg{
              width: 3rem;
              height: 3rem;
              background: #494949;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              .sw-icon{
                font-style: initial;
                color: #ccd720;
              }
            }
          }
          .swiper-model-bot{
            margin: 0.5rem 0 0;
            color: #d5d5d5;
            font-size: 0.7rem;
          }
        }
      }
    }
    .swiper-main-bot{
      padding: 0.5rem 0 1rem;
    }
  }
  .swiper-pagination{
    position: initial;
  }
  /deep/ .swiper-pagination-bullet-active{
    background: #e0e0e0;
  }
  /deep/ .swiper-pagination-bullet{
    background: #c3c3c3;
    margin: 0 0.2rem;
  }
  /deep/ .van-icon{
    color: #ccd720;
    font-size: 1.5rem;
  }
</style>

