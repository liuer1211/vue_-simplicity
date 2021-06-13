<template>
  <div class="user-main">
    <!-- 介绍 -->
    <div class="user-main-up">
      <div class="user-up-f1">
        <div class="user-up-l"></div>
        <img class="user-up-img" src="https://cn.bing.com/th?id=OHR.NarniaForest_ZH-CN8466850438_UHD.jpg&rf=LaDigue_UHD.jpg&pid=hp&w=2880&h=1620&rs=1&c=4"/>
        <div @click="getLeftMenu()" class="user-up-li"></div>
        <div class="user-grade">V<span>121</span></div>
      </div>
      <div class="user-up-f2">早上好！Jack</div>
      <div class="user-up-f3">
        <span>上海 浦东</span>/
        <span>晴</span>/
        <span>{{week}}</span>/
        <span>{{year}}</span>
      </div>
    </div>
    <!-- 菜单 -->
    <!-- <div class="user-manu">
      <van-grid>
        <van-grid-item icon="like-o" text="关注" @click="toPage"/>
        <van-grid-item icon="fire-o" text="最热" @click="toPage"/>
        <van-grid-item icon="gift-o" text="礼品" @click="toPage"/>
        <van-grid-item icon="service-o" text="听书" @click="toPage"/>
      </van-grid>
    </div> -->
    <!-- 计划 -->
    <div class="user-main-bot">
      <div class="user-plan-tit">今日计划</div>
      <div class="user-plan-cen" v-for="(item,index) in list" :key="index">
        <div class="user-plan-date">{{item.year}}</div>
        <div class="user-main-plan">
          <div class="user-plan-model" v-for="(it,index) in item.infoList" :key="index">
            <div class="user-plan-model-l">
              <span>{{it.date}}</span>
              <div><div>...........................</div></div>
            </div>
            <div class="user-plan-model-r">
              <h2>{{it.title}}</h2>
              <p>{{it.cen}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 添加 -->
    <div class="user-plan-add">
      <div @click="showPopup">
        <van-icon name="plus" />
      </div>
    </div>
    <!-- 添加面板 -->
    <van-popup v-model="show" closeable :close-on-click-overlay="false">
      <div class="user-pop-main">
        <div><van-field v-model="title" placeholder="请输入标题,最多10个字" maxlength="10"/></div>
        <div><van-field v-model="cen" placeholder="请输入内容,最多25个字" maxlength="25"/></div>
        <div @click="inputClick"><van-field v-model="date" placeholder="请选择日期" readonly /></div>
        <van-popup safe-area-inset-bottom get-container="body" v-model="dateShow" position="bottom">
          <van-datetime-picker @confirm="dateConfirm" @cancel="dateCancel" v-model="currentTime" type="time" title="选择时间" :min-hour="1" :max-hour="24"/>
        </van-popup>
        <div><van-button @click="toSubmit()" round block type="info" native-type="submit">提交</van-button></div>
      </div>
    </van-popup>
    <!-- 左侧 -->
    <van-popup v-model="leftShow" closeable :close-on-click-overlay="false" position="left" :style="{ width: '45%',height: '100%' }">
      <div class="model-main">
        <van-cell-group>
          <van-cell title="能量值" value="100"/>
        </van-cell-group>
        <van-cell-group>
          <van-cell title="我的成就"/>
          <van-cell title="我的战绩"/>
        </van-cell-group>
      </div>
    </van-popup>
  </div>
</template>

<script>
  import {dateUtil} from '@/assets/js/util'
  import { Toast } from 'vant';
  export default {
    data () {
      return {
        show: false,
        currentTime: '',
        dateShow: false,
        title: '',
        cen: '',
        date: '',
        year: '',
        week: '',
        leftShow: false,
        list: [
          {
            year: '2021-01-04',
            infoList: [
              {title:'晨跑',cen:'锻炼身体',date:'7:30'},
              {title:'起床',cen:'洗脸，刷牙，吃早餐',date:'6:30'}
            ]
          },
          {
            year: '2021-01-03',
            infoList: [
              {title:'约会',cen:'火锅，teamLab无界美术馆，看星星',date:'11:30'},
              {title:'冥想',cen:'真正的大师永远怀揣着一颗学徒的心',date:'06:30'},
            ]
          }
        ]
      }
    },
    methods: {
      // 弹窗
      showPopup() {
        this.show = true;
      },
      // 日期
      inputClick() {
        this.dateShow = true;
      },
      // 确认
      dateConfirm(value) {
        // 判断时间
        let flag = this.toComTime(value)
        if (!flag) {
          this.getToast('必须大于当前时间')
          return
        }
        this.date = value
        this.dateShow = false;
      },
      //  取消
      dateCancel(){
        this.dateShow = false;
      },
      // 提交
      toSubmit() {
        // 必填校验
        if (this.title === '') {
          this.getToast('标题必填')
          return
        }
        if (this.cen === '') {
          this.getToast('内容必填')
          return
        }
        if (this.date === '') {
          this.getToast('时间必填')
          return
        }
        // 拼接数据
        this.toAddList()
        this.show = false;
        // 清空数据
        this.title=''
        this.cen=''
        this.date=''
      },
      // 拼接数据 计划list
      toAddList() {
        let obj = {
          title: this.title,
          cen: this.cen,
          date: this.date
        }
        // 获取第一个数组，判断年月日是否为当天 - 是，在这个里加；不是，新建
        // 每次的数据加到第一个数组List中 的infoList的首位
        let list = this.list
        if (list[0].year !== this.year) {
          let info = {
            year: this.year,
            infoList: []
          }
          list.unshift(info);
        }
        list[0].infoList.unshift(obj)
        console.log('1-', list[0].infoList)
        // 冒泡排序 当天的 数组
        let newList = this.getNewList(list[0].infoList)
        console.log('2-', newList)
        list[0].infoList = newList
        this.list = list
        console.log('3-',this.list)
      },
      // 冒泡排序
      getNewList(list) {
        for (let i=0;i<list.length-1;i++) {
          for (let j=0;j<list.length-1-i;j++) {
            // 时间转换，判断
            let a = dateUtil.toChangeStr(list[j].date)
            let b = dateUtil.toChangeStr(list[j+1].date)
            if ( parseInt(a) < parseInt(b) ) {
              let temp = list[i];
              list[j] = list[j + 1];
              list[j + 1] = temp;
            }
          }
        }
        return list
        // //思路：先比较一轮一次，然后用for循环比较一轮多次，然后再加for循环比较多轮多次
        // //从大到小排序
        // var array=[10,20,9,8,79,65,100];
        // //比较轮数
        // for ( var i=0;i<array.length-1;i++){
        //   //每轮比较次数，次数=长度-1-此时的轮数
        //   for (var j=0;j<array.length-1-i;j++) {
        //     if (array[j] > array[j + 1]) {
        //       var temp = array[i];
        //       array[j] = array[j + 1];
        //       array[j + 1] = temp;
        //     } //end if
        //   }//end for 次数
        // } //end for 轮数
        // console.log(array);
      },
      // 判断时间
      getTime(value,hour,minu) {
        // 获取转换后的字符串  只转换 时
        let a = dateUtil.toChangeStr(value)
        let b = dateUtil.toChangeStr(hour)
        // 分 判断,一位，前+0
        if (minu.toString().length < 2){
          minu = '0'+minu.toString()
        }
        let one = parseInt(a)
        let two = parseInt(b+minu.toString())
        // console.log(a,b,minu,one,two)
        // 判断 a = b+c  0; a > b+c  1; a < b+c  -1;  选 - 当前
        if (one === two) {
          return 0;
        } else if(one > two) {
          return 1;
        } else if(one < two) {
          return -1;
        } else {
          return null;
        }
      },
      // 获取时间 判断时间
      toComTime(value) {
        let now = new Date();
        let year = now.getFullYear(); //得到年份
        let month = now.getMonth();//得到月份
        let date = now.getDate();//得到日期
        let day = now.getDay();//得到周几
        let hour = now.getHours();//得到小时
        let minu = now.getMinutes();//得到分钟
        let sec = now.getSeconds();//得到秒
        let MS = now.getMilliseconds();//获取毫秒
        let flag = this.getTime(value,hour,minu)
        if (flag === 0) {
          // 相等
          return true;
        } else if(flag === 1) {
          // 选>当前
          return true;
        } else if(flag === -1) {
          // 选<当前
          return false;
        } else {
          // 其他
          return false;
        }
      },
      // toast
      getToast(mes='', dur='1500') {
        Toast({
          message: mes,
          duration: dur
        });
      },
      // 时间 日期
      getDateTime() {
        let now = new Date();
        let day = now.getDay();//得到周几
        this.year = dateUtil.formatDateStr(now)
        switch (day) {
          case 1:
            this.week = '星期一'
            return this.week
          case 2:
            this.week = '星期二'
            return this.week
          case 3:
            this.week = '星期三'
            return this.week
          case 4:
            this.week = '星期四'
            return this.week
          case 5:
            this.week = '星期五'
            return this.week
          case 6:
            this.week = '星期六'
            return this.week
          case 7:
            this.week = '星期日'
            return this.week
          default:
            return;
        }
      },
      // 左侧菜单
      getLeftMenu(){
        this.leftShow = true
      },
      // 左侧菜单栏
      toPage() {
        this.$router.push({path:"/dropDown"});
      }
    },
    mounted(){
      this.getDateTime()
    }
  }
</script>

<style scoped lang="scss">
  .user-main{
    color: #ffffff;
    .user-main-up{
      padding: 0.6rem 0.6rem 1rem;
      background: #353535;
      border-radius: 0 0 1.2rem 1.2rem;
      .user-up-f1{
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        position: relative;
        .user-up-l {
          height: 2.5rem;
        }
        .user-up-img{
          position: absolute;
          width: 2.5rem;
          height: 2.5rem;
          object-fit: cover;
          border-radius: 50%;
          z-index: 99;
        }
        .user-up-li{
          width: 1.2rem;
          background-color: #fff;
          border-top: 0.15rem solid #fff;
          border-bottom: 0.15rem solid #fff;
          background-clip: content-box;
          height: 0.15rem;
          padding: 0.3rem 0 0.3rem 0.3rem;
        }
        .user-grade {
          position: absolute;
          background: #ed8d48;
          padding: .1rem .5rem .1rem 1.3rem;
          font-size: .7rem;
          bottom: 0;
          left: 1.3rem;
          border-top-left-radius: 0.2rem;
          border-top-right-radius: 0.6rem;
          border-bottom-right-radius: 0.6rem;
          border-bottom-left-radius: 0.2rem;
          span {
            font-size: .6rem;
          }
        }
      }
      .user-up-f2{
        font-size: 1rem;
        margin: 1.5rem 0 0.8rem;
      }
      .user-up-f3{
        margin: 0 0 0.2rem;
        font-size: 0.7rem;
        span{
          margin: 0 0.2rem;
        }
      }
    }
    .user-manu {
        padding: .8rem;
        color: #ed8d48;
        .van-grid {
          border-radius: .2rem;
          overflow: hidden;
          cursor: pointer;
          /deep/ .van-grid-item__text {
            color: #ed8d48;
          }
        }
    }
    .user-main-bot{
      padding: 0.8rem;
      .user-plan-tit{
        padding: 0 0 0.8rem;
      }
      .user-plan-cen:not(:last-child){
        padding: 0 0 0.5rem;
      }
      .user-plan-date{
        padding: 0 0 0.5rem;
        font-size: 0.9rem;
        font-weight: 600;
      }
      .user-main-plan{
        .user-plan-model{
          display: flex;
          &:not(:last-child){
            margin: 0 0 1.2rem;
            .user-plan-model-l{
              >div{
                >div{
                  display: block;
                }
              }
            }
          }
          .user-plan-model-l{
            -webkit-box-flex: 1;
            -ms-flex: 1;
            flex: 1;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            align-items: center;
            justify-content: center;
            >span{
              font-size: 0.7rem;
            }
            >div{
              width: 0.3rem;
              height: 0.3rem;
              background: #378aff;
              font-size: 0.28rem;
              border-radius: 50%;
              margin: 0 0 0 0.5rem;
              position: relative;
              >div{
                color: #d8d8d8;
                position: absolute;
                top: 0.4rem;
                -webkit-writing-mode: tb-rl;
                -ms-writing-mode: tb-rl;
                writing-mode: tb-rl;
                display: none;
              }
            }
          }
          .user-plan-model-r{
            -webkit-box-flex: 3;
            -ms-flex: 3;
            flex: 3;
            background: #3a3a3a;
            border-radius: 0.3rem;
            padding: 0.2rem 0;
            >h2{
              margin: 0;
              padding: 0.5rem 0.5rem 0 0.5rem;
              font-size: 0.8rem;
            }
            >p{
              margin: 0;
              padding: 0.5rem;
              font-size: 0.7rem;
            }
          }
        }
      }
    }
    .user-plan-add{
      width: 1.3rem;
      height: 1.3rem;
      border-radius: 50%;
      background: #747474;
      position: fixed;
      bottom: 1rem;
      right: 1rem;
      /*box-shadow: 0 0 0.2rem #fffafac7;*/
      display: flex;
      align-items: center;
      justify-content: center;
      >div{
        font-size: .7rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
          width: 1.1rem;
          height: 1.1rem;
          border-radius: 50%;
        }
      }
    }
    .user-pop-main{
      color: #000;
      margin: 1.5rem 0 0.5rem;
      padding: 0.5rem;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      >div{
        cursor: pointer;
      }
    }
    .model-main {
      margin-top: 2rem;
      .van-cell {
        cursor: pointer;
        background: #ed8d48;
        color: #fff;
      }
      .van-cell__value {
          color: #efff00;
      }
    }
    /deep/ .van-popup{
      border-radius: 0.3rem;
      width: 80%;
    }
    /deep/ .van-popup__close-icon--top-right{
      top: 0.2rem;
      right: 0.2rem;
    }
    /deep/ .van-popup__close-icon{
      font-size: 1rem;
    }
    /deep/ .van-button{
      height: 2rem;
      margin: 15px 0 0;
    }
    /deep/ .van-button--round{
      border-radius: 0.3rem;
    }
    /deep/ .van-button--info {
      color: #fff;
      background-color: #378aff;
    }
    /deep/ .van-grid {
      border: .01rem solid #eee;
    }
    /deep/ .van-grid-item__content{
      background-color: #100f0f;
    }
  }
</style>
