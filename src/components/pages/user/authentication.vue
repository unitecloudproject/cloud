<template>
  <div class="authentication">
    <Header></Header>
    <div class="title">
      <p>身份认证</p>
    </div>
    <div class="content">
      <div class="one">
        <input type="text" class="one_left" placeholder="名">
      </div>

      <div class="two">
        <input type="text" class="two_left" placeholder="建林">
      </div>

      <div class="three">
        <input type="text" class="three_left" placeholder="姓">
      </div>

      <div class="four">
        <input type="text" class="four_left" placeholder="王">
      </div>

      <div class="five">
        <input type="text" class="five_left" placeholder="国籍">
      </div>

      <div class="six">
        <input type="text" class="six_left" >
      </div>

      <div class="five">
        <input type="text" class="five_left" placeholder="证件号(身份证、护照、驾照)">
      </div>

      <div class="six">
        <input type="text" class="six_left" >
      </div>

      <div class="seven">
        <input type="text" class="five_left" placeholder="证件正面照">
      </div>

      <div class="eight">
        <input type="text" class="six_left"  placeholder="证件正面照">
      </div>

      <div class="nine">
        <input type="text" class="five_left" placeholder="证件反面照">
      </div>

      <div class="ten">
        <input type="text" class="six_left" placeholder="证件反面照">
      </div>

      <div class="eleven">
        <input type="text" class="five_left" placeholder="本人手持证件照和个人签名">
      </div>

      <div class="twelve">
        <input type="text" class="six_left" placeholder="本人手持证件照和个人签名">
      </div>

      <div class="text">
        <p>
          请您上传一张手持证件照和个人签字的诈骗，个人签字内容包
          含：姓名和当前日期。请保证照片和个人签字内容清晰可见。
        </p>
      </div>

      <div class="example">
        <p>示例</p>
      </div>

      <div class="yes" @click="goUser">
        <button>确定</button>
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

