<template>
  <div class="model-ye-main">
    <!-- card循环 -->
    <div class="model-ye-main-model">
        <div class="model-ye-main" v-for="(item, index) in dataList" :key="index" @click="toPage(item)">
            <div class="model-ye-main-l">
                <img :src="item.img" alt="">
            </div>
            <div class="model-ye-main-r">
                <h2>{{item.name}}</h2>
                <p class="p1">{{item.skill}}</p>
                <p class="p2">{{item.introduce}}</p>
            </div>
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
                introduce: "夜灵犀",
                img: "https://liuer1211.github.io/vue_-simplicity/static/img/game/noval/y4.png",
                compons: ["Yelingxi001","Suwan001"] // 组件 参数
            },
            {
                number: "001",
                name: "夜灵犀",
                skill: "燕云七绝/乾坤生死诀",
                introduce: "夜灵犀",
                img: "https://liuer1211.github.io/vue_-simplicity/static/img/game/noval/y4.png",
                compons: ["Yelingxi001","Suwan001"] // 组件 参数
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
        .model-ye-main {
            background: #fff;
            border-radius: 0.2rem;
            background-image: linear-gradient(to bottom, #a25cff, #333ca9);
			cursor: pointer;
            display: flex;
            align-items: center;
            box-shadow: 0px 2px 4px 1px #511cd0;
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
                    opacity: 0.4;
                    border-radius: .2rem;
                }
            }
            .model-ye-main-r {
                padding: 0 0 0 .8rem;
                width: 100%;
                box-sizing: border-box;
                h2 {
                    font-size: .9rem;
                    margin: 0;
                    padding: 0 0 0.6rem;
                }
                .p1 {
                    margin: 0;
                    font-size: .6rem;
                    padding: 0 0 0.6rem;
                }
                .p2 {
                    margin: 0;
                    font-size: .7rem;
                }
            }
        }
    }
  }
</style>

