<template>
  <div class="index-main">
    <Search :seaActive="seaActive" @getCodeChildren="getCodeParent"></Search>
    <div class="index-body">
      <!--列表-->
      <div v-if="mainList.length>0">
        <div class="index-model-one upToBottom" @click="toPage(item)" v-for="(item,index) in mainList" :key="index">
          <div class="index-model-l">
            <img class="index-model-l-img" :src="item.img"/>
          </div>
          <div class="index-model-r">
            <h2 class="over-font">{{item.tit}}</h2>
            <p class="index-model-r-info over-font">{{item.cen}}</p>
            <div class="index-start"><Start :score="item.score"></Start></div>
          </div>
        </div>
      </div>
      <div class="index-nodata" v-else>
        <!--空空如也-->
      </div>
      <!--列表-->
      <!--<div>
        <div class="index-model-two">
          <div class="index-model-up">
            <img class="index-model-up-img"/>
            <span class="index-model-up-sp"></span>
          </div>
          <p class="index-model-do"></p>
        </div>
      </div>-->
      <!-- {{money | currency}} -->
    </div>
    <div class="index-bot"></div>
    <Footer></Footer>
  </div>
</template>

<script>
  import {reqMainList, reqAddress} from '../../api/index'
  import Search from '../../components/search/search'
  import Footer from '../../components/footer/footer'
  import Start from '../../components/start/start'
  // import {mapState} from 'vuex'
  export default {
    components:{
      Search, Start, Footer
    },
    computed: {
      // ...mapState(['address']),
      address () {
        return this.$store.state.address
      },
    },
    // 局部过滤
    // filters:{
    //   currency(val){
    //     if (val){
    //       return `￥${val.toFixed(2)}元` // toFixed() 方法可把 Number 四舍五入为指定小数位数的数字。
    //     }
    //   }
    // },
    data () {
      return {
        // money: 77712,
        seaActive: 'search-bg', // 选择背景色
        mainList: [] // 列表数据
      }
    },
    created() {
      // 初始列表
      this.getInit()
      // 经纬度 - 地理位置
      this.getAddr()
    },
    methods:{
      // 获得地理位置
      async getAddress(code){
        try {
          // let data = await reqAddress(code); // 直接调
          // console.log("address=", data);
          this.$store.dispatch('getAddress',code); // 走vuex
        } catch(e) {
          console.log("地理位置-接口异常");
        }
      },

      // 获得经纬度
      getAddr(){
        // this.$store.dispatch('getAddress',"40.10038,116.36867")
        console.log("=========");
        let _this = this;
        window.navigator.geolocation.getCurrentPosition(function (position) {
          console.log("=====经纬度====");
          // 31.241738724884776
          // 121.68368037977544
          console.log(position.coords.latitude)
          console.log(position.coords.longitude)
          let code = position.coords.latitude+","+position.coords.longitude
          console.log("code=",code)
          _this.getAddress(code);
        })
      },

      // 获得列表，这里先不用vuex管理
      async getInit(){
        let data = await reqMainList()
        this.mainList = data.data.data
        // console.log(data)
      },
      // 调转页面
      toPage(item) {
        switch (item.id) {
          case '1':
            this.$router.push({name:'login'})
            return
          case '2':
            this.$router.push({name:'swiper'})
            return
          case '3':
            this.$router.push({name:'top1'})
            return
          case '3.1':
            this.$router.push({name:'top2'})
            return
          case '4':
            this.$router.push({name:'dropDown'})
            return
          case '5.1':
            this.$router.push({name:'scroller'})
            return
          case '5.2':
            this.$router.push({name:'mescroll'})
            return
          case '9':
            this.$router.push({name:'map'})
            return
          case '10':
            this.$router.push({name:'user'})
            return
          case '11':
            this.$router.push({name:'echarts'})
            return
          case '12':
            this.$router.push({name:'music'})
            return
          case '13':
            this.$router.push({name:'game'})
            return
          case '14':
            this.$router.push({name:'achievement'})
            return
          case '15':
            this.$router.push({name:'card'})
            return
          default:
            this.getTip()
            return;
        }
      },
      // 子传父数据，通过方法
      getCodeParent(data) {
        this.mainList=data
      },
      // 通知
      getTip(){
        this.$message({
          message: '暂未开通！',
          type: 'warning',
          duration: '2000',
          center: true,
          offset: 30,
        });
      }
    },
    mounted(){
      // console.log("address=",this.$store.state.address);
      console.log("address=",this.address);
    },
    beforeDestroy(){
    }
  }
</script>

<style scoped lang="scss">
  .index-main{
    color: #fff;
    .index-body{
      margin: 4.1rem 0 0;
      padding: 0 1rem 1rem;
      .index-model-one{
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        width: 100%;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        border: 0.03rem solid #fff;
        border-radius: 0.3rem;
        overflow: hidden;
        background: #0000001f;
        &:not(:last-child){
          margin: 0 0 1rem 0;
        }
        .index-model-l{
          margin: 0 0.6rem 0 0;
          .index-model-l-img{
            width: 4.5rem;
            min-width: 4.5rem;
            height: 4.5rem;
            display: block;
            object-fit: cover;
          }
        }
        .index-model-r{
          margin: 0.5rem 0 0 0;
          flex: 1;
          width: 8rem;
          h2{
            margin: 0 0 0.5rem 0;
            font-size: 0.8rem;
          }
          .index-model-r-info{
            margin: 0;
            font-size: 0.7rem;
          }
          .index-start{
            margin-top: 0.3rem;
          }
        }
      }
      .index-model-two{
        .index-model-up{
          .index-model-up-img{}
          .index-model-up-sp{}
        }
        .index-model-do{

        }
      }
      .index-nodata{
        font-size: 2rem;
        color: #d9d9d9;
        font-family: cursive;
        padding-top: 1rem;
        writing-mode: tb-rl;
        margin: 0 auto;
      }
    }
    .over-font{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .index-bot{
      margin-bottom: 3rem;
    }
    /*上到下  渐变*/
    .upToBottom{
      animation:upToBottom 1s ;
      -webkit-animation:upToBottom 1s ; /*Safari and Chrome*/
    }
    @keyframes upToBottom
    {
      /*from {top:-10px;}!*执行动画的初始位置*!
      to {top:0;}!*动画结束位置*!*/
      0% {opacity: 0;}
      100% {opacity: 1;}
    }
    @-webkit-keyframes upToBottom /*Safari and Chrome*/
    {
     /* from {top:-10px;}!*执行动画的初始位置*!
      to {top:0;}!*动画结束位置*!*/
      0% {opacity: 0;}
      100% {opacity: 1;}
    }
  }
</style>
