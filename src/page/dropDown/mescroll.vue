<template>
  <div class="dropDown-main">
    <scroll ref="scroll"
            :data="listData"
            :top="0"
            :bottom="0"
            :triggerHeight="20"
            @onScroll="onScroll"
            @pullingUp="onScrollBottom"
            @pullingDown="onPullingDown">
      <div class="list">
        <div class="item" v-for="(item, index) in listData" :key="index">
          <p>{{item.title}}</p>
          <p>{{item.desc}}</p>
          <img :src="item.img"/>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
  import Scroll from 'vue-scroll-m'
  let json = [{
    title: '我是title1',
    desc: '这是一段测试文字',
    img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg'
  },{
    title: '我是title2',
    desc: '这是一段测试文字',
    img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg'
  },{
    title: '我是title3',
    desc: '这是一段测试文字',
    img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg'
  },{
    title: '我是title4',
    desc: '这是一段测试文字',
    img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg'
  }]
  export default {
    components: {
      Scroll
    },
    data() {
      return {
        listData: json,
        num: 1
      }
    },
    mounted() {
      // console.log(Scroll);
    },
    methods: {
      onScroll(e) {
//      console.log(e.target.scrollTop)
      },
      // 下拉
      onPullingDown() {
        setTimeout(() => {
          this.listData = this.listData.slice(0, 3)
          this.listData.unshift({
            title: `我是更新title${this.num++}`,
            desc: '这是一段测试文字',
            img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg'
          })
        }, 500)
      },
      // 更多
      onScrollBottom(e) {
        setTimeout(() => {
          this.listData = this.listData.concat(json)
        }, 500)
      },
      // 返回顶部
      goTop() {
        this.$refs.scroll.scrollTo(0, 0)
      }
    }
  }
</script>

<style scoped lang="scss">
  .dropDown-main{
    color:#fff;
    p{
      margin: 0;
    }
    /deep/ .scroll-wrapper .scroll-content .pulldown{
      background-color: initial;
    }
    /deep/ .scroll-wrapper .scroll-content .pullup{
      background-color: initial;
    }
  }
</style>


