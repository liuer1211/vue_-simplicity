<template>
  <div class="top-main">
    <Header></Header>
    <!--列表导航-->
    <div class="top-model">
      <div @click="getNav(item, index)" :class="active === index ? 'active' : ''" v-for="(item, index) in navList" :key="index">{{item.name}}</div>
    </div>
    <!--内容-->
    <div class="top-cen">
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




        <!--<div class="coupon">
          &lt;!&ndash; 1、优惠券金额和过期时间 &ndash;&gt;
          <div class="price">
            100元
            <span>优惠券</span>
            <p class="timeout">2020-12-31 18:18:18过期</p>
          </div>

          &lt;!&ndash; 2、优惠券描述 &ndash;&gt;
          <div class="describe">
            <p>1、商城、美食可用</p>
            <p>2、过期作废</p>
          </div>

          &lt;!&ndash; 3、按钮 &ndash;&gt;
          <div class="btns">
            <button>立即使用</button>
          </div>
        </div>-->

        <!--<div class="base-one-circle base-coupons"></div>-->

      <!--<div class="coupon-wrapper">
        <h3>京东优惠领取：</h3>
        <div class="coupon-item">
          <div class="style-one">
            <div class="info-box">
              <p class="nick">京东平台优惠?</p>
              <div class="coupon-money">
                <div class="lay of">￥<em>10</em></div>
                <div class="lay">
                  <p class="tit">优惠?</p>
                  <p class="demand">满100元可用</p>
                </div>
              </div>
            </div>
            <a href="javascript:;" class="get-btn">
              <span>立即领取</span>
            </a>
          </div>
        </div>
        <div class="coupon-item">
          <div class="style-one have">
            <div class="info-box">
              <p class="nick">京东平台优惠?</p>
              <div class="coupon-money">
                <div class="lay of">￥<em>10</em></div>
                <div class="lay">
                  <p class="tit">优惠?</p>
                  <p class="demand">满100元可用</p>
                </div>
              </div>
            </div>
            <a href="javascript:;" class="get-btn">
              <span>已领取</span>
            </a>
          </div>
        </div>
        <h3>唯品会优惠?领取：</h3>
        <div class="coupon-item">
          <div class="style-two">
            <div class="info-box">
              <p class="nick">唯品会平台优惠?</p>
              <div class="coupon-money">
                <div class="lay of">￥<em>10</em></div>
                <div class="lay">
                  <p class="tit">优惠?</p>
                  <p class="demand">满100元可用</p>
                </div>
              </div>
            </div>
            <a href="javascript:;" class="get-btn">
              <span>立即领取</span>
            </a>
          </div>
        </div>
        <div class="coupon-item">
          <div class="style-two have">
            <div class="info-box">
              <p class="nick">唯品会平台优惠?</p>
              <div class="coupon-money">
                <div class="lay of">￥<em>10</em></div>
                <div class="lay">
                  <p class="tit">优惠?</p>
                  <p class="demand">满100元可用</p>
                </div>
              </div>
            </div>
            <a href="javascript:;" class="get-btn">
              <span>已领取</span>
            </a>
          </div>
        </div>
        <h3>1号店优惠?领取：</h3>
        <div class="coupon-item">
          <div class="style-three">
            <div class="info-box">
              <p class="nick">1号店平台优惠券</p>
              <div class="coupon-money">
                <div class="lay of">￥<em>10</em></div>
                <div class="lay">
                  <p class="tit">优惠?</p>
                  <p class="demand">满100元可用</p>
                </div>
              </div>
            </div>
            <a href="javascript:;" class="get-btn">
              <span>点击领取</span>
            </a>
          </div>
        </div>
        <div class="coupon-item">
          <div class="style-three have">
            <div class="info-box">
              <p class="nick">1号店平台优惠券</p>
              <div class="coupon-money">
                <div class="lay of">￥<em>10</em></div>
                <div class="lay">
                  <p class="tit">优惠?</p>
                  <p class="demand">满100元可用</p>
                </div>
              </div>
            </div>
            <a href="javascript:;" class="get-btn">
              <span>已领取</span>
            </a>
          </div>
        </div>
        <h3>当当网优惠券领取：</h3>
        <div class="coupon-item">
          <div class="style-four">
            <div class="info-box">
              <p class="nick">当当网平台优惠券</p>
              <div class="coupon-money">
                <div class="lay of">￥<em>10</em></div>
                <div class="lay">
                  <p class="tit">优惠?</p>
                  <p class="demand">满100元可用</p>
                </div>
              </div>
            </div>
            <a href="javascript:;" class="get-btn">
              <span class="coBlack">立即领取</span>
            </a>
          </div>
        </div>
        <div class="coupon-item">
          <div class="style-four have">
            <div class="info-box">
              <p class="nick">当当网平台优惠券</p>
              <div class="coupon-money">
                <div class="lay of">￥<em>10</em></div>
                <div class="lay">
                  <p class="tit">优惠?</p>
                  <p class="demand">满100元可用</p>
                </div>
              </div>
            </div>
            <a href="javascript:;" class="get-btn">
              <span>已领取</span>
            </a>
          </div>
        </div>
        <h3>飞牛网优惠?领取：</h3>
        <div class="coupon-item">
          <div class="style-five">
            <div class="info-box">
              <p class="nick">飞牛网平台优惠券</p>
              <div class="coupon-money">
                <div class="lay of">￥<em>10</em></div>
                <div class="lay">
                  <p class="tit">优惠?</p>
                  <p class="demand">满100元可用</p>
                </div>
              </div>
            </div>
            <a href="javascript:;" class="get-btn">
              <span>立即领取</span>
            </a>
          </div>
        </div>
        <div class="coupon-item">
          <div class="style-five have">
            <div class="info-box">
              <p class="nick">飞牛网平台优惠券</p>
              <div class="coupon-money">
                <div class="lay of">￥<em>10</em></div>
                <div class="lay">
                  <p class="tit">优惠?</p>
                  <p class="demand">满100元可用</p>
                </div>
              </div>
            </div>
            <a href="javascript:;" class="get-btn">
              <span>已领取</span>
            </a>
          </div>
        </div>
        <h3>我买网优惠?领取：</h3>
        <div class="coupon-item">
          <div class="style-six">
            <div class="info-box">
              <p class="nick">我买网平台优惠券</p>
              <div class="coupon-money">
                <div class="lay of">￥<em>10</em></div>
                <div class="lay">
                  <p class="tit">优惠?</p>
                  <p class="demand">满100元可用</p>
                </div>
              </div>
            </div>
            <a href="javascript:;" class="get-btn">
              <span>点击领取</span>
            </a>
          </div>
        </div>
        <div class="coupon-item">
          <div class="style-six have">
            <div class="info-box">
              <p class="nick">我买网平台优惠券</p>
              <div class="coupon-money">
                <div class="lay of">￥<em>10</em></div>
                <div class="lay">
                  <p class="tit">优惠?</p>
                  <p class="demand">满100元可用</p>
                </div>
              </div>
            </div>
            <a href="javascript:;" class="get-btn">
              <span>已领取</span>
            </a>
          </div>
        </div>
        <h3>苏宁优惠?领取：</h3>
        <div class="coupon-item">
          <div class="style-seven">
            <div class="info-box">
              <p class="nick">苏宁平台优惠券</p>
              <div class="coupon-money">
                <div class="lay of">￥<em>10</em></div>
                <div class="lay">
                  <p class="tit">优惠?</p>
                  <p class="demand">满100元可用</p>
                </div>
              </div>
            </div>
            <a href="javascript:;" class="get-btn">
              <span>立即领取</span>
            </a>
          </div>
        </div>
        <div class="coupon-item">
          <div class="style-seven have">
            <div class="info-box">
              <p class="nick">苏宁平台优惠券</p>
              <div class="coupon-money">
                <div class="lay of">￥<em>10</em></div>
                <div class="lay">
                  <p class="tit">优惠?</p>
                  <p class="demand">满100元可用</p>
                </div>
              </div>
            </div>
            <a href="javascript:;" class="get-btn">
              <span>已领取</span>
            </a>
          </div>
        </div>
      </div>-->


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
        cenList:[
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
              }
            ]
          },
          {
            list: [
              {
                money:'200元',
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
          }
        ],
        modelList:[]
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
      }
    },
    mounted(){
      this.modelList.push(this.cenList[0])
    },
    beforeDestroy(){
    }
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
      position: fixed;
      z-index:999;
      background: #0a0a0a;
      width: 100%;
      top:2.5rem;
      color: #fff;
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
      color: #fff;
      height: 100rem;
      margin: 4.8rem 0 0 0;
      .top-model-list{
        padding: 0.6rem;
        .top-model-sw{
          width: 8rem;
          margin: 0 0 0.2rem 0;
        }
        .coupon-1{
          border-radius: 0.2rem 0.2rem 0 0;
          width: 8rem;
          background: radial-gradient(circle at 4rem 0rem, transparent 0.5rem, #28A4F2 0) top;
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
            background-image: linear-gradient(-45deg,#28A4F2 25%,transparent 25%,transparent),linear-gradient(-135deg,#28A4F2 25%,transparent 25%,transparent),linear-gradient(-45deg,transparent 75%,#28A4F2 75%),linear-gradient(-135deg,transparent 75%,#28A4F2 75%);
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
          background: #6b6b6b;
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
            background: #1197ca;
            text-align: center;
            padding: 0.4rem 0.2rem;
            border-radius: 0.2rem;
          }
        }
      }
    }
  }


