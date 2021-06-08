<template>
  <div class="game-main">
    <!-- 题目 -->
    <div v-for="(item,index) in datas.list" :key="index">
        <div class="card-main" :class="item.className" v-if="item.isShow">
            <div class="card">
                <p>
                    {{item.cen}}
                </p>
            </div>
            <div class="select">
                <van-button v-for="(ite,ind) in item.select" :key="ind" @click="getSelect(item,ite,index)" type="info">
                    {{ite.name}}
                </van-button>
            </div>
            <div class="finish" v-if="item.isFinish">完成</div>
        </div>
    </div>
    <!-- 查看 -->
    <div class="model-look" v-if="isModelBut">
        <van-button type="info" @click="isModel=true">查看战绩</van-button>
        <van-button type="primary" class="next" @click="toNext()">下一关</van-button>
    </div>
    <!-- 战绩 -->
    <van-popup v-model="isModel" round :close-on-click-overlay="false" :duration="0.5" :style="{ height: '57%',width: '80%' }">
        <div class="model-main">
            当前关卡：{{datas.level}}<br/>
            当前能量：{{energy}}<br/>
            当前难易度：{{datas.grade}}
            <div class="model-img">
                <img src="https://liuer1211.github.io/vue_-simplicity/static/img/game/card/s1.jpg"/>
            </div>
            <van-button type="info" @click="isModel=false">确定</van-button>
        </div>
    </van-popup>
    <!-- 刮刮乐 -->
    <!-- <div class="canvas-content">
        <div id="content" class="canvas-container-vertical">
            <img src="../../assets/img/game/card/s1.jpg" alt="" id="lapm">
            <canvas id="signCanvas"></canvas>
        </div>
    </div> -->
    
  </div>
</template>

