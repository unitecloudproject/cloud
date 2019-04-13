<template>
    <div class="header">
      <div class="left">
        <div>
          <img src="../../../static/img/logo1-01.png" alt="">
        </div>
        <p>云筹</p>
      </div>
      <div class="right">
        <span class="iconfont icon-caidan"></span>
      </div>
    </div>
</template>
<script>
    export default {

    }
</script>
<style scoped lang="less">
@import "~commom/style/index.less";
  .header{
    z-index: 200;
    position: fixed;
    top: 0;
    .padding(0,10,0,10);
    .w(355);
    .h(44);
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #4193E5;
    .left{
      p{
        color: #FFFEFE;
        font-size: 15px;
        .margin(0,0,0,5);
      }
      display: flex;
      div{
        .w(25);
        .h(18);
        img{
          width: 100%;
          display: inline-block;
          vertical-align: bottom;
        }
      }
    }
    .icon-caidan{
      font-size: 24px;
      color: white;
    }
  }
</style>
