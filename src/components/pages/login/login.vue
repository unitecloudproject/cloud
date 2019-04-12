<template>
<<<<<<< HEAD
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
=======
  <div class="login">
    <div class="top">
      <div class="iconfont icon-wode"></div>
      <div class="num">188****2132</div>
    </div>
    <div class="one">
      首页
    </div>

    <div class="three" @click="show">
      <div >
        <div class="zi">资产中心</div>
        <div class="jiantou_2">
          <div class="iconfont icon-xiala"></div>
          <div class="langue_2" v-show="state">
            <p >充币提币</p>
            <p class="p_2">充币提币记录</p>
            <p class="p_3">订单记录</p>
          </div>
        </div>
      </div>
    </div>

    <div class="four" @click="goUser">用户中心</div>

    <div class="two" @click="show_2">
      <div >
        <div class="zi_2">语言</div>
        <div class="jiantou">
          <div class="iconfont icon-xiala"></div>
          <div class="langue" v-show="state_2">
            <p>中文</p>
            <p>英文</p>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
  export default {
    data(){
      return{
        state:false,
        state_2:false
      }
    },
    methods:{
      show(){
        this.state=!this.state
        console.log(this.state)
      },
      show_2(){
        this.state_2=!this.state_2
        console.log(this.state_2)
      },
      goUser(){
        this.$router.push('/')
      }
    },
  }
</script>

<style lang="less" scoped>
  @import '../../.././common/style/index.less';
  .login{
    .h(667);
    display: flex;
    flex-direction: column;
    /*align-items: center;*/
    background-color: #4193E5;
    width:50%;
    float: right;
  }
  .top{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    .h(50);
  }
  .icon-wode{
    color:#FFFFFF;
    font-size: 20px;
  }
  .num{
    font-size: 13px;
    color:#FFFFFF;
  }

  .one{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .h(50);
    background-color:#FF9D12 ;
    .padding(0,0,0,30);
    font-size: 14px;
    color: #ffffff;
  }
  .two{
    .h(50);
    .lh(50);
    .padding(0,0,0,30);
    font-size: 14px;
    color: #ffffff;
  }
  .zi{
    float: left;
  }
  .jiantou{
    float: left;
    .w(13);
    .margin(0,0,0,8);
  }
  .icon-xiala{
    font-size: 5px;
  }
  .langue{
    .w(122);
    .h(20);
  }
  .langue p{
    font-size: 14px;
    .lh(20);
    color:#FFFFFF;
  }


  .three{
    .h(50);
    .lh(50);
    .padding(0,0,0,30);
    font-size: 14px;
    color: #ffffff;
  }
  .zi_2{
    float: left;
  }
  .jiantou_2{
    float: left;
    .w(13);
    .margin(0,0,0,8);
  }
  .icon-xiala{
    font-size: 5px;
  }
  .langue_2{
    .w(122);
    .h(118);
  }
  .langue_2{
    font-size: 14px;
    .h(20);
    .lh(20);

    color:#FFFFFF;
  }
  .langue_2 .p_2,.langue_2 .p_3{
    .padding(20,0,0,0);
  }


  .four{
    .h(50);
    .lh(50);
    .padding(0,0,0,30);
    font-size: 14px;
    color: #ffffff;
  }



>>>>>>> 483264a16ae772a501124b5475b602c5f9797e4b
</style>
