<template>
  <div class="login-main">
    <div class="login-top">
      <!--<img class="login-img" src=""/>-->
      <!--<i class="el-icon-user"></i>-->
      <van-icon name="contact" />
    </div>
    <div class="login-model">
      <el-input v-model="userName" placeholder="请输入用户名/账号/手机号"></el-input>
      <el-input v-model="userPassword" placeholder="请输入密码"></el-input>
    </div>
    <div class="login-but">
      <el-button @click="toLogin()">登陆</el-button>
    </div>
  </div>
</template>

<script>
  import { eleUtil } from '@/assets/js/util'
  import { setCookie } from '@/assets/js/support' // cookie缓存
  import { setToken } from '@/assets/js/auth' // 验权
  export default {
    data () {
      return {
        userName:'',
        userPassword:''
      }
    },
    methods: {
      // 设置背景
      setBodyBackGround () {
        document.body.style.background = '#353434'
      },
      // 清除背景
      clearBodyBackGround () {
        document.body.style.background = ''
      },
      // 登陆
      toLogin() {
        if (this.userName==='') {
          // eleUtil.toChangeTip('error','用户名不能为空!')
          this.getTip('error','用户名不能为空!')
          return
        }
        if (this.userPassword==='') {
          this.getTip('error','密码不能为空!')
          return
        }
        // this.getTip('success','登陆成功!')
        let token = this.userName
        token = this.$md5(token)
        setToken(token) // 设置token
        setCookie("username",this.userName,15);
        setCookie("password",this.userPassword,15);
        this.$router.push({path: '/'})
      },
      // 消息提示
      getTip(data1,data2){
        this.$message({
          message: data2,
          duration: '2000',
          center: true,
          offset: 30,
          type: data1
        });
      }
    },
    mounted(){
      // 进来的时候,清除背景
      this.setBodyBackGround()
    },
    beforeDestroy(){
      // 离开页面的时候清除
      this.clearBodyBackGround()
    }
  }
</script>

<style scoped lang="scss">
  .login-main{
    width: 80%;
    /*height: 60%;*/
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    background: #3c3a3a;
    border-radius: 0.4rem;
    overflow: hidden;
    .login-top{
      padding: 2rem 0.8rem 1rem 0.8rem;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      .login-img{
        width: 5rem;
        height: 5rem;
        display: block;
        object-fit: cover;
      }
      /deep/ .el-icon-user{
        font-size: 5rem;
        color: #e6e6e6;
      }
    }
    .login-model{
      margin: 0 0.8rem 0;
      /deep/ .el-input{
        margin: 0 0 1rem 0;
      }
      /deep/ .el-input__inner{
        background-color: #4c4a4a;
        border: 1px solid #777777;
        color: #bfbfbf;
      }
    }
    .login-but{
      margin: 0 0.8rem 1rem;
      /deep/ .el-button{
        background: #e6e6e6;
        width: 100%;
      }
    }
    /deep/ .van-icon{
      font-size: 4rem;
      color: #fff;
    }
  }
</style>
