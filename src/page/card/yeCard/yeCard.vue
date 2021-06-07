<template>
  <div class="card-main">
    <div class="card-glory">荣耀墙</div>
    <!-- 荣耀列表 -->
    <van-grid :border="false" :column-num="3">
        <van-grid-item>
            <van-image src="https://img01.yzcdn.cn/vant/apple-1.jpg" />
            <span>炉火纯青</span>
        </van-grid-item>
        <van-grid-item>
            <van-image src="https://img01.yzcdn.cn/vant/apple-2.jpg" />
            <span>炉火纯青</span>
        </van-grid-item>
        <van-grid-item>
            <van-image src="https://img01.yzcdn.cn/vant/apple-3.jpg" />
            <span>炉火纯青</span>
        </van-grid-item>
        <van-grid-item>
            <van-image src="https://img01.yzcdn.cn/vant/apple-1.jpg" />
            <span>炉火纯青</span>
        </van-grid-item>
        <van-grid-item>
            <van-image src="https://img01.yzcdn.cn/vant/apple-2.jpg" />
            <span>炉火纯青</span>
        </van-grid-item>
        <van-grid-item>
            <van-image src="https://img01.yzcdn.cn/vant/apple-3.jpg" />
            <span>炉火纯青</span>
        </van-grid-item>
    </van-grid>
    <!-- 荣耀列表 -->
    <van-grid :border="false" :column-num="3">
        <van-grid-item>
            <van-image src="https://img01.yzcdn.cn/vant/apple-1.jpg" />
            <span>炉火纯青</span>
        </van-grid-item>
        <van-grid-item>
            <van-image src="https://img01.yzcdn.cn/vant/apple-2.jpg" />
            <span>炉火纯青</span>
        </van-grid-item>
        <van-grid-item>
            <van-image src="https://img01.yzcdn.cn/vant/apple-3.jpg" />
            <span>炉火纯青</span>
        </van-grid-item>
        <van-grid-item>
            <van-image src="https://img01.yzcdn.cn/vant/apple-1.jpg" />
            <span>炉火纯青</span>
        </van-grid-item>
        <van-grid-item>
            <van-image src="https://img01.yzcdn.cn/vant/apple-2.jpg" />
            <span>炉火纯青</span>
        </van-grid-item>
        <van-grid-item>
            <van-image src="https://img01.yzcdn.cn/vant/apple-3.jpg" />
            <span>炉火纯青</span>
        </van-grid-item>
    </van-grid>
  </div>
</template>

<script>

  export default {
    data() {
      return {
      }
    },
    mounted() {
    },
    methods:{
    }
  }
</script>

<style scoped lang="scss">
  .card-main {
    padding: .8rem;
    color: #fff;
    .card-glory {
        padding: 0 0 .8rem;
        text-align: center;
        font-size: .8rem;
    }
    span {
        padding: 0.5rem 0 0;
        font-size: .65rem;
        color: #fff;
    }
    /deep/ .van-grid {
        border-radius: .2rem;
        overflow: hidden;
        box-shadow: 0px 1px 1px 2px #464646;
        margin-bottom: .8rem;
    }
    /deep/ .van-grid-item__content {
        background-color: #353030;
        padding: .5rem;
    }
  }
</style>
