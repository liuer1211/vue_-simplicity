<template>
  <div class="card-main">
    <div class="card-glory">人物卡片</div>

    <!-- 荣耀列表 -->
    <van-grid :border="false" :column-num="3">
        <van-grid-item v-for="(item,index) in list" :key="index" @click="getCard(item)">
            <img :src="item.img" />
            <span class="card-sp">{{item.tit}}</span>
        </van-grid-item>
    </van-grid>

    <!-- 卡片 -->
    <van-popup v-model="isCardModel" round :duration="0.5" :style="{ height: '60%',width: '80%' }">
        <img class="card-img" src="https://liuer1211.github.io/vue_-simplicity/static/img/card/yeCard/mo/suwan1.jpg"/>
    </van-popup>

    <!-- 刮刮乐-->
    <van-popup v-model="isModel" round :close-on-click-overlay="false" :duration="0.5" :style="{ height: '60%',width: '80%' }">
        <div class="model-main">
            <div class="model-img">
                <scratch-card 
                    elementId="scratch" 
                    width="100%"
                    height="15rem" 
                    :moveRadius="15" 
                    :ratio="0.8"
                    :startCallback="startCallback" 
                    :clearCallback="clearCallbackUp"
                    coverImg="https://liuer1211.github.io/vue_-simplicity/static/img/card/c1.jpg"
                    :result="result">
                </scratch-card>
            </div>
            <van-button plain type="info" @click="isModel=false">开心收下</van-button>
        </div>
    </van-popup>

  </div>
</template>

<script>
  import scratchCard from 'lzy-scratch-card'
  export default {
    data() {
      return {
        list: [
            {img:"https://liuer1211.github.io/vue_-simplicity/static/img/card/yeCard/scratch/suw1.jpg",tit:"炉火纯青"},
            {img:"https://liuer1211.github.io/vue_-simplicity/static/img/card/yeCard/scratch/suw1.jpg",tit:"炉火纯青"},
            {img:"https://liuer1211.github.io/vue_-simplicity/static/img/card/yeCard/scratch/suw1.jpg",tit:"炉火纯青"},
            {img:"https://liuer1211.github.io/vue_-simplicity/static/img/card/yeCard/scratch/suw1.jpg",tit:"炉火纯青"},
        ],
        isModel: true,
        isCardModel: false,
        result: `<img src="https://liuer1211.github.io/vue_-simplicity/static/img/card/yeCard/scratch/suw1.jpg"/>`,//遮罩层下面的页面（html）注：以html标签字符串的样式写
      }
    },
    components: {
        scratchCard,
    },
    mounted() {
    },
    methods:{
        //开始刮时的回调函数
        startCallback(){
        },
        //刮刮乐刮层全部清除后的回调函数
        clearCallbackUp(){
        },
        // 显示大图
        getCard(item) {
            this.isCardModel=true;
        }
    }
  }
</script>

<style scoped lang="scss">
    .card-main {
        padding: .8rem;
        color: #fff;
        /deep/ .van-grid {
            border-radius: .2rem;
            overflow: hidden;
            box-shadow: 0px 1px 1px 2px #464646;
            margin-bottom: .8rem;
            cursor: pointer;
            background-color: #353030;
            img {
                width: 100%;
                height: 100%;
                display: block;
                object-fit: cover;
                border-radius: .2rem;
            }
        }
        /deep/ .van-grid-item__content {
            background-color: #353030;
            padding: .5rem;
        }
        // 卡片
        .card-glory {
            padding: 0 0 .8rem;
            text-align: center;
            font-size: .8rem;
        }
        .card-sp {
            padding: 0.5rem 0 0;
            font-size: .65rem;
            color: #fff;
        }
        .card-img{
            width: 100%;
            height: 100%;
            display: block;
            object-fit: cover;
        }
        /deep/ .van-popup {
            background-color: #fff0;
        }
        // 刮刮乐-弹出层
        .model-main {
            position: relative;
            height: 80%;
            .model-img {
                border-radius: .8rem;
                overflow: hidden;
                height: 100%;
                img {
                    width: 100%;
                    height: 100%;
                    display: block;
                    object-fit: cover;
                }
            }
            .van-button{
                position: absolute;
                bottom: -3rem;
                left: 50%;
                transform: translateX(-50%);
                height: 2rem;
                border-radius: 1rem;
            }
            .van-button--plain {
                background-color: #f86212;
            }
            .van-button--info {
                color: #fff !important;
                background-color: #fff0;
                border: .05rem solid #fff;
                width: 99%;
            }
        }
    }
    // 刮刮乐
    .scratchCard {
        overflow: hidden;
        border-radius: .8rem;
    }
    /deep/ .scratchCard .result {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
    }
    /deep/ .scratchCard .pic {
        width: 100%;
        height: 100%;
        img {
            width: 100%;
            height: 100%;
            display: block;
            object-fit: cover;
        }
    }
</style>
