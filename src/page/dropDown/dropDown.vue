<template>
  <div class="dropDown-main">
    <div class="drop-main" >
      <div class="drop-main-flex"  v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
        <div class="drop-model" v-for="(item, index) in newsList" :key="index">
          <div class="drop-model-p">
            <div class="drop-model-up">
              <img :src="item.img"/>
              <p class="ellipsis">{{item.name}}</p>
            </div>
            <div class="drop-model-bot">
              <h2 class="ellipsis">{{item.title}}</h2>
              <span class="ellipsis">{{item.address}}</span>
              <div class="drop-model-time-hot">
                <span>{{item.date}}</span>
                <i :class="'hot'+item.hot"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--加载中-->
    <div class="drop-loading" v-show="busy">加载中...</div>
    <!--无数据-->
    <div class="drop-loading" v-show="noDatas">已经到底了</div>
    <!--回到顶部-->
    <el-backtop :bottom="18" :right="18"></el-backtop>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  export default {
    data () {
      return {
        busy: false,
        noDatas: false
      }
    },
    computed:{
      // 新闻数据
      ...mapState(['newsList']),
    },
    methods: {
      // 获得新闻数据，调方法
      ...mapActions(['getNewsList']),
      loadMore() {
        if (this.newsList.length < 25){
          this.busy = true
          setTimeout(() => {
            for(let i=0; i<5; i++){
              this.newsList.push(this.newsList[i])
            }
            this.busy = false
          }, 1000)
        } else {
          this.noDatas = true
        }
      }
    },
    mounted(){
      // 获得新闻数据，调方法
      this.getNewsList()
    },
    beforeDestroy(){
    }
  }
</script>

<style scoped lang="scss">
  .dropDown-main{
    color: #ffffff;
    .drop-main{
      padding: 0.8rem 0 0 0.8rem;
      box-sizing: border-box;
      .drop-main-flex{
        display: flex;
        flex-wrap: wrap;
        .drop-model{
          width: 50%;
          padding: 0 0.8rem 0.8rem 0;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          .drop-model-p{
            background: #afafaf73;
            border-radius: 0.3rem;
            overflow: hidden;
            -webkit-box-shadow: 0 0 0.1rem 0 #8c8c8ce0;
            box-shadow: 0 0 0.1rem 0 #8c8c8ce0;
            >div:nth-child(1){
              background: #545653;
            }
            >div:nth-child(2){
              padding: 0.3rem;
            }
            .drop-model-up{
              position: relative;
              img{
                width: 100%;
                height: 7rem;
                object-fit: cover;
                display: block;
              }
              p{
                position: absolute;
                bottom: 0;
                left: 0;
                margin: 0;
                padding: 0.2rem;
                font-size: 0.7rem;
                width: 100%;
                box-sizing: border-box;
                background: #63636396;
              }
            }
            .drop-model-bot{
              display: flex;
              flex-direction: column;
              h2{
                margin: 0 0 0.4rem;
                font-size: 0.8rem;
              }
              >span{
                font-size: 0.7rem;
              }
              .drop-model-time-hot{
                margin: 0.4rem 0 0;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-pack: justify;
                -ms-flex-pack: justify;
                justify-content: space-between;
                font-size: 0.6rem;
                position: relative;
                i{
                  position: absolute;
                  bottom: 0;
                  right: 0;
                  width: 1rem;
                  height: 1rem;
                  display: inline-block;
                  background-repeat: no-repeat;
                  background-size: cover;
                  &.hot0{
                    background-image: url("https://liuer1211.github.io/vue_-simplicity/static/img/model/hot.png");
                  }
                  &.hot1{
                    background-image: url("https://liuer1211.github.io/vue_-simplicity/static/img/model/hot.png");
                  }
                }
              }
            }
          }
        }
      }
    }
    /*显示省略号*/
    .ellipsis{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    /deep/ .el-backtop {
      background-color: #000;
      box-shadow: 0 0 0.2rem #fffafac7;
    }
    /deep/ .el-backtop, .el-calendar-table td.is-today {
      color: #fdfdfd;
    }
    .drop-loading{
      font-size: 0.8rem;
      text-align: center;
      padding: 0.5rem 0 1rem;
    }
  }
</style>

<!--
v-infinite-scroll="loadMore"表示回调函数是loadMore
infinite-scroll-disabled="busy"表示由变量busy决定是否执行loadMore，false则执行loadMore，true则不执行，
看清楚，busy表示繁忙，繁忙的时候是不执行的。
infinite-scroll-distance="10"这里10决定了页面滚动到离页尾多少像素的时候触发回调函数，10是像素值。
通常我们会在页尾做一个几十像素高的“正在加载中...”，这样的话，可以把这个div的高度设为infinite-scroll-distance的值即可。
其他选项：
infinite-scroll-immediate-check 默认值为true，该指令意思是，应该在绑定后立即检查busy的值和是否滚动到底。
如果你的初始内容高度不够高、不足以填满可滚动的容器的话，你应设为true，这样会立即执行一次loadMore，会帮你填充一些初始内容。
infinite-scroll-listen-for-event 当事件在Vue实例中发出时，无限滚动将再次检查。
infinite-scroll-throttle-delay 检查busy的值的时间间隔，默认值是200，因为vue-infinite-scroll的基础原理就是，
vue-infinite-scroll会循环检查busy的值，以及是否滚动到底，只有当：busy为false且滚动到底，回调函数才会执行。
-->
