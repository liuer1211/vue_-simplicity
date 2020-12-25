<template>
  <div class="dropDown-main">
    <div class="drop-main" >
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
    </div>
    <!--回到顶部-->
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  export default {
    data () {
      return {
      }
    },
    computed:{
      // 新闻数据
      ...mapState(['newsList']),
    },
    methods: {
      // 获得新闻数据，调方法
      ...mapActions(['getNewsList'])
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
  }
</style>
