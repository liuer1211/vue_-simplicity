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
        </div>
        <div class="model-ye-m">
          敬请期待。。。
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        dataList: [
            {
              number: "001",
              name: "夜灵犀",
              skill: "燕云七绝/乾坤生死诀",
              introduce: "锦绣一挥，神佛难挡",
              img: "https://liuer1211.github.io/vue_-simplicity/static/img/game/noval/y4.png",
              compons: ["Yelingxi001"] // 组件 参数
            },
            {
              number: "002",
              name: "苏晚",
              skill: "回天绝响/百毒魔功",
              introduce: "此曲只应天上有，人间能得几回闻",
              img: "https://liuer1211.github.io/vue_-simplicity/static/img/game/noval/y4.png",
              compons: ["Suwan001"] // 组件 参数
            }
        ]
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
				default:
					return;	
			}
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
            .model-ye-main-l {
                width: 5rem;
                height: 5rem;
                min-width: 5rem;
                img {
                    width: 100%;
                    height: 100%;
                    display: block;
                    object-fit: cover;
                    opacity: 0.6;
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
        }
    }
  }
</style>

