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
                imgs: "https://cn.bing.com/th?id=OHR.TreCime_ZH-CN7609469681_UHD.jpg&rf=LaDigue_UHD.jpg&pid=hp&w=2880&h=1620&rs=1&c=4",
                tit: "夜灵犀传奇系列",
                num: "15"
            },
            {
                id: "2",
                imgs: "https://cn.bing.com/th?id=OHR.TreCime_ZH-CN7609469681_UHD.jpg&rf=LaDigue_UHD.jpg&pid=hp&w=2880&h=1620&rs=1&c=4",
                tit: "血雨江湖系列",
                num: "18"
            },
            {
                id: "3",
                imgs: "https://cn.bing.com/th?id=OHR.TreCime_ZH-CN7609469681_UHD.jpg&rf=LaDigue_UHD.jpg&pid=hp&w=2880&h=1620&rs=1&c=4",
                tit: "聊斋系列",
                num: "12"
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
                    this.$router.push({name:'login'})
                    return
                case '2':
                    this.$router.push({name:'swiper'})
                    return
                case '3':
                    this.$router.push({name:'top1'})
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