<script>
  export default {
    components: {
    },
    computed:{
    },
    watch: {
    },
    data () {
      return {
            datas: {
                list: [
                {
                    cen: "1.地球是个不发光又不透明的球体，同一瞬间没被太阳照到的地球是?",
                    select: [
                        {
                            code: "1",
                            name: "A.黑夜",
                            answer: true
                        },
                        {
                            code: "2",
                            name: "B.背面",
                            answer: false
                        }
                    ],
                    className: "card-one",
                    // isShow: true,
                    // isFinish: false
                },
                {
                    cen: "2.陆地资源卫星是以勘测什么为主的卫星？",
                    select: [
                        {
                            code: "1",
                            name: "A.森林",
                            answer: false
                        },
                        {
                            code: "2",
                            name: "B.陆地",
                            answer: true
                        }
                    ],
                    className: "card-two",
                    // isShow: false
                },
                {
                    cen: "3.'一诺千金'指的是谁？",
                    select: [
                        {
                            code: "1",
                            name: "A.季布",
                            answer: true
                        },
                        {
                            code: "2",
                            name: "B.吕布",
                            answer: false
                        }
                    ],
                    className: "card-three",
                    // isShow: false
                }
                ],
                level: 1, // 第几关：1 2 3
                grade: "初级" // 难易程度：初级 中级 高级
            },
            num: 0, // 正确个数
            energy: 0, // 能量
            isModel: false, // 弹窗显示隐藏
            isModelBut: false, // 按钮显示影藏
            imgsrc: '',
            type: 0,
        }
    },
    methods: {
        // 提示
        toast(flag,index) {
            if (flag) {
                this.$toast(
                    {
                        type: 'success',
                        message: '恭喜！',
                        duration: 1000
                    }
                );
            } else {
                this.$toast(
                    {
                        type: 'fail',
                        message: '很遗憾！',
                        duration: 1000
                    }
                );
            }
        },
        // 点击but
        getSelect(item,ite,index) {
            // 未完成，进行答题
            if (!item.isFinish) {
                // 正确，加能量；错误，不加
                if (ite.answer) {
                    this.toast(ite.answer,index);
                    this.num++;
                    this.energy = this.num+this.energy*2;
                } else {
                    this.toast(ite.answer,index);
                }
                // 点击后,拼接list
                this.getNewDatas(index);
            }
        },
        // 点击后,拼接list
        getNewDatas(index) {
            // 完成一个，显示完成标志，显示下一个问题
            this.datas.list.map(
                () => {
                    this.datas.list[index].isFinish=true;
                    // console.log(index,this.datas.list.length);
                    if (this.datas.list.length-1 !== index) {
                        this.datas.list[index+1].isShow=true;
                    }
                }
            );
            console.log(this.datas);
            // 所有都打完进行汇总
            if (this.datas.list.length-1 === index) {
                setTimeout(()=>{
                    this.isModel = true;
                    this.isModelBut = true;
                },1500);
            }
        },
        // 拼接list
        getDatas() {
            this.datas.list.map(
                item => {
                    item.isShow = item.className === "card-one" ? true:false;
                    item.isFinish = false;
                }
            )
            // 深度克隆
            this.datas = JSON.stringify(this.datas);
            this.datas = JSON.parse(this.datas);
            // console.log(this.datas)
        },
        // 下一关
        toNext() {
            // 重置数据
            this.toReset();
            // 新增数据
            this.addDatas();
        },
        // 重置数据
        toReset() {
            this.datas = {} // 数据
            this.num = 0, // 正确个数
            this.energy = 0, // 能量
            this.isModel = false, // 面板
            this.isModelBut = false // 下一关
        },
        // 新增数据
        addDatas() {
            this.datas={
                list: [
                {
                    cen: "1.地球是个不发光又不透明的球体，同一瞬间没被太阳照到的地球是?",
                    select: [
                        {
                            code: "1",
                            name: "A.黑夜",
                            answer: true
                        },
                        {
                            code: "2",
                            name: "B.背面",
                            answer: false
                        }
                    ],
                    className: "card-one",
                    // isShow: true,
                    // isFinish: false
                },
                {
                    cen: "2.陆地资源卫星是以勘测什么为主的卫星？",
                    select: [
                        {
                            code: "1",
                            name: "A.森林",
                            answer: false
                        },
                        {
                            code: "2",
                            name: "B.陆地",
                            answer: true
                        }
                    ],
                    className: "card-two",
                    // isShow: false
                },
                {
                    cen: "3.'一诺千金'指的是谁？",
                    select: [
                        {
                            code: "1",
                            name: "A.季布",
                            answer: true
                        },
                        {
                            code: "2",
                            name: "B.吕布",
                            answer: false
                        }
                    ],
                    className: "card-three",
                    // isShow: false
                }
                ],
                level: 2, // 第几关：1 2 3
                grade: "中级" // 难易程度：初级 中级 高级
            },
            this.getDatas();
        },
        // // 横屏和竖屏下的展示不一样的样式
        // greenType() {
        //     this.initCanvas(window.orientation);
        // },
        // // 初始化画布
        // initCanvas(type) {
        //     let contentBox=document.getElementById('content');
        //     let oCanvas = document.getElementById('signCanvas');
        //     oCanvas.width = contentBox.clientWidth;
        //     oCanvas.height = contentBox.clientHeight;
        //     // 获取画布绘图环境
        //     let ctx = oCanvas.getContext('2d');
        //     // 设置画布绘图背景色
        //     ctx.fillStyle = "#ccc";
        //     // // 使用fillStyle属性所指的颜色.渐变或模式来填充指定的矩形
        //     ctx.fillRect(0, 0, oCanvas.width, oCanvas.height);
        //     // 设置填充文本的字体样式
        //     ctx.fillStyle = "#fff"
        //     ctx.font = "30px Arial"
        //     // 根据设置的样式填充文字
        //     ctx.fillText('刮一刮', oCanvas.width/2-40,oCanvas.height/2);
            
        //     /*  画布填充图片
        //     let img = new Image();
        //     img.src = require('../img/test1.jpg');
        //     img.width= oCanvas.width;
        //     img.height = oCanvas.height;
        //     img.οnlοad=function(e){
        //         let pattern=ctx.createPattern(img,'no-repeat')
        //         ctx.fillStyle=pattern;
        //         ctx.fillRect(0,0,oCanvas.width,oCanvas.height)
        //     }*/

        //     //手指接触屏幕
        //     oCanvas.addEventListener('touchstart',function(ev){
        //         ev=ev||event;
        //         let touchC=ev.changedTouches[0];//拿第一根手指
        //         //获取手指接触屏幕的坐标 clientX手指相对于屏幕左侧坐标，clientY手指相对于屏幕顶部坐标
        //         //offsetLeft相对于定位为absolute的父元素的左侧坐标，offsetTop相对于定位为absolute的父元素的顶部坐标， 
        //         // 逐级向上找absolute父级，如果没有这样的父级以body为准
        //         let x=touchC.clientX-contentBox.offsetLeft; //获取到手指相对于contentBox左侧的坐标
        //         let y=touchC.clientY-contentBox.offsetTop;  //获取到手指相对于contentBox顶部的坐标

        //         ctx.save(); // 保存当前环境的状态。
        //         //只留下目标超过源的部分
        //         ctx.globalCompositeOperation='destination-out'
        //         // 设置划线的大小
        //         ctx.lineWidth=30;
        //         // lineCap 属性设置或返回线条末端线帽的样式。 butt	默认。向线条的每个末端添加平直的边缘。
        //         ctx.lineCap="butt";
        //         // lineJoin 属性设置或返回所创建边角的类型，当两条线交汇时。miter	默认。创建尖角。
        //         ctx.lineJoin="miter";
        //         // miterLimit 属性设置或返回最大斜接长度。斜接长度指的是在两条线交汇处内角和外角之间的距离。
        //         ctx.miterLimit= 5;
        //         // 起始一条路径，或重置当前路径。
        //         ctx.beginPath();
        //         //只能画线，用线模拟圆
        //         ctx.moveTo(x,y);
        //         ctx.lineTo(x+1,y+1);
        //         // 绘制已定义的路径。
        //         ctx.stroke();
        //         // 返回之前保存过的路径状态和属性。
        //         ctx.restore();
        //     });
            
        //     oCanvas.addEventListener('touchmove',function(ev){
        //         ev=ev||event;
        //         let touchC=ev.changedTouches[0];//拿第一根手指
        //         //获取手指接触屏幕的坐标
        //         let x=touchC.clientX-contentBox.offsetLeft;
        //         let y=touchC.clientY-contentBox.offsetTop;

        //         ctx.save();
        //         ctx.globalCompositeOperation='destination-out'
        //         ctx.lineWidth=30;
        //         ctx.lineCap="butt";
        //         ctx.lineJoin="miter";
        //         ctx.miterLimit= 5;
        //         ctx.lineTo(x+1,y+1);
        //         ctx.stroke();
        //         ctx.restore();
        //     });

        //     let flag=0;
        //     //手指离开屏幕
        //     oCanvas.addEventListener('touchend',function(){
        //         let imgdatga=ctx.getImageData(0,0,oCanvas.width,oCanvas.height);
        //         //拿到所有的像素
        //         let allPx=imgdatga.width*imgdatga.height;
        //         console.log(imgdatga);
        //         for(let i=0;i<allPx;i++){
        //             if(imgdatga.data[4*i+3]==0){
        //                 flag++;
        //             }
        //         }
        //         //如果划开的像素大于整个canvas的一半，就让canvas的透明度为0，让图片显示出来
        //         // if(flag>=allPx/2){
        //         //     oCanvas.style.opacity=0;
        //         // }
        //         //过渡执行完，透明度为0，就把canvas在页面上删除
        //         oCanvas.addEventListener('transitionend',function(){
        //             this.remove();//删除canvas
        //         });
        //     });

        // }, 
    },
    created() {
        this.getDatas();
    },
    mounted(){
        // 画布
        // this.greenType();
    },
    beforeDestroy(){
    }
  }
