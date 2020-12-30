<template>
  <div class="dropDown-main">
   <!-- <div class="drop-main" >
      <div class="drop-main-flex">
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
    </div>-->
   <!-- <mescroll-vue ref="mescroll" :down="mescrollDown" :up="mescrollUp" @init="mescrollInit" class="scrollView">
    </mescroll-vue>-->
    <!--回到顶部-->
    <!--<el-backtop :bottom="18" :right="18"></el-backtop>-->
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import MescrollVue from 'mescroll.js/mescroll.vue'
  export default {
   /* data () {
      return {
        busy: false,
        noDatas: false,
        mescroll: null, // mescroll实例对象
        mescrollDown:{}, //下拉刷新的配置. (如果下拉刷新和上拉加载处理的逻辑是一样的,则mescrollDown可不用写了)
        mescrollUp: { // 上拉加载的配置.
          callback: this.upCallback, // 上拉回调,此处简写; 相当于 callback: function(page, mescroll) { }
          //以下是一些常用的配置,当然不写也可以的.
          page: {
            num: 0, //当前页 默认0,回调之前会加1; 即callback(page)会从1开始
            size: 10 //每页数据条数,默认10
          },
          noMoreSize: 5, //如果列表已无数据,可设置列表的总数量要大于5才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看
          toTop: {
            //回到顶部按钮
            src: "./static/mescroll/mescroll-totop.png", //图片路径,默认null,支持网络图
            offset: 1000 //列表滚动1000px才显示回到顶部按钮
          },
          htmlContent: '<p class="downwarp-progress"></p><p class="downwarp-tip">下拉刷新 </p>', //布局内容
          empty: {
            //列表第一页无任何数据时,显示的空提示布局; 需配置warpId才显示
            warpId: "xxid", //父布局的id (1.3.5版本支持传入dom元素)
            icon: "./static/mescroll/mescroll-empty.png", //图标,默认null,支持网络图
            tip: "暂无相关数据~" //提示
          }
        },
        articleList: [] // 列表数据
      }
    },
    components: {
      MescrollVue // 注册mescroll组件
    },
    computed:{
      // 新闻数据
      ...mapState(['newsList']),
    },
    methods: {
      // 获得新闻数据，调方法
      ...mapActions(['getNewsList']),
      loadMore() {
      },
      mescrollInit(mescroll) {
        this.mescroll = mescroll;
      },
      upCallback(page, mescroll) {
        this.$Request({
          url: "",
          method: "get",
          data: {
            page: page.num
          },
          success: res => {
            if (res.status == 1) {
              let data = page.num == 1 ? [] : this.articleList;
              data.push(...res.result.data);
              this.articleList = data;
              // 数据渲染成功后,隐藏下拉刷新的状态
              this.$nextTick(() => {
                mescroll.endSuccess(res.result.data.length);
              });
            }
          }
        });
      }
    },
    mounted(){
      // 获得新闻数据，调方法
      this.getNewsList()
    },
    beforeRouteEnter (to, from, next) { // 如果没有配置回到顶部按钮或isBounce,则beforeRouteEnter不用写
      next(vm => {
        vm.$refs.mescroll.beforeRouteEnter() // 进入路由时,滚动到原来的列表位置,恢复回到顶部按钮和isBounce的配置
      })
    },
    beforeRouteLeave (to, from, next) { // 如果没有配置回到顶部按钮或isBounce,则beforeRouteLeave不用写
      this.$refs.mescroll.beforeRouteLeave() // 退出路由时,记录列表滚动的位置,隐藏回到顶部按钮和isBounce的配置
      next()
    },*/
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


