<template>
  <div class="header-main">
    <img class="header-logo" src="../../assets/img/common/1.png"/>
    <div class="header-login">登录</div>
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
    },
    watch: {
    }
  }
</script>

<style scoped lang="scss">
  .header-main{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 0.6rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background: #4b55ce;
    position: fixed;
    top: 0;
    width: 100%;
    .header-logo{
      width: 4rem;
      height: 1.5rem;
    }
    .header-login{
      color: #fff;
      font-size: 0.8rem;
    }
  }
</style>
