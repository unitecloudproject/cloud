<template>
    <div class="safety">
      <h2>安全验证</h2>
      <input type="text" class="email" disabled v-model="mail">
      <br>
      <div class="codeBox">
        <input type="text" class="ecode" placeholder="邮箱验证码"><button @click="getCode">获取验证码</button>
      </div>
      <br>
      <input type="text" class="phone" disabled v-model="phone">
      <br>
      <div class="pCode">
        <input type="text"  placeholder="手机验证码"><button>获取验证码</button>
      </div>
      <br>
      <button class="nextStep" @click="goRePs">下一步</button>
    </div>
</template>
<script>
  import api from '@/common/api'
    export default {
      data(){
        return{
          phone:"",
          mail:""
        }
      },
      methods:{
        getCode(){
          let reg = /@/g;
          if(!reg.test(this.mail)){
            api.requestGet('/user/phonecode/',{params:{phone:this.mail}})
              .then(data =>{
                console.log(data)
              })
          }
        },
        goRePs(){
          this.$router.push('/resetps');
        }
      },
      mounted(){
        console.log(this.$route.params.data.data.data)
        let data=this.$route.params.data.data.data
        this.mail=data.phonenum;
      }
    }
</script>
<style scoped lang="less">
@import "~commom/style/index.less";
  .safety{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h2{
      .w(73);
      .h(70);
      font-size: 18px;
      color: #0087D1;
      .lh(70);
    }
    .email,.phone{
      .w(320);
      .h(42);
      border-radius: 2px;
      color: #AAAAAA;
      font-size: 14px;
      border: 1px solid #F2F0F2;
      outline: none;
      .padding(0,0,0,10);
    }
    .codeBox,.pCode{
      .w(330);
      .h(42);
      align-items: center;
      border-radius: 2px;
      color: #AAAAAA;
      font-size: 14px;
      border: 1px solid #F2F0F2;
      display: flex;
      .margin(20,0,20,0);
      input{
        border: none;
        outline: none;
        flex: 1;
        .padding(0,0,0,10)
      }
      button{
        background-color: transparent;
        outline: none;
        border: none;
        .h(35);
        border-left: 1px solid gray;
        color: #0087D1;
        font-size: 14px;
      }
    }
    .nextStep{
      .w(330);
      .h(42);
      border-radius: 4px;
      color: #FFFFFF;
      background-color: #0F86CB;
    }
  }
</style>
