<template>
  <div class="card-main">
    <div class="card-glory">荣耀墙</div>
    <!-- 荣耀列表 -->
    <van-grid :border="false" :column-num="3">
        <van-grid-item>
            <img src="https://img01.yzcdn.cn/vant/apple-1.jpg" />
            <span>炉火纯青</span>
        </van-grid-item>
        <van-grid-item>
            <img src="https://img01.yzcdn.cn/vant/apple-2.jpg" />
            <span>炉火纯青</span>
        </van-grid-item>
        <van-grid-item>
            <img src="https://img01.yzcdn.cn/vant/apple-3.jpg" />
            <span>炉火纯青</span>
        </van-grid-item>
        <van-grid-item>
            <img src="https://img01.yzcdn.cn/vant/apple-1.jpg" />
            <span>炉火纯青</span>
        </van-grid-item>
        <van-grid-item>
            <img src="https://img01.yzcdn.cn/vant/apple-2.jpg" />
            <span>炉火纯青</span>
        </van-grid-item>
        <van-grid-item>
            <img src="https://img01.yzcdn.cn/vant/apple-3.jpg" />
            <span>炉火纯青</span>
        </van-grid-item>
    </van-grid>

    <!-- 刮刮乐 -->
    <div class="canvas-content">
        <div id="content" class="canvas-container-vertical">
            <img src="https://img01.yzcdn.cn/vant/apple-3.jpg" alt="" id="lapm" style="width:100%;height:100%;">
            <canvas id="signCanvas"></canvas>
        </div>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
      }
    },
    mounted() {
        // 画布
        this.greenType();
    },
    methods:{
        // 横屏和竖屏下的展示不一样的样式
        greenType() {
            this.initCanvas(window.orientation);
        },
        // 初始化画布
        initCanvas(type) {
            let contentBox=document.getElementById('content');
            let oCanvas = document.getElementById('signCanvas');
            oCanvas.width = contentBox.clientWidth;
            oCanvas.height = contentBox.clientHeight;
            // 获取画布绘图环境
            let ctx = oCanvas.getContext('2d');
            // 设置画布绘图背景色
            ctx.fillStyle = "#ccc";
            // // 使用fillStyle属性所指的颜色.渐变或模式来填充指定的矩形
            ctx.fillRect(0, 0, oCanvas.width, oCanvas.height);
            // 设置填充文本的字体样式
            ctx.fillStyle = "#fff"
            ctx.font = "30px Arial"
            // 根据设置的样式填充文字
            ctx.fillText('刮一刮', oCanvas.width/2-40,oCanvas.height/2);
            /*  画布填充图片
            let img = new Image();
            img.src = require('../img/test1.jpg');
            img.width= oCanvas.width;
            img.height = oCanvas.height;
            img.οnlοad=function(e){
                let pattern=ctx.createPattern(img,'no-repeat')
                ctx.fillStyle=pattern;
                ctx.fillRect(0,0,oCanvas.width,oCanvas.height)
            }*/
            //手指接触屏幕
            oCanvas.addEventListener('touchstart',function(ev){
                ev=ev||event;
                let touchC=ev.changedTouches[0];//拿第一根手指
                //获取手指接触屏幕的坐标 clientX手指相对于屏幕左侧坐标，clientY手指相对于屏幕顶部坐标
                //offsetLeft相对于定位为absolute的父元素的左侧坐标，offsetTop相对于定位为absolute的父元素的顶部坐标， 
                // 逐级向上找absolute父级，如果没有这样的父级以body为准
                let x=touchC.clientX-contentBox.offsetLeft; //获取到手指相对于contentBox左侧的坐标
                let y=touchC.clientY-contentBox.offsetTop;  //获取到手指相对于contentBox顶部的坐标
                ctx.save(); // 保存当前环境的状态。
                //只留下目标超过源的部分
                ctx.globalCompositeOperation='destination-out'
                // 设置划线的大小
                ctx.lineWidth=30;
                // lineCap 属性设置或返回线条末端线帽的样式。 butt	默认。向线条的每个末端添加平直的边缘。
                ctx.lineCap="butt";
                // lineJoin 属性设置或返回所创建边角的类型，当两条线交汇时。miter	默认。创建尖角。
                ctx.lineJoin="miter";
                // miterLimit 属性设置或返回最大斜接长度。斜接长度指的是在两条线交汇处内角和外角之间的距离。
                ctx.miterLimit= 5;
                // 起始一条路径，或重置当前路径。
                ctx.beginPath();
                //只能画线，用线模拟圆
                ctx.moveTo(x,y);
                ctx.lineTo(x+1,y+1);
                // 绘制已定义的路径。
                ctx.stroke();
                // 返回之前保存过的路径状态和属性。
                ctx.restore();
            });
            oCanvas.addEventListener('touchmove',function(ev){
                ev=ev||event;
                let touchC=ev.changedTouches[0];//拿第一根手指
                //获取手指接触屏幕的坐标
                let x=touchC.clientX-contentBox.offsetLeft;
                let y=touchC.clientY-contentBox.offsetTop;
                ctx.save();
                ctx.globalCompositeOperation='destination-out'
                ctx.lineWidth=30;
                ctx.lineCap="butt";
                ctx.lineJoin="miter";
                ctx.miterLimit= 5;
                ctx.lineTo(x+1,y+1);
                ctx.stroke();
                ctx.restore();
            });
            let flag=0;
            //手指离开屏幕
            oCanvas.addEventListener('touchend',function(){
                let imgdatga=ctx.getImageData(0,0,oCanvas.width,oCanvas.height);
                //拿到所有的像素
                let allPx=imgdatga.width*imgdatga.height;
                console.log(imgdatga);
                for(let i=0;i<allPx;i++){
                    if(imgdatga.data[4*i+3]==0){
                        flag++;
                    }
                }
                //如果划开的像素大于整个canvas的一半，就让canvas的透明度为0，让图片显示出来
                // if(flag>=allPx/2){
                //     oCanvas.style.opacity=0;
                // }
                //过渡执行完，透明度为0，就把canvas在页面上删除
                oCanvas.addEventListener('transitionend',function(){
                    this.remove();//删除canvas
                });
            });
        }, 
    }
  }
