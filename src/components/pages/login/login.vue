<template>
    <div class="login">
      <div class="imgCom">
        <img src="../../../../static/img/2.jpg" alt="">
      </div>
      <input v-model="phone" type="text" class="phone" placeholder="手机/邮箱">
      <br>
      <input v-model="ps" type="password" class="ps" placeholder="密码">
      <br>
      <div class="forget">
        <a @click="goForget">忘记密码</a>
      </div>
      <br>
      <button class="loginBn" @click="login">登录</button>
      <button @click="reg" class="regBn">注册</button>
    </div>
</template>
<script>
  import api from '@/common/api/api.js'
    export default {
      data(){
        return{
          phone:"",
          ps:""
        }
      },
      methods:{
        goForget(){
          this.$router.push('/forgetps')
        },
        reg(){
          this.$router.push('/reg');
        },
        login(){
          let data = new FormData();
          data.append("username",this.phone);
          data.append("password",this.ps);
          api.requestPost("/user/login/",data)
            .then(data =>{
              console.log(data)
            })
        }
      }
    }
</script>
<style scoped lang="less">
@import "~commom/style/index.less";
  .login{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .imgCom{
      .w(375);
      .h(211);
      .margin(0,0,20,0);
      img{
        width: 100%;
        height: 100%;
      }
    }
    .phone,.ps{
      color: #7D7D7D;
      .w(312);
      .h(40);
      border: 1px solid #7D7D7D;
      border-radius: 4px;
      .padding(0,0,0,4);
      outline: none;
      .margin(20,0,0,0);
    }
    .forget{
      .w(316);
      .h(40);
      .lh(40);
      text-align: right;
      color: #4193E5;
    }
    .loginBn,.regBn{
      .w(318.5);
      .h(40);
      .margin(0,0,20,0);
      outline: none;
      border-radius: 20px;
      border: 2px solid #4193E5;
      font-size: 15px;
      color: #FFFFFF;
    }
    .loginBn{
      background-color: #4193E5;
    }
    .regBn{
      background-color: transparent;
      color: #4193E5;
    }
  }
</style>
