<template>
  <div class="ach-main">
    <!-- <div class="ach-main-model">
        <div class="ach-main-img">
            <img src="https://liuer1211.github.io/vue_-simplicity/static/img/game/card/s2.jpg"/>
        </div>
        <div class="ach-main-img">
            <img src="https://liuer1211.github.io/vue_-simplicity/static/img/game/card/s2.jpg"/>
        </div>
    </div> -->


    <div id="main" class="main" @mouseenter="mouseenter" @mouseleave="mouseleave" @click="click">
			<div class="box" ref='box'>
				<div v-for='(item,index) in 8' :key='index'>
					<img class='img' src="https://liuer1211.github.io/vue_-simplicity/static/img/game/card/s2.jpg" @dblclick="imgClick(index)">

				</div>
			</div>
			<div class="bigimg" v-if="isShow">
				<div @click.stop="">
					<img class='img' src="https://liuer1211.github.io/vue_-simplicity/static/img/game/card/s2.jpg" @dblclick="bigImgClick">
				</div>
			</div>
		</div> 

  </div>
</template>

<script>
  export default {
    data () {
      return {
        oWrap: '',
        time: '',
        roY: 0,
        kg: true,
        isShow: false,
        bigindex: 0
      }
    },
    methods: {
      gitList() {
			//1.获取元素
			let imgList = document.querySelectorAll('.img') //获取img数组
			let deg = 360 / imgList.length; //3.每个需要旋转的度数
			// 定义一个开始的度数
			let roX = -10;
			let roY = 0;
			let x, y, x_, y_, xN, yN, time = null;
			//2.遍历所有的img标签
			for (let i = 0; i < imgList.length; i++) {
				imgList[i].style.transform = 'rotateY(' + i * deg + 'deg) translateZ(350px)';
				imgList[i].style.transition = ' all 1s ' + (imgList.length - i - 1) * 0.1 + 's';
				//transition:设置过渡
				imgList[i].ondragstart = function() {
					return false;
				}
			}
		},
		//鼠标进入
		mouseenter() {
			clearInterval(this.time)
			this.run()
		},
		//鼠标离开
		mouseleave() {
			clearInterval(this.time);
		},
		//点击停止（开始）
		click() {
			this.kg = !this.kg
			if (this.kg) {
				this.mouseenter()
			} else {
				this.mouseleave()
			}
		},
		// 点击小图片
		imgClick(index) {
			this.isShow = true
			this.bigindex = index
			console.log(index);
		},
		// 点击大图片
		bigImgClick() {
			this.isShow = false
		},
		//封装计时器
		run() {
			let that = this
			that.oWrap = that.$refs.box
			that.time = setInterval(function() {
				that.roY -= 5 * 0.2;
				that.oWrap.style.transform = 'perspective(800px) rotateX(-10deg) rotateY(' + that.roY + 'deg)';
			}, 100)
		} 
    },
    mounted() {
      this.gitList()
    }
  }
</script>

<style scoped lang="scss">
  .ach-main {
    color: #fff;
    padding: .8rem;
    .ach-main-model {
        display: flex;
        justify-content: space-between;
        .ach-main-img {
            width: 48%;
            height: 10rem;
            background: #fff;
            border-radius: 0.2rem;
            overflow: hidden;
            background-image: linear-gradient(to bottom, #a25cff, #333ca9);
            img {
                display: block;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
  }

  .main {
	width: 100%;
	height: 100%;
	padding-top: 100px;
}

.box {
	width: 133px;
	height: 200px;
	margin: 0px auto;
	position: relative;
	transform-style: preserve-3d;
	transform: perspective(800px) rotateX(-15deg) rotateY(0deg);
}

.box img {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	border-radius: 3px;
	box-shadow: 0px 0px 5px #fff;
	-webkit-box-reflect: below 10px -webkit-linear-gradient(transparent, transparent 50%, rgba(0, 0, 0, .5));
}

.bigimg {
	position: fixed;
	left: 0;
	top: 50px;
	right: 0;
	bottom: 0;
	background-color: aquamarine;
	width: 600px;
	height: 800px;
	margin: 0 auto;
}

.bigimg img {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
</style>