</script>

<style scoped lang="scss">
  .card-main {
    padding: .8rem;
    color: #fff;
    .card-glory {
        padding: 0 0 .8rem;
        text-align: center;
        font-size: .8rem;
    }
    span {
        padding: 0.5rem 0 0;
        font-size: .65rem;
        color: #fff;
    }
    /deep/ .van-grid {
        border-radius: .2rem;
        overflow: hidden;
        box-shadow: 0px 1px 1px 2px #464646;
        margin-bottom: .8rem;
        img {
            width: 100%;
            height: 100%;
            display: block;
        }
    }
    /deep/ .van-grid-item__content {
        background-color: #353030;
        padding: .5rem;
    }
  }
.canvas-content {
    // position: fixed;
    // top: 0;
    // left: 0;
    width: 100%;
    height: 100%;
    z-index: 1111111;
    background: #bbb;
    .vertical-text {
        p {
            color: #ddd;
            font-size: 20px;
            margin: 40px 0;
            text-align: center;

        }
    }
    .canvas-operation {
        width: 100%;
        height: 40px;
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 111111111;
        background: #ccc;
        button {
            width: 70px;
            height: 40px;
            background: #aaa;
            margin: 0 10px;
            outline: none;
            &:active {
                background: #888;
            }
        }
    }
    .canvas-container {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 40px;
        background: green;
        #signCanvas {
            width: 100%;
            height: calc(100% - 40px);
            background: #fff;
            border: none;
            box-sizing: border-box;
            overflow: hidden;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 1111111112;
        }
    }
    .canvas-container-vertical {
        width: 100%;
        height: 300px;
        position: relative;
        top: 0;
        left: 0;
        font-size: 32px;
        color: red;
        line-height: 300px;
        text-align: center;
        #lapm {
            width: 100%;
            height: 100%;
        }
        #signCanvas {
            width: 100%;
            height: 100%;
            // background: #fff;
            border: none;
            box-sizing: border-box;
            overflow: hidden;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 40px;
            z-index: 1111111112;
        }
    }
}
</style>