/*  .coupon{
    background-color: #E0E0E0;
    width: 200px;
    !* css变量 *!
    --main-color: #EC407A;
    --f-color: #444;
  }
  .price {
    position: relative;
    height: 120px;
    background-image: radial-gradient(
        circle at 100px -8px, #fff 20px, var(--main-color) 21px
    );
    color: #fff;
    font-size: 20px;
    text-align: center;
    padding-top: 40px;
  }
  .price .timeout{
    color: var(--f-color);
    font-size: 14px;
    margin-top: 25px;
  }
  .price span{
    font-size: 14px;
  }
  .price::after{
    position: absolute;
    content: '';
    display: block;
    bottom: 0px;
    height: 10px;
    width: 100%;
    !* background-size: 11px 200px; *!
    background-image:
      radial-gradient(
          circle at 5px 10px,
          #E0E0E0 6px,
          var(--main-color) 7px);
  }
  !*.price::after{
    position: absolute;
    content: '';
    display: block;
    bottom: -5px;
    width: 100%;
    border-bottom: 10px dotted #E0E0E0;
  }*!
  .describe{
    color: #333;
    padding: 10px;
    font-size: 14px;
  }
  .btns {
    !* 使其button可以居中 *!
    text-align: center;
  }
  .btns button{
    !* 重置按钮样式 *!
    border: none;
    box-shadow: none;
    outline: none;

    background-color: var(--main-color);
    color: #fff;
    width: 50%;
    border-radius: 20px;
    line-height: 30px;
    margin: 40px 0 20px;
    cursor: pointer;
  }

  .base-one-circle {
  !*  width: 100px;
    height: 100px;
    position: relative;
    background: radial-gradient(circle at 0px 50px, transparent 10px, #28A4F2 0) top*!
    width: 250px;
    height: 100px;
    position: relative;
    background: radial-gradient(circle at right top, transparent 10px,  #28A4F2 0) top left / 60px 51% no-repeat,
    radial-gradient(circle at right bottom, transparent 10px,  #28A4F2 0) bottom left /60px 51% no-repeat,
    radial-gradient(circle at left top, transparent 10px, #eeeeee 0) top right /190px 51% no-repeat,
    radial-gradient(circle at left bottom, transparent 10px, #eeeeee 0) bottom right /190px 51% no-repeat;
    filter: drop-shadow(3px 3px 3px rgba(0,0,0,.3));
  }
  .base-coupons::before {
    content: '';
    height: 80px;
    border: 1px dashed #fff;
    position: absolute;
    left: 60px;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .base-coupons::after {
    content: '';
    position: absolute;
    height: 100%;
    width:5px;
    top: 0;
    right: -5px;
    background-image: linear-gradient(to bottom, #eeeeee 5px, transparent 5px, transparent),
    radial-gradient(10px circle at 5px 10px, transparent 5px, #eeeeee 5px);
    background-size: 5px 15px;
  }*/


  /*@charset "utf-8";
  html {
    margin:0;
    height:100%;
    -ms-text-size-adjust:100%;
    -webkit-text-size-adjust:100%;
    font-size:62.5%;
  }
  body {
    width:100%;
    max-width:640px;
    min-width:320px;
    height:100%;
    margin:0 auto;
    padding:0;
    font-family:"Microsoft Yahei";
    font-size:1.2rem;
    color:#a1a1a1;
    background:#f5f5f5;
    position:relative;
    overflow-x:hidden;
    -webkit-overflow-scrolling:touch;
  }
  a {
    text-decoration:none;
    color:#a1a1a1;
    background:transparent;
    -webkit-tap-highlight-color:transparent;
  }
  a:active {
    color:#8c88ff;
    border:none;
    outline:none;
  }
  article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary {
    display:block;
  }
  audio,canvas,progress,video {
    display:inline-block;
    vertical-align:baseline;
  }
  audio:not([controls]) {
    display:none;
    height:0;
  }
  [hidden],template {
    display:none;
  }
  input {
    border:1px solid #999;
    line-height:normal;
    vertical-align:middle;
    outline:0;
    border-radius:0;
    background:#FFFFFF;
    -webkit-appearance:none;
  }
  input[type="radio"],input[type="checkbox"] {
    padding:0;
    -webkit-tap-highlight-color:rgba(255,255,255,0);
  }
  input[type="number"] {
    -moz-appearance:textfield;
  }
  input[type="number"]::-webkit-inner-spin-button,input[type="number"]::-webkit-outer-spin-button {
    margin:0;
    height:auto;
    -webkit-appearance:none !important;
  }
  input[type="search"] {
    -webkit-appearance:textfield;
  }
  input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration {
    -webkit-appearance:none;
  }
  input::-moz-placeholder,textarea::-moz-placeholder {
    font-size:1.4rem;
    color:#c1c1c1;
  }
  input:-ms-input-placeholder,textarea:-ms-input-placeholder {
    font-size:1.4rem;
    color:#c1c1c1;
  }
  input::-webkit-input-placeholder,textarea::-webkit-input-placeholder {
    font-size:1.4rem;
    color:#c1c1c1;
  }
  button,input,optgroup,select,textarea {
    margin:0;
    font:inherit;
    color:inherit;
    -webkit-tap-highlight-color:rgba(255,255,255,0);
  }
  button {
    border:none;
    overflow:visible;
  }
  button,select {
    text-transform:none;
  }
  button,html input[type="button"],input[type="reset"],input[type="submit"] {
    -webkit-appearance:none;
    cursor:pointer;
  }
  button[disabled],html input[disabled] {
    cursor:default;
  }
  button::-moz-focus-inner,input::-moz-focus-inner {
    border:0;
    padding:0;
  }
  textarea {
    resize:vertical;
    overflow:auto;
  }
  textarea:focus {
    outline:none;
  }
  h1,h2,h3,h4,h5,h6,p,figure,form,blockquote,ul,ol,li,dl,dd,td,th {
    margin:0;
    padding:0;
  }
  h1,h2,h3,h4,h5,h6 {
    font:inherit;
  }
  ul,ol {
    list-style:none;
  }
  em,i {
    font-style:normal;
  }
  table {
    border-collapse:collapse;
    border-spacing:0;
  }
  label {
    -webkit-tap-highlight-color:rgba(255,255,255,0);
  }
  img {
    max-width:100%;
    height:auto;
    border:0;
    vertical-align:middle;
  }
  * {
    -webkit-box-sizing:border-box;
    box-sizing:border-box;
  }
  .coupon-wrapper {
    width:100%;
    height:auto;
    padding:5%;
  }
  .coupon-wrapper .coupon-item {
    width:100%;
  }
  .coupon-wrapper h3 {
    height:3rem;
    line-height:1.8rem;
    font-size:1.4rem;
    color:#454545;
    padding:2% 0;
  }
  .coupon-item .nick {
    padding:.66% 0;
    color:#fff;
  }
  .coupon-item .coupon-money {
    width:100%;
    display:-webkit-box;
    display:-webkit-flex;
    display:flex;
    font-size:1.2rem;
    align-items:center;
  }
  .coupon-item .coupon-money em {
    font-size:3.8rem;
  }
  .coupon-item .coupon-money .lay:last-child {
    flex:1;
    padding:0 3%;
    line-height:1.66rem;
  }
  .style-one,.style-two,.style-three,.style-four,.style-five,.style-six,.style-seven {
    width:100%;
    height:8rem;
    position:relative;
    margin:5% 0;
    display:-webkit-box;
    display:-webkit-flex;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:#fff;
    border:1px solid #E5004F;
  }
  .style-one:after,.style-three .get-btn:after {
    content:"";
    width:1.2rem;
    position:absolute;
    top:0;
    bottom:0;
    right:23.9%;
    display:block;
    z-index:9;
    background-color:#fff;
    background-position:100% 35%;
    background-size:2rem .66rem;
    background-image:linear-gradient(-45deg,#e5004f 25%,transparent 25%,transparent),linear-gradient(-135deg,#e5004f 25%,transparent 25%,transparent),linear-gradient(-45deg,transparent 75%,#e5004f 75%),linear-gradient(-135deg,transparent 75%,#e5004f 75%);
  }
  .style-one .info-box,.style-two .info-box,.style-three .info-box,.style-four .info-box,.style-five .info-box,.style-six .info-box,.style-seven .info-box {
    -webkit-box:1;
    -webkit-flex:1;
    flex:1;
    padding:0 3% 0 10%;
    position:relative;
  }
  .style-one .info-box:before,.style-one .info-box:after,.style-one .get-btn:before,.style-one .get-btn:after,.style-two .info-box:before,.style-two .info-box:after,.style-two .get-btn:before,.style-two .get-btn:after {
    content:"";
    width:1.4rem;
    height:2rem;
    position:absolute;
    z-index:9;
    border-width:1px;
    border-style:solid;
    border-color:transparent #E5004F transparent transparent;
    -webkit-border-radius:50%;
    border-radius:50%;
    background-color:#f5f5f5;
  }
  .style-one .info-box:before,.style-two .info-box:before {
    top:-1.8rem;
    left:-.5rem;
    -webkit-transform:rotate(43deg);
    transform:rotate(43deg);
  }
  .style-one .info-box:after,.style-two .info-box:after {
    bottom:-1.8rem;
    left:-.5rem;
    -webkit-transform:rotate(-43deg);
    transform:rotate(-43deg);
  }
  .style-one .get-btn:before,.style-two .get-btn:before {
    top:-.8rem;
    right:-.35rem;
    -webkit-transform:rotate(143deg);
    transform:rotate(143deg);
    border-color:transparent;
  }
  .style-one .get-btn:after,.style-two .get-btn:after {
    bottom:-.8rem;
    right:-.35rem;
    -webkit-transform:rotate(-143deg);
    transform:rotate(-143deg);
    border-color:transparent;
  }
  .style-one .get-btn,.style-two .get-btn,.style-three .get-btn,.style-four .get-btn,.style-six .get-btn,.style-seven .get-btn {
    display:-webkit-box;
    display:-webkit-flex;
    display:flex;
    align-items:center;
    justify-content:center;
    width:24%;
    height:8rem;
    text-align:center;
    color:#fff;
    font-size:1.5rem;
    line-height:1.35;
    background-color:#E5004F;
    position:relative;
  }
  .style-one .get-btn span {
    width:1.6rem;
    padding:.66rem 2rem .66rem 0;
    display:inherit;
    margin:0 auto;
    word-break:break-all;
  }
  .style-one .nick,.style-four .nick {
    color:#c1c1c1;
  }
  .style-one .of,.style-one .lay .tit,.style-four .of,.style-four .lay .tit,.style-six .nick {
    color:#E5004F;
  }
  .style-one .lay .demand,.style-four .lay .demand {
    color:#454545;
  }
  .style-two {
    background-color:#ED008C;
    border:1px solid #ED008C;
    color:#fff;
  }
  .style-two:before,.style-two:after {
    content:"";
    height:.5rem;
    position:absolute;
    display:block;
    z-index:9;
    background-image:linear-gradient(-45deg,#ED008C 25%,transparent 25%,transparent),linear-gradient(-135deg,#ED008C 25%,transparent 25%,transparent),linear-gradient(-45deg,transparent 75%,#ED008C 75%),linear-gradient(-135deg,transparent 75%,#ED008C 75%);
    background-size:1rem 1rem;
    background-repeat:repeat-x,repeat-x;
  }
  .style-two:before {
    top:-.4rem;
    left:.5rem;
    right:.5rem;
    -webkit-transform:rotate(180deg);
    transform:rotate(180deg);
  }
  .style-two:after {
    bottom:-.36rem;
    left:1.2rem;
    right:1.38rem;
  }
  .style-two .info-box:before,.style-two .info-box:after {
    border-color:transparent;
  }
  .style-two .get-btn {
    background-color:#ed008c;
  }
  .style-two .get-btn span,.style-three .get-btn span,.style-six .get-btn span,.style-seven .get-btn span {
    width:4rem;
    font-size:1.8rem;
    word-break:break-all;
  }
  .style-two .of {
    color:#FFF100;
  }
  .style-three {
    background-color:#378AE8;
    border:none;
    color:#fff;
  }
  .style-three:before {
    content:"";
    position:absolute;
    left:-.66rem;
    width:2.4rem;
    height:2.8rem;
    top:50%;
    -webkit-transform:translate(-30%,-50%);
    transform:translate(-30%,-50%);
    -webkit-box-shadow:3px 0 0 #aeadad;
    box-shadow:3px 0 0 #aeadad;
    -webkit-border-radius:80%;
    border-radius:80%;
    background-color:#f5f5f5;
  }
  .style-three .get-btn {
    width:34%;
    background-color:#fff;
  }
  .style-three .get-btn:after {
    left:0;
    background-image:linear-gradient(-45deg,#ffffff 25%,#378ae8 25%,#378ae8)
  }
  .style-six .get-btn,.style-seven .get-btn {
    width:28%;
    background-color:#fff;
  }
  .style-three .get-btn span,.style-six .get-btn span {
    color:#378AE8;
  }
  .style-three .get-btn span:after,.style-six .get-btn span:after {
    content:"V";
    font-size:1.6rem;
    display:block;
  }
  .style-four {
    background-color:#fff;
    -webkit-border-radius:1rem;
    border-radius:1rem;
    border:1px dashed #e5004f;
  }
  .style-four .get-btn {
    width:30%;
    height:7rem;
    background-color:#fff;
    text-align:center;
  }
  .style-four .get-btn span {
    display:block;
    padding:2.66rem 0;
    font-size:1.5rem;
    word-break:break-all;
    color:#454545;
  }
  .style-five {
    background-color:#E5004F;
    -webkit-border-radius:1rem;
    border-radius:1rem;
    border:none;
    color:#fff;
  }
  .style-five .get-btn {
    width:28%;
    height:7rem;
    position:relative;
    -webkit-perspective:180;
    perspective:180;
  }
  .style-five .get-btn:after {
    content:"";
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background-color:#F8B551;
    transform:rotateY(-28deg);
    z-index:1;
    -webkit-border-radius:.66rem;
    border-radius:.66rem;
    -webkit-box-shadow:-3px 0 8px #793030;
    box-shadow:-3px 0 8px #793030;
  }
  .style-five .get-btn span {
    width:4rem;
    word-break:break-all;
    font-size:1.8rem;
    color:#454545;
    position:absolute;
    top:50%;
    left:50%;
    -webkit-transform:translate(-30%,-50%);
    transform:translate(-30%,-50%);
    z-index:3;
  }
  .style-six {
    background-color:#F7DBCD;
    color:#E5004F;
    border:none;
  }
  .style-six:after,.style-six:before {
    content:"";
    height:.5rem;
    position:absolute;
    left:0;
    right:0;
    display:block;
    z-index:9;
    background-image:linear-gradient(-45deg,#f5f5f5 25%,transparent 25%,transparent),linear-gradient(-135deg,#f5f5f5 25%,transparent 25%,transparent),linear-gradient(-45deg,transparent 75%,#f5f5f5 75%),linear-gradient(-135deg,transparent 75%,#f5f5f5 75%);
    background-size:1rem 1rem;
    background-repeat:repeat-x,repeat-x;
  }
  .style-six:after {
    top:-.12rem;
  }
  .style-six:before {
    bottom:-.12rem;
    -webkit-transform:rotate(180deg);
    transform:rotate(180deg);
  }
  .style-six .get-btn span {
    color:#E5004F;
  }
  .style-seven {
    background-color:#F3B502;
    color:#fff;
    border:none;
  }
  .style-seven:before,.style-seven:after {
    content:"";
    position:absolute;
    width:2rem;
    height:6rem;
    -webkit-border-radius:50%;
    border-radius:50%;
    background-color:#f5f5f5;
    top:50%;
    -webkit-transform:translate(0,-50%);
    transform:translate(0,-50%);
  }
  .style-seven:before {
    left:-1rem;
    -webkit-box-shadow:2px 0 0 #c6c6c6;
    box-shadow:2px 0 0 #c6c6c6;
  }
  .style-seven:after {
    right:-1rem;
    -webkit-box-shadow:-2px 0 0 #c6c6c6;
    box-shadow:-2px 0 0 #c6c6c6;
  }
  .style-seven .get-btn {
    background-color:#000000;
    padding-right:.88rem;
  }
  !* 已领取 *!
  .style-one.have {
    border:1px solid #ddd;
    color:#C1C1C1;
    color:#C1C1C1;
  }
  .style-one.have .info-box:before,.style-one.have .info-box:after,.style-two.have .info-box:before,.style-two.have .info-box:after {
    border-right:1px solid #c1c1c1;
  }
  .style-one.have .of,.style-one.have .tit,.style-one.have .demand,.style-four.have .of,.style-four.have .tit,.style-four.have .demand {
    color:#c1c1c1;
  }
  .style-one.have .get-btn {
    background-color:#c1c1c1;
  }
  .style-one.have .get-btn span {
    color:#fff;
  }
  .style-one.have .get-btn:before,.style-one.have .get-btn:after,.style-two.have .get-btn:before,.style-two.have .get-btn:after {
    border-color:transparent;
  }
  .style-one.have:after {
    background-image:linear-gradient(-45deg,#c1c1c1 25%,transparent 25%,transparent),linear-gradient(-135deg,#c1c1c1 25%,transparent 25%,transparent),linear-gradient(-45deg,transparent 75%,#c1c1c1 75%),linear-gradient(-135deg,transparent 75%,#c1c1c1 75%);
  }
  .style-two.have,.style-three.have {
    background-color:#c1c1c1;
    border:none;
  }
  .style-two.have .of {
    color:#fff;
  }
  .style-two.have:before,.style-two.have:after {
    background-image:linear-gradient(-45deg,#c1c1c1 25%,transparent 25%,transparent),linear-gradient(-135deg,#c1c1c1 25%,transparent 25%,transparent),linear-gradient(-45deg,transparent 75%,#c1c1c1 75%),linear-gradient(-135deg,transparent 75%,#c1c1c1 75%);
  }
  .style-two.have .get-btn {
    background-color:#c1c1c1;
  }
  .style-two.have .get-btn span,.style-three.have .get-btn span,.style-six.have .get-btn span,.style-seven.have .get-btn span {
    width:1.6rem;
    padding:1.36rem 0;
    font-size:1.6rem;
  }
  .style-three.have .get-btn:after {
    background-image:linear-gradient(-45deg,#ffffff 25%,#c1c1c1 25%,#c1c1c1);
  }
  .style-three.have .get-btn span,.style-four.have .get-btn span,.style-six.have .get-btn span {
    color:#767676;
    font-size:1.6rem;
  }
  .style-three.have .get-btn span:after,.style-six.have .get-btn span:after {
    content:"";
  }
  .style-four.have {
    border:1px dashed #C1C1C1;
  }
  .style-five.have,.style-five.have .get-btn:after,.style-six.have,.style-seven.have {
    background-color:#c1c1c1;
  }
  .style-five.have .get-btn:after {
    -webkit-box-shadow:-3px 0 8px #8c8c8c;
    box-shadow:-3px 0 8px #8c8c8c;
  }
  .style-five.have .get-btn span {
    width:5rem;
    font-size:1.5rem;
    color:#fff;
  }
  .style-six.have .nick,.style-six.have .of,.style-six.have .tit,.style-six.have .demand {
    color:#fff;
  }
  .style-six.have span,.style-seven.have span {
    font-size:1.6rem;
    color:rgba(189,189,189,1);
  }
*/
</style>