</script>

<style scoped lang="scss">
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
    .game-main{
        color: #000;
        padding: 0.8rem;
        font-size: 0.8rem;
        >div:not(:first-child) {
            >div{
                margin: 0.8rem 0 0 0;
            }
        } 
        .card-main{
            position: relative;
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
                .van-button {
                    cursor: pointer;
                    height: 1.8rem;
                    border-radius: 0.2rem;
                    box-shadow: 1px 1px 3px 0px #70a7f9;
                }
                .van-button--normal {
                    padding: 0 2rem;
                }
            }
            .finish {
                position: absolute;
                top: 4px;
                right: 4px;
                width: 2rem;
                height: 2rem;
                background: #c9c2c2;
                color: #f00;
                border-radius: 50%;
                line-height: 2rem;
                text-align: center;
                opacity: .8;
                font-size: .7rem;
                font-weight: 600;
            }
        }
        .model-look {
            margin: 1rem 0 0;
            .van-button {
                cursor: pointer;
                height: 1.8rem;
                border-radius: .2rem;
                width: 100%;
                box-shadow: 1px 1px 3px 0px #70a7f9;
            }
            .next {
                margin: 0.8rem 0 0;
            }
        }
        .model-main {
            padding: .8rem;
            .model-img {
                width: 100%;
                height: 10rem;
                margin: 1rem 0;
                display: flex;
                align-items: center;
                justify-content: center;
                img {
                    width: 100%;
                    height: 100%;
                    display: block;
                    object-fit: cover;
                    border-radius: 0.2rem;
                }
            }
            .van-button {
                height: 1.8rem;
                border-radius: .2rem;
                width: 100%;
                box-shadow: 1px 1px 3px 0px #70a7f9;
            }
        }
    }
    /* 淡出淡入 */
    .card-one {
        animation: anim 1.5s;
    }
    @keyframes anim { 
        0% {opacity: 0;}
        50% {opacity: 0.5;}
        100%{opacity:1;}
    }
    /* 左边进入 */
    .card-two {
        animation: bounceInLeft 1s cubic-bezier(0.215, 0.610, 0.355, 1.000)
    }
    @keyframes bounceInLeft {
        0% {
            opacity: 0;
            transform: translate3d(-3000px, 0, 0);
        }
        60% {
            opacity: 1;
            transform: translate3d(25px, 0, 0);
        }
        75% {
            transform: translate3d(-10px, 0, 0);
        }
        90% {
            transform: translate3d(5px, 0, 0);
        }
        100% {
            transform: none;
        }
    }
    /* 右边进入 */
    .card-three {
        animation-duration: 1.5s !important;
        -webkit-animation-duration: 1.5s !important;
        animation-fill-mode: both !important;
        -webkit-animation-fill-mode: both !important;
        animation-name: fadeInRight;
        -webkit-animation: fadeInRight;
    }
    /*动画-start*/
    .animated {
        animation-duration: 1.5s !important;
        -webkit-animation-duration: 1.5s !important;
        animation-fill-mode: both !important;
        -webkit-animation-fill-mode: both !important;
    }
    .animated02 {
        animation-duration: 1s !important;
        -webkit-animation-duration: 1s !important;
        animation-fill-mode: both !important;
        -webkit-animation-fill-mode: both !important;
    }
    /*逐渐显示*/
    .toShow {
        position: absolute;
        animation: toShow 1.5s 0.5s;
        animation: toShow 1.5s 0.5s;
        animation-fill-mode: both !important;
        -webkit-animation-fill-mode: both !important;
    }
    /* 放大效果*/
    .enlarge {
        animation-name: enlarge;
        -webkit-animation: enlarge;
    }
    /*从上到下进入*/
    .fadeInDown {
        animation-name: fadeInDown;
        -webkit-animation: fadeInDown;
    }
    /*从下到上进入*/
    .fadeInUpLeft {
        animation-name: fadeInUpLeft;
        -webkit-animation: fadeInUpLeft;
    }
    /*从右到左进入*/
    .fadeInRight {
        animation-name: fadeInRight;
        -webkit-animation: fadeInRight;
    }
    /*从左到右进入*/
    .fadeInLeft {
        animation-name: fadeInLeft;
        -webkit-animation: fadeInLeft;
    }
    /*中心旋转*/
    .coreRotate {
        animation-name: coreRotate;
        -webkit-animation-name: coreRotate;
    }

    @keyframes toShow {
        0% {opacity: 0;}
        100% {opacity: 1;}
    }
    @-webkit-keyframes toShow {
        0% {opacity: 0;}
        100% {opacity: 1;}
    }

    @keyframes enlarge
    {
        from {
            opacity: 0;
            -ms-transform: scale(0.1,0.1); /* IE 9 */
            -webkit-transform: scale(0.1,0.1); /* Safari */
            transform: scale(0.1,0.1); /* 标准语法 */
        }
        to {
            opacity:1;
            -webkit-transform:scale(1,1);
            transform:scale(1,1);
        }
    }
    
    @-webkit-keyframes enlarge /* Safari 与 Chrome */
    {
        from {
            opacity:0;
            -ms-transform: scale(0.1,0.1); /* IE 9 */
            -webkit-transform: scale(0.1,0.1); /* Safari */
            transform: scale(0.1,0.1); /* 标准语法 */
        }
        to {
            opacity:1;
            -webkit-transform:scale(1,1);
            transform:scale(1,1);
        }
    }

    /*从上到下*/
    @keyframes fadeInDown
    {
        from {
            opacity: 0;
            -webkit-transform: translate(0,-1000px); /* Safari */
            transform: stranslate(0,-1000px); /* 标准语法 */
        }
        to {
            opacity:1;
            -webkit-transform: translate(0,10px); /* Safari */
            transform: stranslate(0,10px); /* 标准语法 */
        }
    }
    
    @-webkit-keyframes fadeInDown /* Safari 与 Chrome */
    {
        from {
            opacity:0;
            -webkit-transform: translate(0,-1000px); /* Safari */
            transform: stranslate(0,-1000px); /* 标准语法 */
        }
        to {
            opacity:1;
            -webkit-transform: translate(0,10px); /* Safari */
            transform: stranslate(0,10px); /* 标准语法 */
        }
    }
    /*从左下到右上*/
    @keyframes fadeInUpLeft
    {
        from {
            opacity: 0;
            -webkit-transform: translate(-1000px,1000px); /* Safari */
            transform: stranslate(-1000px,1000px); /* 标准语法 */
        }
        to {
            opacity:1;
            -webkit-transform: translate(0,10px); /* Safari */
            transform: stranslate(0,10px); /* 标准语法 */
        }
    }
    
    @-webkit-keyframes fadeInUpLeft /* Safari 与 Chrome */
    {
        from {
            opacity:0;
            -webkit-transform: translate(-1000px,1000px); /* Safari */
            transform: stranslate(-1000px,1000px); /* 标准语法 */
        }
        to {
            opacity:1;
            -webkit-transform: translate(0,10px); /* Safari */
            transform: stranslate(0,10px); /* 标准语法 */
        }
    }
    /*从右到左进入*/
    @keyframes fadeInRight
    {
        from {
            opacity: 0;
            -webkit-transform: translate(1000px,0); 
            transform: stranslate(1000px,0); 
        }
        to {
            opacity:1;
            -webkit-transform: translate(0px,0); 
            transform: stranslate(0px,0); 
        }
    }
    
    @-webkit-keyframes fadeInRight 
    {
        from {
            opacity:0;
        -webkit-transform: translate(1000px,0); 
            transform: stranslate(1000px,0); 
        }
        to {
            opacity:1;
            -webkit-transform: translate(10px,0); 
            transform: stranslate(10px,0); 
        }
    }
    /*从左到右进入*/
    @keyframes fadeInLeft
    {
        from {
            opacity: 0;
            -webkit-transform: translate(-1000px,0); 
            transform: stranslate(-1000px,0); 
        }
        to {
            opacity:1;
            -webkit-transform: translate(10px,0); 
            transform: stranslate(10px,0); 
        }
    }
    
    @-webkit-keyframes fadeInLeft 
    {
        from {
            opacity:0;
        -webkit-transform: translate(-1000px,0); 
            transform: stranslate(-1000px,0); 
        }
        to {
            opacity:1;
            -webkit-transform: translate(10px,0); 
            transform: stranslate(10px,0); 
        }
    }

    /*绕中心旋转*/
    @keyframes coreRotate {
        5% {
            transform:rotate(5deg);
            -ms-transform:rotate(5deg); /* IE 9 */
            -webkit-transform:rotate(5deg); /* Safari and Chrome */
        }
        30% {
            transform:rotate(-5deg);
            -ms-transform:rotate(-5deg); 
            -webkit-transform:rotate(-5deg); 
        }
        60% {
            transform:rotate(5deg);
            -ms-transform:rotate(5deg); 
            -webkit-transform:rotate(5deg);
        }
        90% {
            transform:rotate(-5deg);
            -ms-transform:rotate(-5deg); 
            -webkit-transform:rotate(-5deg); 
        }
    }
    @-webkit-keyframes coreRotate {
        5% {
            transform:rotate(5deg);
            -ms-transform:rotate(5deg); /* IE 9 */
            -webkit-transform:rotate(5deg); /* Safari and Chrome */
        }
        30% {
            transform:rotate(-5deg);
            -ms-transform:rotate(-5deg); 
            -webkit-transform:rotate(-5deg); 
        }
        60% {
            transform:rotate(5deg);
            -ms-transform:rotate(5deg); 
            -webkit-transform:rotate(5deg);
        }
        90% {
            transform:rotate(-5deg);
            -ms-transform:rotate(-5deg); 
            -webkit-transform:rotate(-5deg); 
        }
    }
    /*动画-end*/
</style>
