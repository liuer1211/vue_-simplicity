<template>
  <div class="card-main">
    <div class="card-model">
        <div v-for="(item,index) in list" :key="index" @click="toCard(item)">
            <img :src="item.imgs" alt="">
            <div class="model-bot">
                <span>{{item.tit}}</span>
                <span>{{item.num}}张</span>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
          list: [
            {
                id: "1",
                imgs: "https://liuer1211.github.io/vue_-simplicity/static/img/card/p1.jpg",
                tit: "人物卡片",
                num: "15"
            },
            {
                id: "2",
                imgs: "https://liuer1211.github.io/vue_-simplicity/static/img/card/p2.jpg",
                tit: "荣耀墙",
                num: "18"
            }
          ]
      }
    },
    mounted() {
    },
    methods:{
        // 卡片列表
        toCard(item) {
            switch (item.id) {
                case '1':
                    this.$router.push({name:'yeCard'})
                    return
                case '2':
                    this.$router.push({name:'rongCard'})
                    return
                default:
                    this.getTip()
                    return;
            }
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
    }
  }
</script>

<style scoped lang="scss">
  .card-main {
    padding: .8rem;
    color: #fff;
    .card-model {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        flex-wrap: wrap;
        >div {
            background: #aa00f0;
            width: 48%;
            border-radius: .2rem;
            position: relative;
            overflow: hidden;
            margin-bottom: .8rem;
            img {
                width: 100%;
                height: 10rem;
                object-fit: cover;
                display: block;
            }
            .model-bot{
                position: absolute;
                bottom: 0;
                background: #0303034d;
                width: 100%;
                padding: .8rem .4rem;
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
                font-size: .6rem;
                color: #fff;
                box-sizing: border-box;
                display: flex;
                justify-content: space-between;
                >span:last-child{
                    color: #f0bc00;
                    font-weight: 600;
                }
            }
        }
    }
  }
</style>
