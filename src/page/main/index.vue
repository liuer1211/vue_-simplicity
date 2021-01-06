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
    </div>
  </div>
</template>

<script>
  import {reqMainList} from '../../api/index'
  import Search from '../../components/search/search'
  import Start from '../../components/start/start'
  export default {
    components:{
      Search, Start
    },
    data () {
      return {
        seaActive: 'search-bg', // 选择背景色
        mainList: [] // 列表数据
      }
    },
    created() {
      // 初始列表
      this.getInit()
    },
    methods:{
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
    },
    beforeDestroy(){
    }
  }
</script>

<style scoped lang="scss">
  .index-main{
    color: #fff;
    .index-body{
      margin: 4rem 0 0;
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
