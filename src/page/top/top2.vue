<template>
  <div class="top-main">
    <Header></Header>
    <!--内容-->
    <div class="top-cen" id="topCen">
      <!--列表内容块-->
      <div class="top-col" id="topCol">
        <div class="top-col-flex">
          <div class="top-col-model">
            <div class="top-col-u">
              <img src="https://cdn.docschina.org/home/logo/vue.svg"/>
              <span>vue</span>
            </div>
            <div class="top-col-c">渐进式 JavaScript 框架</div>
            <div class="top-col-b">
              <a href="https://github.com/vuejs/cn.vuejs.org/">
                <svg class="octicon octicon-mark-github v-align-middle" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
              </a>
            </div>
            <img class="top-col-i" src="data:image/png;base64,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"/>
          </div>
        </div>
        <div class="top-col-flex">
          <div class="top-col-model">
            <div class="top-col-u">
              <img src="https://cdn.docschina.org/home/logo/react.svg"/>
              <span>React</span>
            </div>
            <div class="top-col-c">构建用户界面的 JavaScript 库</div>
            <div class="top-col-b">
              <a href="https://github.com/reactjs/zh-hans.reactjs.org">
                <svg class="octicon octicon-mark-github v-align-middle" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
              </a>
            </div>
            <img class="top-col-i" src="data:image/png;base64,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"/>
          </div>
        </div>
        <div class="top-col-flex">
          <div class="top-col-model">
            <div class="top-col-u">
              <img src="https://cdn.docschina.org/home/logo/node.svg"/>
              <span>Node.js</span>
            </div>
            <div class="top-col-c">基于 V8 引擎的 JS 运行环境</div>
            <div class="top-col-b">
              <a href="https://github.com/nodejscn/node-api-cn">
                <svg class="octicon octicon-mark-github v-align-middle" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
              </a>
            </div>
            <img class="top-col-i" src="data:image/png;base64,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"/>
          </div>
        </div>
        <div class="top-col-flex">
          <div class="top-col-model">
            <div class="top-col-u">
              <img src="https://cdn.docschina.org/home/logo/vant.png"/>
              <span>Vant</span>
            </div>
            <div class="top-col-c">移动端 Vue 组件库</div>
            <div class="top-col-b">
            </div>
          </div>
        </div>
        <div class="top-col-flex">
          <div class="top-col-model">
            <div class="top-col-u">
              <img src="https://cdn.docschina.org/home/logo/express.png"/>
              <span>Express</span>
            </div>
            <div class="top-col-c">快速极简的 Web 框架</div>
            <div class="top-col-b">
            </div>
          </div>
        </div>
      </div>
      <!--列表导航-->
      <div class="top-model" id="topModel">
        <div @click="getNav(item, index)" :class="active === index ? 'active' : ''" v-for="(item, index) in navList" :key="index">{{item.name}}</div>
      </div>
      <!--第n模块-->
      <div v-if="modelList.length > 0">
        <div class="top-model-list" v-for="(item, index) in modelList" :key="index">
          <div class="top-model-sw" v-for="(it, index) in item.list" :key="index">
            <div class="coupon-1">
              <div>
                <span>{{it.money}} </span>{{it.type}}
              </div>
              <div>{{it.date}} 过期</div>
            </div>
            <div class="coupon-bot">
              <div class="coupon-bot-cen">
                <span v-for="(i, index) in it.cen" :key="index">{{i}}</span>
              </div>
              <div class="coupon-but">
                立即使用
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '../../components/header/header'
  export default {
    components:{
      Header
    },
    data () {
      return {
        active: 0,
        navList: [
          {id:'1',name: '优惠劵1'},
          {id:'2',name: '优惠劵2'},
          {id:'3',name: '优惠劵3'}
        ],
        cenList:[ // 全部数据
          {
            list: [
              {
                money:'100元',
                type:'优惠劵',
                date: '2020-12-31 24:00:00',
                cen: ['1.美食商城可用','2.过期自动作废']
              },
              {
                money:'100元',
                type:'优惠劵',
                date: '2020-12-31 24:00:00',
                cen: ['1.美食商城可用','2.过期自动作废']
              },
              {
                money:'100元',
                type:'优惠劵',
                date: '2020-12-31 24:00:00',
                cen: ['1.美食商城可用','2.过期自动作废']
              },
              {
                money:'100元',
                type:'优惠劵',
                date: '2020-12-31 24:00:00',
                cen: ['1.美食商城可用','2.过期自动作废']
              }
            ]
          },
          {
            list: [
              {
                money:'100元',
                type:'优惠劵',
                date: '2020-12-31 24:00:00',
                cen: ['1.美食商城可用','2.过期自动作废']
              },
              {
                money:'100元',
                type:'优惠劵',
                date: '2020-12-31 24:00:00',
                cen: ['1.美食商城可用','2.过期自动作废']
              },
              {
                money:'100元',
                type:'优惠劵',
                date: '2020-12-31 24:00:00',
                cen: ['1.美食商城可用','2.过期自动作废']
              },
              {
                money:'100元',
                type:'优惠劵',
                date: '2020-12-31 24:00:00',
                cen: ['1.美食商城可用','2.过期自动作废']
              },
              {
                money:'100元',
                type:'优惠劵',
                date: '2020-12-31 24:00:00',
                cen: ['1.美食商城可用','2.过期自动作废']
              }
            ]
          },
          {
            list: [
              {
                money:'100元',
                type:'优惠劵',
                date: '2020-12-31 24:00:00',
                cen: ['1.美食商城可用','2.过期自动作废']
              },
              {
                money:'100元',
                type:'优惠劵',
                date: '2020-12-31 24:00:00',
                cen: ['1.美食商城可用','2.过期自动作废']
              },
              {
                money:'100元',
                type:'优惠劵',
                date: '2020-12-31 24:00:00',
                cen: ['1.美食商城可用','2.过期自动作废']
              },
              {
                money:'100元',
                type:'优惠劵',
                date: '2020-12-31 24:00:00',
                cen: ['1.美食商城可用','2.过期自动作废']
              }
            ]
          },
        ],
        modelList:[] // 单个菜单数据
      }
    },
    methods: {
      // 导航点击
      getNav(item, index) {
        this.active = index
        this.modelList = []
        if (this.cenList.length > index) {
          this.modelList.push(this.cenList[index])
        }
      },
      // 改变元素值
      handleScroll () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        let offsetTop1 = document.querySelector('#topCen').offsetTop;
        let offsetTop2 = document.querySelector('#topModel').offsetTop;
        let offsetTop3 = document.querySelector('#topCol').offsetHeight;
        // console.log(scrollTop,offsetTop1,offsetTop2,offsetTop3)
        // 判断,高度大于div,加上active
        if(scrollTop > offsetTop3){
          document.getElementById("topModel").classList.add("active")
        }else{
          document.getElementById("topModel").classList.remove("active")
        }
      }
    },
    mounted(){
      this.modelList.push(this.cenList[0])
      window.addEventListener('scroll', this.handleScroll) //给window添加一个滚动滚动监听事件
    },
    beforeDestroy(){
    },
    destroyed () {//离开该页面需要移除这个监听的事件
      window.removeEventListener('scroll', this.handleScroll)
    },
  }
