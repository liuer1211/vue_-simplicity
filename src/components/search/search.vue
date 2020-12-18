<template>
  <div class="search-main">
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <el-button>搜索</el-button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        input:''
      }
    }
  }
</script>

<style scoped lang="scss">
  .search-main{
    /*position: fixed;*/
    /*top: 0;*/
    /*left: 0;*/
    width: 100%;
    padding: 0.6rem;
    box-sizing: border-box;
    display: flex;
    /deep/ .el-input__inner{
      background-color: #ffffff1c;
      color: #b6b9c0;
    }
    /deep/ .el-button{
      margin-left: 0.6rem;
      background: #ffffff1c;
      color: #b6b9c0;
    }
  }
</style>
