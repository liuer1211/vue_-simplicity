<template>
  <div class="search-main" :class="seaActive">
    <el-input v-model="name" placeholder="请输入内容"></el-input>
    <el-button @click="toSearch()">搜索</el-button>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  export default {
    props: {
      seaActive: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        name: '' // 搜索内容
      }
    },
    computed:{
      ...mapState(['mainList'])
    },
    methods: {
      // vuex方法函数
      ...mapActions(['getMainList']),
      // 搜索
      toSearch() {
        this.getMainList()
      },
      // 过滤
      getMainListFilter() {
        let list = []
        for (let i=0; i<this.mainList.length; i++) {
          if (this.mainList[i].tit.indexOf(this.name)>-1 || this.mainList[i].cen.indexOf(this.name)>-1){
            list.push(this.mainList[i])
          }
        }
        this.$emit("getCodeChildren", list)
      }
    },
    watch: {
      mainList () {// 刷新流程--> 更新数据
        this.$nextTick(() => {
          this.getMainListFilter()
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .search-main{
    &.search-bg{
      background: #000000;
    }
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    padding: 1rem 1rem;
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