</script>

<style scoped lang="scss">
  .top-main{
    .top-model{
      padding: 0.6rem 0 0.8rem 0;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      font-size: 0.8rem;
      background: #5d5d5d;
      width: 100%;
      border-radius: 0.15rem;
      color: #fff;
      &.active{
        position: fixed;
        z-index:999;
        top:2.5rem;
      }
      >div{
        cursor: pointer;
        padding: 0 0.4rem;
        &.active{
          color: #fa7122;
          font-weight: 600;
          position: relative;
          &:after{
            display: block;
            content: "";
            position: absolute;
            left: 50%;
            margin-left: -1rem;
            bottom: -0.5rem;
            width: 2rem;
            height: 0.25rem;
            background-color: #fa7122;
            border-radius: 6rem;
            text-align: center;
          }
        }
      }
    }
    .top-cen{
      color: #000;
      margin: 2.5rem 0 0 0;
      .top-col{
        color: #fff;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        width: 100%;
        box-sizing: border-box;
        padding: 0 0 0.6rem;
        >div:nth-child(2n+1){
          padding: 0.6rem 0.3rem 0 0.6rem;
        }
        >div:nth-child(2n){
          padding: 0.6rem 0.6rem 0 0.3rem;
        }
        .top-col-flex{
          width: 50%;
          box-sizing: border-box;
          .top-col-model{
            background: #4b4b4b;
            position: relative;
            border-radius: 0.2rem;
            overflow: hidden;
            .top-col-u{
              display: -webkit-box;
              display: -ms-flexbox;
              display: flex;
              -webkit-box-align: center;
              -ms-flex-align: center;
              align-items: center;
              box-sizing: border-box;
              padding: 0.4rem;
              img{
                width: 1.5rem;
                height: 1.5rem;
                -o-object-fit: cover;
                object-fit: cover;
              }
              span{
                font-weight: 600;
                font-size: 1rem;
                margin: 0 0 0 0.4rem;
              }
            }
            .top-col-c{
              padding: 0.4rem;
              font-size: 0.7rem;
            }
            .top-col-b{
              display: flex;
              align-items: center;
              box-sizing: border-box;
              padding: 0.4rem;
              a{
                svg{
                  display: block;
                  width: 1rem;
                  height: 1rem;
                }
                img{
                  width: 1rem;
                  height: 1rem;
                  display: block;
                }
              }
            }
            .top-col-i{
              position: absolute;
              top: 0;
              right: 0;
              width: 2.5rem;
              height: 2.5rem;
            }
          }
        }
      }
      .top-model-list{
        padding: 0.6rem;
        .top-model-sw{
          width: 8rem;
          margin: 0 0 0.6rem 0;
        }
        .coupon-1{
          border-radius: 0.2rem 0.2rem 0 0;
          width: 8rem;
          background: radial-gradient(circle at 4rem 0rem, transparent 0.5rem, #e613f5 0) top;
          position: relative;
          &::after {
            content: "";
            height: .5rem;
            position: absolute;
            display: block;
            z-index: 9;
            background-size: 1rem 1rem;
            background-repeat: repeat-x,repeat-x;
            bottom: -.36rem;
            left: 0;
            right: 0;
            background-image: linear-gradient(-45deg,#e613f5 25%,transparent 25%,transparent),linear-gradient(-135deg,#e613f5 25%,transparent 25%,transparent),linear-gradient(-45deg,transparent 75%,#e613f5 75%),linear-gradient(-135deg,transparent 75%,#e613f5 75%);
          }
          /*filter: drop-shadow(3px 3px 3px rgba(255,255,255,.3));*/
          /*background-image: radial-gradient(shape size at position, start-color, …, last-color);*/
          /*（1）、shape 确定圆的类型:*/
          /* ellipse (默认): 指定椭圆形的径向渐变。*/
          /* circle ：指定圆形的径向渐变*/
          /*（3）、position 定义渐变的位置。可能值：*/
          /*center（默认）：设置中间为径向渐变圆心的纵坐标值。*/
          /*top：设置顶部为径向渐变圆心的纵坐标值。*/
          /*bottom：设置底部为径向渐变圆心的纵坐标值。*/
          /*圆形的位置也可修改，只需要改“circle at...”后面这个两个数值即可，上，右，下的数值分别是：50px,0、100px,50px、50px,100px,0px 50px。*/
          /*transparent 10px, 圆形的大小，颜色*/
          >div{
            padding: 1.5rem 0.2rem 0;
            text-align: center;
            font-size: 0.6rem;
            >span{
              font-size: 0.8rem;
              font-weight: 600;
            }
          }
          >div:nth-child(2){
            padding: 0.8rem 0.2rem 0.5rem;
          }
        }
        .coupon-bot{
          border-radius: 0 0 0.2rem 0.2rem;
          font-size: 0.7rem;
          padding: 1rem 0.3rem 0.5rem;
          background: #f1f1f1;
          .coupon-bot-cen{
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            >span:not(:last-child){
              padding: 0 0 0.2rem 0;
            }
          }
          .coupon-but{
            cursor: pointer;
            margin: 1rem 1rem 0.3rem;
            background: #e613f5;
            text-align: center;
            padding: 0.4rem 0.2rem;
            border-radius: 0.2rem;
          }
        }
      }
    }
  }
</style>
