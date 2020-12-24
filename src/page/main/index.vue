<template>
  <div class="index-main">
    <Search :seaActive="seaActive" @getCodeChildren="getCodeParent"></Search>
    <div class="index-body">
      <!--列表-->
      <div>
        <div class="index-model-one upToBottom" @click="toPage(item)" v-for="(item,index) in mainList" :key="index">
          <div class="index-model-l">
            <img class="index-model-l-img" :src="item.img"/>
          </div>
          <div class="index-model-r">
            <h2 class="over-font">{{item.tit}}</h2>
            <p class="index-model-r-info over-font">{{item.cen}}</p>
          </div>
        </div>
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
  export default {
    components:{
      Search
    },
    data () {
      return {
        seaActive: 'search-bg',
        mainList: []
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
      // 添加body图片
      setBodyBackGround () {
        document.body.style.backgroundSize = 'cover'
        document.body.style.backgroundPosition = 'center center'
        document.body.style.backgroundRepeat = 'no-repeat'
        document.body.style.backgroundAttachment = 'fixed'
        document.body.style.backgroundImage = 'url(' + require('../../assets/img/main/bg8.jpg') + ')'
      },
      // 清除背景图
      clearBodyBackGround () {
        document.body.style.backgroundImage = ''
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
          default:
            return;
        }
      },
      // 子传父数据，通过方法
      getCodeParent(data) {
        this.mainList=data
      }
    },
    mounted(){
      // 进来的时候调用添加
      this.setBodyBackGround()
    },
    beforeDestroy(){
      // 离开页面的时候清除
      this.clearBodyBackGround()
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
        border: 0.02rem solid #fff;
        border-radius: 0.3rem;
        overflow: hidden;
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
    }
    .over-font{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    /*上到下  渐变*/
    .upToBottom{
      animation:upToBottom 2s ;
      -webkit-animation:upToBottom 2s ; /*Safari and Chrome*/
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
