<template>
    <div class="login">
      <h2>登录</h2>
      <input v-model="phone" type="text" class="phone" placeholder="手机/邮箱">
      <br>
      <input v-model="ps" type="password" class="ps" placeholder="密码">
      <br>
      <router-link tag="a" to="/forgetps">忘记密码</router-link>
      <router-link tag="a" to="/reg">用户注册</router-link>
      <br>
      <button @click="login">登录</button>
    </div>
</template>
<script>
    export default {
      data(){
        return{
          phone:"",
          ps:"",
          url:"http://39.106.157.48:8000/"
        }
      },
      methods:{
        login(){
          console.log(this.phone,this.ps);
          this.$axios.post(this.url+"login",{username:this.phone,password:this.ps})
        }
      }
    }
</script>
<style scoped lang="less">
@import "~commom/style/index.less";
</style>
