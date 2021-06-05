<template>
  <div class="header-main">
    <div></div>
    <div>{{tit}}</div>
    <div></div>
  </div>
</template>

<script>
  export default {
    props: {
      tit: {
        type: String,
        default: ""
      }
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
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background: #000;
    position: fixed;
    color: #fff;
    top: 0;
    width: 100%;
    height: 2.5rem;
    z-index: 999;
    border-bottom: .005rem solid #eee;
    font-size: .8rem;
  }
</style>
