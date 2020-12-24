<template>
  <div class="dropDown-main">
    <div class="drop-main">
      <div class="drop-main-flex">
        <div class="drop-model">
          <div class="drop-model-p">
            <div>123</div>
            <div>时间：  地点：  人物：  事件：</div>
          </div>
        </div>
        <div class="drop-model">
          <div class="drop-model-p">
            <div>123</div>
            <div>时间：  地点：  人物：  事件：</div>
          </div>
        </div>
        <div class="drop-model">
          <div class="drop-model-p">
            <div>123</div>
            <div>时间：  地点：  人物：  事件：</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
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
  .dropDown-main{
    color: #ffffff;
    .drop-main{
      padding: 0.8rem 0 0 0.8rem;
      box-sizing: border-box;
      .drop-main-flex{
        display: flex;
        flex-wrap: wrap;
        .drop-model{
          width: 50%;
          padding: 0 0.8rem 0.8rem 0;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          .drop-model-p{
            background: #77757573;
            border-radius: 0.3rem;
            overflow: hidden;
            >div:nth-child(1){
              background: #545653;
            }
            >div:nth-child(2){
              padding: 0.3rem;
            }
          }
        }
      }
    }
  }
</style>
