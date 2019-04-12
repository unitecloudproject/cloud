<template>
  <div class="user">
    <Header></Header>
    <div class="title">
      <p>用户中心</p>
    </div>
    <div class="content">
      <div class="one" @click="goSafe">
        <div class="one_left">
          <div class="iconfont icon-ai241"  ></div>
          <p>修改密码</p>
        </div>
        <div class="iconfont icon-tubiao-"></div>
      </div>

      <div class="two">
          <div class="two_left">
            <div class="iconfont icon-youxiang"></div>
            <p>邮箱验证</p>
          </div>
          <div class="two_right" >
            <mt-switch v-model="value1"></mt-switch>
          </div>
      </div>

      <div class="three">
        <div class="three_left">
          <div class="iconfont icon-shouji"></div>
          <p>手机验证</p>
        </div>
        <div class="three_right">
          <mt-switch v-model="value2"></mt-switch>
        </div>
      </div>

      <div class="four">
        <div class="four_left">
          <div class="iconfont icon-gugegoogle114"></div>
          <p>谷歌验证</p>
        </div>
        <div class="four_right">
          <p>未绑定</p>
        </div>
      </div>

      <div class="five" @click="goAuthentication">
        <div class="five_left">
          <div class="iconfont icon-shenfenzhengrenzheng" ></div>
          <p>身份验证</p>
        </div>
        <div class="five_right">
          <p>未绑定</p>
          <div class="iconfont icon-tubiao-"></div>
        </div>
      </div>

    </div>

  </div>
</template>
<script>
  import Header from '../.././common/aside/header.vue'
  import { Switch } from 'mint-ui';
  export default {
    data(){
      return{
        value1:'',
        value2:''
      }
    },
  components:{
    Header,
  },
  methods:{
    goSafe(){
      this.$router.push('user/safetyVenification')
    },
    goAuthentication(){
      this.$router.push('user/authentication')
    }
  }
}
</script>

<style lang="less" scoped>
  @import '../../.././common/style/index.less';
  .user{
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
  }
  .title{
    width: 100%;
    .h(70);
    display: flex;
    flex-direction: row;
    justify-content:center;
    align-items: center;
  }
  .title p {
    font-size:17px;
    color: #4193E5;
  }
  .content{
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    width: 100%;
  }
  .one{
    width: 100%;
    .h(50);
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
    border-top: 1px solid #EBEBEB;
    border-bottom: 1px solid #EBEBEB;
  }
  .one_left{
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
    .margin(0,0,0,30);
  }
  .icon-ai241{
    font-size:22px ;
  }
  .one_left p{
    font-size: 14px;
    color: #999999;
  }
  .icon-tubiao-{
    .margin(0,13,0,0);
  }

  .two{
    width: 100%;
    .h(50);
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
    border-top: 1px solid #EBEBEB;
    border-bottom: 1px solid #EBEBEB;
    .margin(14,0,0,0);
  }
  .two_left{
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
    .margin(0,0,0,30);
  }
  .icon-youxiang{
    font-size: 25px;
  }
  .two_left p{
    font-size: 14px;
    color: #999999;
  }
  .two_right{
    .margin(0,38,0,0);
  }

  .three{
    width: 100%;
    .h(50);
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
    border-top: 1px solid #EBEBEB;
    border-bottom: 1px solid #EBEBEB;
    .margin(14,0,0,0);
  }
  .three_left{
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
    .margin(0,0,0,30);
  }
  .icon-shouji{
    font-size: 22px;
  }
  .three_left p{
    font-size: 14px;
    color: #999999;
  }
  .three_right{
    .margin(0,38,0,0);
  }

  .four{
    width: 100%;
    .h(50);
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
    border-top: 1px solid #EBEBEB;
    border-bottom: 1px solid #EBEBEB;
    .margin(14,0,0,0);
  }
  .four_left{
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
    .margin(0,0,0,30);
  }
  .icon-gugegoogle114{
    font-size: 22px;
  }
  .four_left p{
    font-size: 14px;
    color: #999999;
  }
  .four_right{
    .margin(0,38,0,0);
  }

  .five{
    width: 100%;
    .h(50);
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
    border-top: 1px solid #EBEBEB;
    border-bottom: 1px solid #EBEBEB;
    .margin(14,0,0,0);
  }
  .five_left{
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
    .margin(0,0,0,30);
  }
  .icon-shenfenzhengrenzheng{
    font-size: 22px;
  }
  .five_left p{
    font-size: 14px;
    color: #999999;
  }
  .five_right{
    display: flex;
    flex-direction: row;
    justify-content:flex-end;
    align-items: center;
    .margin(0,10,0,0);
  }

</style>