<style lang="less" scoped>
  @import '../../.././common/style/index.less';
  .authentication{
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
  .one{
     display: flex;
     justify-content: space-between;
     width:92%;
     .h(45);
     .margin(15,0,0,0);
   }
  .one_left{
    flex: 1;
    border: none;
  }
  .one input::-webkit-input-placeholder {
    /* placeholder颜色  */
    color: #4193E5;
    /* placeholder字体大小  */
    font-size: 14px;
    /* placeholder位置  */
    text-align: left;
  }


  .two{
    display: flex;
    justify-content: space-between;
    width:92%;
    .h(45);
    .margin(15,0,0,0);

  }
  .two_left{
    flex: 1;
    border: none;
    background-color: #F7F7F7;
  }
  .two input::-webkit-input-placeholder {
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
    .margin(15,0,0,0);
  }
  .three_left{
    flex: 1;
    border: none;
  }
  .three input::-webkit-input-placeholder {
    /* placeholder颜色  */
    color: #4193E5;
    /* placeholder字体大小  */
    font-size: 14px;
    /* placeholder位置  */
    text-align: left;
  }


  .four{
    display: flex;
    justify-content: space-between;
    width:92%;
    .h(45);
    .margin(15,0,0,0);

  }
  .four_left{
    flex: 1;
    border: none;
    background-color: #F7F7F7;
  }
  .four input::-webkit-input-placeholder {
    /* placeholder颜色  */
    color: #999999;
    /* placeholder字体大小  */
    font-size: 14px;
    /* placeholder位置  */
    text-align: left;
    .padding(0, 0, 0, 10);
  }

  .five{
    display: flex;
    justify-content: space-between;
    width:92%;
    .h(45);
    .margin(15,0,0,0);
  }
  .five_left{
    flex: 1;
    border: none;
  }
  .five input::-webkit-input-placeholder {
    /* placeholder颜色  */
    color: #4193E5;
    /* placeholder字体大小  */
    font-size: 14px;
    /* placeholder位置  */
    text-align: left;
  }


  .six{
    display: flex;
    justify-content: space-between;
    width:92%;
    .h(45);
    .margin(15,0,0,0);

  }
  .six_left{
    flex: 1;
    border: none;
    background-color: #F7F7F7;
  }
  .six input::-webkit-input-placeholder {
    /* placeholder颜色  */
    color: #999999;
    /* placeholder字体大小  */
    font-size: 14px;
    /* placeholder位置  */
    text-align: left;
    .padding(0, 0, 0, 10);
  }
  .seven{
    display: flex;
    justify-content: space-between;
    width:92%;
    .h(45);
    .margin(15,0,0,0);
  }
  .seven_left{
    flex: 1;
    border: none;
  }
  .seven input::-webkit-input-placeholder {
    /* placeholder颜色  */
    color: #4193E5;
    /* placeholder字体大小  */
    font-size: 14px;
    /* placeholder位置  */
    text-align: left;
  }


  .eight{
    display: flex;
    justify-content: space-between;
    width:92%;
    .h(130);
    .margin(15,0,0,0);

  }
  .eight_left{
    flex: 1;
    border: none;
    background-color: #F7F7F7;
  }
  .eight input::-webkit-input-placeholder {
    /* placeholder颜色  */
    color: #4193E5;
    /* placeholder字体大小  */
    font-size: 14px;
    /* placeholder位置  */
    text-align: center;
    .padding(0, 0, 0, 10);
  }

  .nine{
    display: flex;
    justify-content: space-between;
    width:92%;
    .h(45);
    .margin(15,0,0,0);
  }
  .nine_left{
    flex: 1;
    border: none;
  }
  .nine input::-webkit-input-placeholder {
    /* placeholder颜色  */
    color: #4193E5;
    /* placeholder字体大小  */
    font-size: 14px;
    /* placeholder位置  */
    text-align: left;
  }


  .ten{
    display: flex;
    justify-content: space-between;
    width:92%;
    .h(130);
    .margin(15,0,0,0);

  }
  .ten_left{
    flex: 1;
    border: none;
    background-color: #F7F7F7;
  }
  .ten input::-webkit-input-placeholder {
    /* placeholder颜色  */
    color: #4193E5;
    /* placeholder字体大小  */
    font-size: 14px;
    /* placeholder位置  */
    text-align: center;
    .padding(0, 0, 0, 10);
  }

  .eleven{
    display: flex;
    justify-content: space-between;
    width:92%;
    .h(45);
    .margin(15,0,0,0);
  }
  .eleven_left{
    flex: 1;
    border: none;
  }
  .eleven input::-webkit-input-placeholder {
    /* placeholder颜色  */
    color: #4193E5;
    /* placeholder字体大小  */
    font-size: 14px;
    /* placeholder位置  */
    text-align: left;
  }


  .twelve{
    display: flex;
    justify-content: space-between;
    width:92%;
    .h(130);
    .margin(15,0,0,0);

  }
  .twelve_left{
    flex: 1;
    border: none;
    background-color: #F7F7F7;
  }
  .twelve input::-webkit-input-placeholder {
    /* placeholder颜色  */
    color: #4193E5;
    /* placeholder字体大小  */
    font-size: 14px;
    /* placeholder位置  */
    text-align: center;
    .padding(0, 0, 0, 10);
  }

  .text{
      display: flex;
      justify-content: space-between;
      width:92%;
      .margin(15,0,0,0);
  }
  .text p{
    font-size:12px ;
    color: #333333;
  }

  .example{
    display: flex;
    justify-content: flex-end;
    width:92%;
    .h(45);
    .margin(15,0,0,0);
  }
  .example p{
    font-size: 14px;
    color: #1600ED;
  }

  .yes{
    display: flex;
    .margin(15,0,0,0);
    width:92%;
    .h(45);
  }
  .yes button{
    width:100%;
    height: 100%;
    background: #4193E5;
    border:none;
    outline: none;
    border-radius: 4px;
  }
  .yes button p{
    font-size: 14px;
    color: #FFFFFF;
  }
</style>
