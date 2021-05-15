<template>
  <div class="game-main">
    <div class="card-main">
        <div class="card">
            <p>
                1.地球是个不发光又不透明的球体，同一瞬间没被太阳照到的地球是?
            </p>
        </div>
        <div class="select">
            <van-button @click="getSelect()" type="info" class="but">A.黑夜</van-button>
            <van-button type="info">B.背面</van-button>
        </div>
    </div>
    <div class="card-main">
        <div class="card">
            <p>
                2.陆地资源卫星是以勘测什么为主的卫星？
            </p>
        </div>
        <div class="select">
            <van-button @click="getSelect()" type="info" class="but">A.森林</van-button>
            <van-button type="info">B.陆地</van-button>
        </div>
    </div>
  </div>
</template>

<script>
  import { eleUtil } from '@/assets/js/util'
  import { setCookie } from '@/assets/js/support' // cookie缓存
  import { setToken } from '@/assets/js/auth' // 验权
  export default {
    data () {
      return {
      }
    },
    methods: {
        // 提示
        tost() {
        },
        getSelect() {
        }
    },
    mounted(){
    },
    beforeDestroy(){
    }
  }
</script>

<style scoped lang="scss">
  .game-main{
    color: #000;
    padding: 0.8rem;
    font-size: 0.8rem;
    >div:not(:first-child) {
        margin: 1.2rem 0 0 0;
    }
    .card-main{
        padding: 0.8rem;
        background-color: #fff;
        border-radius: 0.2rem;
        box-shadow: -1px 1px 3px #ebedf0;
        border: 1px solid #e5e5e5;
        .card {
            margin-bottom: 1rem;
            padding: 0.8rem;
            background-color: #fff;
            border-radius: 0.2rem;
            box-shadow: 1px 2px 3px 2px #dfdddd;
            p {
                margin: 0;
                line-height: 1rem;
                letter-spacing: 1px;
                word-break: break-all;
            }
        }
        .select {
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;
            .but {
                margin: 0 1rem 0 0;
            }
            .van-button {
                height: 1.8rem;
                border-radius: 0.2rem;
            }
            .van-button--normal {
                padding: 0 2.5rem;
            }
        }
    }
  }
</style>
