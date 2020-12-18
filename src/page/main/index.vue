<template>
  <div class="index-main">
    <Search></Search>
    <div class="index-body">
      <!--列表-->
      <div>
        <div class="index-model-one" v-for="(item,index) in mainList" :key="index">
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
      <div>
        <div class="index-model-two">
          <div class="index-model-up">
            <img class="index-model-up-img"/>
            <span class="index-model-up-sp"></span>
          </div>
          <p class="index-model-do"></p>
        </div>
      </div>
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
        mainList:[]
      }
    },
    created() {
      // 初始列表
      this.getInit()
    },
    methods:{
      // 获得列表
      async getInit(){
        let data = await reqMainList()
        this.mainList = data.data.data
        console.log(data)
      }
    }
  }
</script>

<style scoped lang="scss">
  .index-main{
    color: #fff;
    .index-body{
      padding: 0 0.6rem 0.6rem 0.6rem;
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
          margin: 0 0 0.6rem 0;
        }
        .index-model-l{
          margin: 0 0.6rem 0 0;
          .index-model-l-img{
            width: 3rem;
            min-width: 3rem;
            height: 3rem;
            display: block;
            object-fit: cover;
          }
        }
        .index-model-r{
          margin: 0.5rem 0 0 0;
          flex: 1;
          width: 8rem;
          h2{
            margin: 0 0 0.3rem 0;
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
  }
</style>
