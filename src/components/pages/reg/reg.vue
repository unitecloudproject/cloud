<template>
    <div class="reg">
      <h2 class="tit">注册</h2>
      <div class="phoneBox">
        <input type="text" class="phone" v-model="phone" placeholder="手机号/邮箱" @blur="checkUserName">
      </div>
      <div class="codeBox">
        <input v-model="code" type="text" class="code" placeholder="动态验证码"><button class="getCode" @click="sendCode">获取验证码</button>
      </div>
      <div class="nameBox">
        <input v-model="ming" type="text" class="ming" placeholder="名"><input v-model="xing" type="text" class="xing" placeholder="姓">
      </div>
      <div class="psBox">
        <input v-model="ps" type="password" class="ps" placeholder="密码">
      </div>
      <div class="rePsBox">
        <input v-model="rePs" type="password" class="rePs" placeholder="确认密码">
      </div>
      <button class="regBn" @click="reg">立即注册</button>
      <div class="attenton">
        注：密码必须为8~20个字符组成，必须包含数字、大写、字母和小写字母，不能包含特殊字符和空格。
      </div>
      <div class="agree">
        <p>
          <input type="checkbox" id="agree" ref="agree"><label for="agree">我已阅读并同意</label><a href="">《用户协议》</a>
        </p>
        <a @click="goLogin">已有账号？</a>
      </div>
      <!--<div class="gray">

      </div>-->
     <!-- <div class="mssg">
        <i class="iconfont icon-chenggong"></i>
        <p>注册成功</p>
        <h3>只有身份认证通过我们团队审核后才可以进行认购</h3>
        <div>
          <button @click="goHome">进入首页</button>
          <button @click="goId">身份认证</button>
        </div>
      </div>-->
    </div>
</template>
<script>
  import api from '@/common/api'
  import { Toast } from 'mint-ui'
    export default {
      data(){
        return{
          phone:"",
          code:"",
          ming:"",
          xing:"",
          ps:"",
          rePs:"",
//          url:"http://39.106.157.48:8000/"
        }
      },
      methods:{
        sendCode(){
          api.requestGet('/user/checkcode/',{params:{username:this.phone}})
            .then((data)=>{
              console.log(data)
            })
        },
        checkUserName(){
          api.requestGet('/user/checkuser/',{username:this.phone})
            .then((data)=>{
            console.log(data)
              if(data.status==400){
                return Toast('此手机号或邮箱已存在')
              }
            })
        },
        reg(){
          if(!this.$refs.agree.checked) {
             return Toast('请先阅读并同意用户协议')
          }
          let str=JSON.stringify({username:String(this.phone),code:String(this.code),first_name:String(this.ming),last_name:String(this.xing),password:String(this.ps),repassword:String(this.rePs)});
          console.log(str);
          let data=new FormData();
          data.append("username",this.phone);
          data.append("password",this.ps);
          data.append("repassword",this.rePs);
          data.append("code",this.code);
          data.append("first_name",this.ming);
          data.append("last_name",this.xing);
          api.requestPost("/user/register/",data)
            .then((data)=>{
              console.log(data)
            })
        },
        goLogin(){
          this.$router.push('/login')
        },
        goHome(){

        },
        goId(){

        }
      }
    }
</script>
<style scoped lang="less">
@import "~commom/style/index.less";
  .reg{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .tit{
    color: #4193E5;
    font-size: 17px;
    .lh(50);
    .h(50);
  }
  .phoneBox,.nameBox,.codeBox,.rePsBox,.psBox{
    display: flex;
    align-items: center;
    .margin(20,0,0,0);
    .padding(0,0,0,5);
    .w(316);
    .h(40);
    .lh(40);
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 1);
    color: #666666;
    font-size: 14px;
    text-align: left;
    border:1px solid rgba(125,125,125,1);
  }
  .phoneBox{
    margin: 0;
  }
  .phone,.code,.rePs,.ps{
    .h(38);
    border: none;
  }
  .code{
    flex-grow: 4;
  }
  .getCode{
    color: #4193E5;
    font-size: 12px;
    border: none;
    background-color: transparent;
    outline: none;
    .h(25);
    border-left: 1px solid #7D7D7D;
  }
  .regBn{
    .w(150);
    .h(40);
    font-size: 12px;
    color: #FFFFFF;
    background-color: #4193E5;
    border-radius: 4px;
    border: none;
    outline: none;
    .margin(30,0,0,0);
  }
  .attenton{
    .w(304);
    .h(32.5);
    font-size: 12px;
    color: #000000;
    text-align: left;
    .margin(30,0,20,0)
  }
  .agree{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .h(20);
    .lh(20);
    .w(316);
    font-size: 12px;
    a{
      color: #4193E5;
    }
  }
  .ming,.xing{
    .h(38);
    border: none;
    width: 50%;
  }
  .xing{
    border-left: 1px solid black;
    padding-left: 5px;
  }
  .mssg{
    .w(324);
    .h(310);
    position: fixed;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 5px;
    div{
      display: flex;
      justify-content: space-around;
      button{
        .w(119);
        .h(36);
        border: none;
        outline: none;
        background-color: #0F86CB;
        font-size: 14px;
        color: white;
        border-radius: 4px;
      }
    }
    p{
      font-size: 16px;
      color: #5E7081;
    }
    h3{
      font-size: 12px;
      color: #667C89;
    }
    .icon-chenggong{
      font-size: 65px;
      color: #1DBF74;
    }
  }
  .gray{
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #101010;
    opacity: 0.51;
  }
</style>
