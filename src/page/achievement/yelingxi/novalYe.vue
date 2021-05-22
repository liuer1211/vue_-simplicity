<template>
  <div class="model-ye-main">
    <!-- card循环 -->
    <div class="model-ye-main-model">
        <div class="model-ye-main-img" v-for="(item, index) in dataList" :key="index" @click="toPage(item)">
            <img :src="item.img"/>
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
                name: "夜灵犀传奇",
                img: "https://liuer1211.github.io/vue_-simplicity/static/img/game/card/s2.jpg",
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
        display: flex;
        justify-content: space-between;
        .model-ye-main-img {
            width: 48%;
            height: 10rem;
            background: #fff;
            border-radius: 0.2rem;
            overflow: hidden;
            background-image: linear-gradient(to bottom, #a25cff, #333ca9);
			cursor: pointer;
            img {
                display: block;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
  }
</style>

