<template>
  <div class="dropDown-main">
    <div class="drop-main" >
      <div class="drop-main-flex" :on-refresh="refresh" :on-infinite="infinite" ref="myscroller" >
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
    <!--无数据-->
    <div class="drop-loading" v-show="noDatas">已经到底了</div>
    <!--回到顶部-->
    <el-backtop :bottom="18" :right="18"></el-backtop>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import {reqMainList} from '../../api/index'
  export default {
    data () {
      return {
        noDatas: false,
        noDate:false,//判断是否加载
        data:{
          keyWord:'',
          pageIndex:1,
          pageSize:50,
          status:'',
        }
      }
    },
    computed:{
      // 新闻数据
      ...mapState(['newsList']),
    },
    methods: {
      // 获得新闻数据，调方法
      ...mapActions(['getNewsList']),
      // 下拉刷新
    　　refresh(){
       　　let _this=this;
       　　_this.data.pageIndex=1;      //重置页数刷新每次页数都是第一页
       　　_this.noDate=false;          //重置数据判断
       　　_this.qryNoticeList();
   　　},
      // 上拉加载
      infinite(done){
      　　let _this=this;
         setTimeout(() => {
             if(_this.noDate){
                 _this.$refs.myscroller.finishInfinite(true);
                 //finishInfinite函数为scroller实例的方法，当参数为false时，上拉获取数据可以重新调用。
               // 当参数为true，上拉获取数据回调函数停止使用,下拉下部不再显示loading，会显示‘’暂无更多数据
             }else{
                 _this.data.pageIndex++;
                 _this.qryNoticeList(done);

             }
         }, 1000);
      },
      //获取重要通知列表
     qryNoticeList(done){
         let _this=this;
         reqMainList().then((response)=>{
             //停止下拉刷新
             _this.$refs.myscroller.finishPullToRefresh();
     //         if (response.code === 1){
     // 　　　　　if(typeof (done)=="function"){
     //             done();
     //           }
     //           if(response.data.haveNextPage=='0'){
     //               _this.noDate=true;
     //           }else{
     //               _this.noDate=false;
     //          }
     //           // 判断是下拉刷新还是上拉加载
     //           if(_this.data.pageIndex==1){
     //               _this.notilist = response.data.list;
     //           }else{
     //               _this.notilist=_this.notilist.concat(response.data.list);
     //           }
     //         }
         });
     　}
    },
    mounted(){
      // 获得新闻数据，调方法
      this.qryNoticeList()
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

