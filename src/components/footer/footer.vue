<template>
  <div class="foot-main">
    <div class="foot-model one" :class="path === '/index' ? 'active' : ''" @click="toPage('1')"></div>
    <div class="foot-model two" :class="path === '/novel' ? 'active' : ''" @click="toPage('2')"></div>
    <div class="foot-model three" :class="path === '/poetry' ? 'active' : ''" @click="toPage('3')"></div>
    <div class="foot-model four" :class="path === '/song' ? 'active' : ''" @click="toPage('4')"></div>
    <div class="foot-model five" :class="path === '/user' ? 'active' : ''" @click="toPage('5')"></div>
  </div>
</template>

<script>
  export default {
    props: {
    },
    data () {
      return {
        path:"/index"
      }
    },
    mounted() {
      this.path=this.$route.path;
      console.log(this.path);
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
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 0.6rem;
    background: #000;
    border-top: .005rem solid #eee;
    .foot-model{
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      width: 1.5rem;
      height: 1.5rem;
      &.one {
        background: url('../../assets/img/index/h11.png');
        background-size: cover;
        background-repeat: no-repeat;
        &.active {
          background: url('../../assets/img/index/h1.png');
          background-size: cover;
          background-repeat: no-repeat;
        }
      }
      &.two {
        background: url('../../assets/img/index/h22.png');
        background-size: cover;
        background-repeat: no-repeat;
        &.active {
          background: url('../../assets/img/index/h2.png');
          background-size: cover;
          background-repeat: no-repeat;
        }
      }
      &.three {
        background: url('../../assets/img/index/h33.png');
        background-size: cover;
        background-repeat: no-repeat;
        &.active {
          background: url('../../assets/img/index/h3.png');
          background-size: cover;
          background-repeat: no-repeat;
        }
      }
      &.four {
        background: url('../../assets/img/index/h44.png');
        background-size: cover;
        background-repeat: no-repeat;
        &.active {
          background: url('../../assets/img/index/h4.png');
          background-size: cover;
          background-repeat: no-repeat;
        }
      }
      &.five {
        background: url('../../assets/img/index/h55.png');
        background-size: cover;
        background-repeat: no-repeat;
        &.active {
          background: url('../../assets/img/index/h5.png');
          background-size: cover;
          background-repeat: no-repeat;
        }
      }
      .foot-model-sp{
        font-size: 0.6rem;
      }
      img {
        width: 2rem;
        height: 2rem;
        object-fit: cover;
        display: block;
      }
    }
  }
</style>
