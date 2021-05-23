<template>
  <div class="model-ye-main">
    <!-- 循环 组件 -->
    <div v-for="(item, index) in compons" :key="index">
        <component :is="item"/>
    </div>
  </div>
</template>

<script>
  import Yelingxi001 from "../components/yelingxi/001"
  import Suwan001 from "../components/suwan/001"
  export default {
    components: {
        Yelingxi001,
        Suwan001
    },
    data () {
      return {
        compons: [] // 组件 参数
      }
    },
    methods: {
        // 接受传过来的参数，判断显示的组件
        getCompontent() {
            console.log("接受组件",this.$route.params);
            if (this.$route.params.data) {
              this.compons = this.$route.params.data.compons;
            } else {
              this.$router.go(-1);//返回上一层
            }
        }
    },
    created() {
        // 接收组件
        this.getCompontent();
    }
  }
</script>

<style scoped lang="scss">
  .model-ye-main{
      color: #fff;
  }
</style>