<template>
  <div class="novel-main">
    <!--主体-->
    <div class="novel-body-main">
      <a class="novel-a" :href="item.hrefUrl" v-for="(item, index) in novelList" :key="index">
        <div class="novel-model">
          <div class="novel-model-left">
            <img :src="item.img"/>
          </div>
          <div class="novel-model-right">
            <div class="novel-model-r-t">
              <h2>{{item.name}}</h2>
              <p>{{item.introduce}}</p>
            </div>
            <div class="novel-model-r-b">
              <span class="sp1">{{item.date}}</span>
              <span class="sp2">{{item.hot}}</span>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  export default {
    data () {
      return {}
    },
    computed:{
      ...mapState(['novelList']),
    },
    methods: {
      // 获得数据，调方法
      ...mapActions(['getNovelList']),
    },
    mounted(){
      this.getNovelList()
    },
    beforeDestroy(){
    }
  }
</script>

<style scoped lang="scss">
  .novel-main{
    .novel-body-main{
      .novel-a{
        display: inline-block;
        color: #fff;
      }
      .novel-model{
        padding: 0.6rem;
        box-sizing: border-box;
        display: flex;
        .novel-model-left{
          width: 30%;
          height: 5rem;
          img{
            display: block;
            width: 100%;
            height: 100%;
            -o-object-fit: cover;
            object-fit: cover;
            border-radius: 0.2rem;
          }
        }
        .novel-model-right{
          width: 70%;
          padding: 0 0 0 0.6rem;
          box-sizing: border-box;
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          .novel-model-r-t{
            h2{
              margin: 0 0 0.6rem 0;
              font-size: 0.9rem;
            }
            p{
              margin: 0;
              font-size: 0.7rem;
              overflow : hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
            }
          }
          .novel-model-r-b{
            font-size: 0.5rem;
            display: flex;
            justify-content: space-between;
            .sp1{}
            .sp2{}
          }
        }
      }
    }
  }
</style>
