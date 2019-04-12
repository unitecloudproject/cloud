
<template>
  <div class="header">
    <div class="left">
      <div class="img">
        <img src="../../.././assets/logo1-01.png" alt="">
      </div>
      <p>云筹</p>
    </div>
    <div class="right">
      <div class="iconfont icon-caidan"></div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'

  export default {

  }
</script>

<style lang="less" scoped>
  @import '../../.././common/style/index.less';
  .header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    .h(50);
    background-color: #4193E5;
  }
  .left{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .margin(0,0,0,10);

  }
  .img{
    .w(25);
    .h(18);
    img{
      width: 100%;
      height: 100%;
    }
  }
  .right{
    .margin(0,18,0,0);
  }
</style>
