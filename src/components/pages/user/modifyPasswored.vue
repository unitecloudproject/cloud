<template>
  <div class="modifyPasswored">
    <Header></Header>
    <div class="title">
      <p>修改密码</p>
    </div>

    <div class="content">
      <div class="prompt">
        <p>重置密码后24小时内不可提币</p>
      </div>

      <div class="one">
        <input type="text" class="one_left" placeholder="当前登录密码">
      </div>

      <div class="two">
        <input type="text" class="two_left" placeholder="新登录密码">
      </div>

      <div class="three">
        <input type="text" class="three_left" placeholder="确认密码">
      </div>

      <div class="six" @click="goUser">
        <button>
          <p>确定</p>
        </button>
      </div>

    </div>

  </div>
</template>

<script>
  import Header from '../.././common/aside/header.vue'
  export default {

    components:{
      Header
    },
    methods:{
      goUser(){
        this.$router.push('/')
      }
    }
  }
</script>

<style lang="less" scoped="">
  @import '../../.././common/style/index.less';
  .safetyVenification{
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
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
  }
  .prompt{
    width: 92%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
  .prompt p{
    font-size: 14px;
    color: #666666;
  }

  .one{
    display: flex;
    justify-content: space-between;
    width:92%;
    .h(45);
    border: 1px solid #EBEBEB;
    .margin(15,0,0,0);
  }
  .one_left{
    flex: 1;
    border: none;
  }
  input::-webkit-input-placeholder {
    /* placeholder颜色  */
    color: #999999;
    /* placeholder字体大小  */
    font-size: 14px;
    /* placeholder位置  */
    text-align: left;
    .padding(0, 0, 0, 10);
  }

  .two{
    display: flex;
    justify-content: space-between;
    width:92%;
    .h(45);
    border: 1px solid #EBEBEB;
    .margin(15,0,0,0);
  }
  .two_left{
    flex: 1;
    border: none;
  }
  input::-webkit-input-placeholder {
    /* placeholder颜色  */
    color: #999999;
    /* placeholder字体大小  */
    font-size: 14px;
    /* placeholder位置  */
    text-align: left;
    .padding(0, 0, 0, 10);
  }

  .three{
    display: flex;
    justify-content: space-between;
    width:92%;
    .h(45);
    border: 1px solid #EBEBEB;
    .margin(15,0,0,0);
  }
  .three_left{
    flex: 1;
    border: none;
  }
  input::-webkit-input-placeholder {
    /* placeholder颜色  */
    color: #999999;
    /* placeholder字体大小  */
    font-size: 14px;
    /* placeholder位置  */
    text-align: left;
    .padding(0, 0, 0, 10);
  }

  .six{
    display: flex;
    .margin(15,0,0,0);
    width:92%;
    .h(45);
  }
  .six button{
    width:100%;
    height: 100%;
    background: #4193E5;
    border:none;
    outline: none;
    border-radius: 4px;
  }
  .six button p{
    font-size: 14px;
    color: #FFFFFF;
  }
</style>
