<template>
  <div class="ach-main">
    <div class="ach-main-model">
        <div class="ach-main-img">
            <img src="https://liuer1211.github.io/vue_-simplicity/static/img/game/card/s1.jpg"/>
        </div>
        <div class="ach-main-img">
            <img src="https://liuer1211.github.io/vue_-simplicity/static/img/game/card/s2.jpg"/>
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
    mounted() {
    }
  }
</script>

<style scoped lang="scss">
  .ach-main {
    color: #fff;
    padding: .8rem;
    .ach-main-model {
        display: flex;
        justify-content: space-between;
        .ach-main-img {
            width: 48%;
            height: 10rem;
            background: #fff;
            border-radius: 0.2rem;
            overflow: hidden;
            background-image: linear-gradient(to bottom, #a25cff, #333ca9);
            img {
                display: block;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
  }
</style>
