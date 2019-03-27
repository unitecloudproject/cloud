<template>
    <div class="reg">
      <h2 class="tit">注册</h2>
      <input type="text" class="phone" v-model="phone" placeholder="手机号/邮箱" @blur="checkUserName">
      <br>
      <input v-model="code" type="text" class="code" placeholder="动态验证码"><button @click="sendCode">获取验证码</button>
      <br>
      <input v-model="ming" type="text" class="ming" placeholder="名"><input v-model="xing" type="text" class="xing" placeholder="性">
      <br>
      <input v-model="ps" type="password" class="ps" placeholder="密码">
      <br>
      <input v-model="rePs" type="password" class="recPs" placeholder="确认密码">
      <br>
      <input type="checkbox">我已阅读
      <br>
      <button @click="reg">注册</button>
    </div>
</template>
<script>
    export default {
      data(){
        return{
          phone:"",
          code:"",
          ming:"",
          xing:"",
          ps:"",
          rePs:"",
          url:"http://39.106.157.48:8000/"
        }
      },
      methods:{
        sendCode(data){
        /*  this.$axios(this.url+"cherkcode/",{phone:this.phone})
            .then((data)=>{
            console.log(data)
            })*/
        },
        checkUserName(){
          /*this.$axios.get(this.url+'checkuser/',{username:this.phone})
            .then((data)=>{
            console.log(data)
            })*/
        },
        reg(){
          console.log(this.phone,this.code,this.xing,this.ming,this.ps,this.rePs);
          if(this.ps!==this.rePs){
            return alert('两次密码不一致')
          }
          this.$axios.post(this.url+"register/",{username:this.phone,code:this.code,first_name:this.ming,last_name:this.xing,password:this.ps})
            .then((data)=>{
            console.log(data)
            })
        }
      }
    }
</script>
<style scoped lang="less">
@import "~commom/style/index.less";
  .tit{
    color: #0087D1;
    font-size: 18px;
    .lh(26);
    .h(70);
  }
  .phone{
    .w(330);
    .h(44);
    border-radius: 3px;
    background-color: rgba(255, 255, 255, 1);
    color: rgba(221, 226, 237, 1);
    font-size: 14px;
    text-align: left;
    border: 1px solid rgba(229, 229, 229, 1);
    input::-webkit-input-placeholder{
      color: red;
    }
  }
</style>
