<template>
  <div class="foot-main">
    <div class="foot-model active" @click="toPage('1')">
      <span class="foot-model-sp">首页</span>
    </div>
    <div class="foot-model" @click="toPage('2')">
      <span class="foot-model-sp">小说</span>
    </div>
    <div class="foot-model" @click="toPage('3')">
      <span class="foot-model-sp">诗词</span>
    </div>
    <div class="foot-model" @click="toPage('4')">
      <span class="foot-model-sp">歌曲</span>
    </div>
    <div class="foot-model" @click="toPage('5')">
      <span class="foot-model-sp">我的</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
    },
    data () {
      return {
      }
    },
    computed:{
    },
    methods: {
      // 调转页面
      toPage(item) {
        switch (item) {
          case '1':
            if (this.$route.path === '/index') {
              return
            }
            this.$router.push({name:'index'})
            return
          case '2':
            if (this.$route.path === '/novel') {
              return
            }
            this.$router.push({name:'novel'})
            return
          case '3':
            if (this.$route.path === '/poetry') {
              return
            }
            this.$router.push({name:'poetry'})
            return
          case '4':
            if (this.$route.path === '/song') {
              return
            }
            this.$router.push({name:'song'})
            return
          case '5':
            if (this.$route.path === '/user') {
              return
            }
            this.$router.push({name:'user'})
            return
          default:
            return;
        }
      },
    },
    watch: {
    }
  }
</script>

<style scoped lang="scss">
  .foot-main{
    position: fixed;
    bottom: 0;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    padding: 0.6rem 0.8rem;
    background: #000;
    >div{
      padding: 0.3rem;
    }
    .foot-model{
      background: #cccccc;
      border-radius: 50%;
      color: #000;
      width: 1.2rem;
      height: 1.2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      &.active{
        background: #e0931f;
        font-weight: 600;
        color: #fff;
      }
      .foot-model-sp{
        font-size: 0.2rem;
      }
    }
  }
</style>
