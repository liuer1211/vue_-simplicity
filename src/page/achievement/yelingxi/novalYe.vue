<template>
  <div class="model-ye-main">
    <!-- card循环 -->
    <div class="model-ye-main-model">
        <div class="model-ye-m" v-for="(item, index) in dataList" :key="index" @click="toPage(item)">
            <div class="model-ye-main-l">
                <img :src="item.img" alt="">
            </div>
            <div class="model-ye-main-r">
                <h2>{{item.name}}</h2>
                <p class="p1">{{item.skill}}</p>
                <p class="p2">{{item.introduce}}</p>
            </div>
            <!-- 锁 -->
            <div class="model-ye-lock" v-if="item.lockFlag" @click.stop="clearLock()">
              <i class="el-icon-lock"></i>
            </div>
        </div>
    </div>
    <!-- 解锁 -->
    <van-popup v-model="isModel" round :close-on-click-overlay="false" :duration="0.5" :style="{ height: '50%',width: '80%' }">
      <div class="model-main">
          <div class="model-main-cen">
            <span>解锁</span>
            <div>
              当前总能量：{{total}}
            </div>
            <div>
              需消耗能量：<countTo :startVal='startVal' :endVal='endValOnly' :duration='durationOnly'></countTo>
            </div>
            <img src="https://liuer1211.github.io/vue_-simplicity/static/img/game/noval/y4.png" alt="">
          </div>
          <div class="model-main-bot">
            <van-button type="info" @click="getClearLock()">确定</van-button>
            <van-button type="info" @click="isModel=false">取消</van-button>
          </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
  import countTo from 'vue-count-to';
  export default {
    components: { countTo },
    data () {
      return {
        dataList: [
            {
              number: "001",
              name: "夜灵犀",
              skill: "燕云七绝/乾坤生死诀",
              introduce: "锦绣一挥，神佛难挡",
              img: "https://liuer1211.github.io/vue_-simplicity/static/img/game/noval/y4.png",
              lockFlag: false, // 是否加锁
              compons: ["Yelingxi001"] // 组件 参数
            },
            {
              number: "002",
              name: "苏晚",
              skill: "回天绝响/百毒魔功",
              introduce: "此曲只应天上有，人间能得几回闻",
              img: "https://liuer1211.github.io/vue_-simplicity/static/img/game/noval/y4.png",
              lockFlag: true, // 是否加锁
              compons: ["Suwan001"] // 组件 参数
            }
        ],
        isModel: false, // 弹窗显示隐藏
        // 需要滚动的时间
        durationOnly: 2000,
        // 初始值
        startVal: 0,
        // 最终值
        endValOnly: 20, // 消费能量
        total: 100, // 总能量
        card: {
          number: "002",
          name: "苏晚",
          skill: "回天绝响/百毒魔功",
          introduce: "此曲只应天上有，人间能得几回闻",
          img: "https://liuer1211.github.io/vue_-simplicity/static/img/game/noval/y4.png",
          lockFlag: true, // 是否加锁
          compons: ["Suwan001"] // 组件 参数
        }
      }
    },
    methods: {
      // 跳页面
      toPage(item) {
        console.log(item);
        switch(item.number) {
          case "001":
            this.$router.push({
                name: "novalYeMain", // 只能用name
                params: {
                  data: item
                }
            });
          case "002":
            this.$router.push({
                name: "novalYeMain", // 只能用name
                params: {
                  data: item
                }
            });
          default:
            return;	
        }
      },
      // 点击面板-解锁
      clearLock() {
        this.isModel=true;
      },
      // 确定解锁
      getClearLock() {
        this.isModel=false;
        this.$toast(
          {
              type: 'success',
              message: '解锁成功！',
              duration: 1000
          }
        );
        this.dataList[1].lockFlag=false;
      }
    },
    mounted() {
    }
  }
</script>

<style scoped lang="scss">
  .model-ye-main {
    color: #fff;
    padding: .8rem;
    .model-ye-main-model {
        .model-ye-m {
            padding: .5rem;
            background: #fff;
            border-radius: 0.2rem;
            background-image: linear-gradient(to right, #a91eff, #612fce);
            cursor: pointer;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            box-shadow: 0px 1px 2px 1px #a985ff;
            margin-bottom: .8rem;
            position: relative;
            .model-ye-main-l {
                width: 5rem;
                height: 5rem;
                min-width: 5rem;
                img {
                    width: 100%;
                    height: 100%;
                    display: block;
                    object-fit: cover;
                    opacity: 0.8;
                    border-radius: 50%;
                }
            }
            .model-ye-main-r {
                padding: 0 0 0 .8rem;
                width: 100%;
                box-sizing: border-box;
                overflow: hidden;
                h2 {
                    font-size: .8rem;
                    margin: 0;
                    padding: 0 0 0.6rem;
                }
                p {
                  overflow: hidden;
                  text-overflow:ellipsis;
                  white-space: nowrap;
                }
                .p1 {
                    margin: 0;
                    font-size: .6rem;
                    padding: 0 0 0.6rem;
                }
                .p2 {
                    margin: 0;
                    font-size: .6rem;
                }
            }
            .model-ye-lock {
              position: absolute;
              left: 0;
              right: 0;
              bottom: 0;
              top: 0;
              background: #adb8da;
              opacity: 1;
              text-align: center;
              .el-icon-lock {
                font-weight: 600;
                font-size: 2rem;
                background: #525151;
                border-radius: 50%;
                padding: .5rem;
                margin-top: 1.3rem;
              }
            }
        }
    }
    .model-main {
      padding: .8rem;
      .model-main-cen {
        color: #000;
        margin-bottom: .8rem;
        display: flex;
        align-items: center;
        flex-direction: column;
        > span {
          font-size: .8rem;
          padding: 0 0 0.6rem;
          &:first-child{
            font-size: 1rem;
            font-weight: 600;
          }
        }
        > div {
          font-size: .8rem;
          padding: 0 0 0.6rem;
        }
        img {
          border-radius: 50%;
          width: 7rem;
          height: 7rem;
        }
      }
      .model-main-bot {
        display: flex;
        justify-content: space-between;
        .van-button {
          height: 1.8rem;
          border-radius: .2rem;
          width: 48%;
          box-shadow: 1px 1px 3px 0px #70a7f9;
        }
      }
  }
  }
</style>

