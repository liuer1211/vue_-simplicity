<template>
  <div class="top-main">
    <Header></Header>
    <div class="top-cen">
      123
    </div>
  </div>
</template>

<script>
  import Header from '../../components/header/header'
  export default {
    components:{
      Header
    },
    data () {
      return {
      }
    },
    methods: {
    },
    mounted(){
    },
    beforeDestroy(){
    }
  }
</script>

<style scoped lang="scss">
  .top-main{
    .top-cen{
      color: #fff;
      margin: 2.7rem 0 0 0;
      height: 100rem;
    }
  }
</style>
