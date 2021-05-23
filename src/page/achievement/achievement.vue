<template>
  <div class="ach-main">
	  <!-- 书名循环 -->
    <div class="ach-main-model">
        <div class="ach-main-img" v-for="(item, index) in dataList" :key="index" @click="toPage(item.number)">
			<div class="ach-main-img-up">
				<img class="book-name-img" :src="item.bookNameImg1" />
				<img class="book-name-i" :src="item.bookNameImg2" />
				<!-- <img class="book-name-h" :src="item.bookNameImg3" /> -->
				<!-- <img class="book-name-h" src="../../assets/img/game/noval/y4.png" /> -->
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
				  name: "夜灵犀传奇",
				  bookNameImg1: "https://liuer1211.github.io/vue_-simplicity/static/img/game/noval/y1.png",
				  bookNameImg2: "https://liuer1211.github.io/vue_-simplicity/static/img/game/noval/y2.png",
				//   bookNameImg3: "https://liuer1211.github.io/vue_-simplicity/static/img/game/noval/y3.png"
			  }
		  ]
      }
    },
    methods: {
		// 跳页面
		toPage(number) {
			switch(number) {
				case "001":
					this.$router.push("/novalYe");
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
  .ach-main {
    color: #fff;
    padding: .8rem .8rem 0;
    .ach-main-model {
        display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: justify;
		-ms-flex-pack: justify;
		justify-content: space-between;
		flex-wrap: wrap;
        .ach-main-img {
            width: 48%;
			height: 10rem;
			border-radius: 0.2rem;
			background-image: linear-gradient(to bottom, #cea7ff, #4b58ed);
			cursor: pointer;
			margin: 0 0 .8rem;
			cursor: pointer;
			.ach-main-img-up {
				width: 99.5%;
				height: 10rem;
				background-image: linear-gradient(to bottom, #a55fff, #4b58ed);
				border-radius: 0.2rem;
				-webkit-box-shadow: -3px 2px 4px 6px #431d9c;
				box-shadow: 1px 1px 2px 0px #8969d5;
				position: relative;
				.book-name-img {
					position: absolute;
					width: 2.5rem;
					height: 7.5rem;
					-o-object-fit: cover;
					object-fit: cover;
					display: block;
					right: 3%;
					top: 6%;
				}
				.book-name-i {
					position: absolute;
					width: 1.5rem;
					-o-object-fit: cover;
					object-fit: cover;
					display: block;
					right: 30%;
					top: 52%;
				}
				.book-name-h {
					position: absolute;
					width: 4rem;
					-o-object-fit: cover;
					object-fit: cover;
					display: block;
					left: 6%;
					top: 11%;
					opacity: 0.1;
				}
			}
        }
    }
  }
</style>
