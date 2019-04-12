<template>
  <div id="aside">
        <div class="top">
          <img src="" alt="">
          <button class="button_left">注册</button>
          <button class="button_right">登录</button>
        </div>
        <div class="ul">
            <ul class="biao1">
              <li class="biao1_1">
                <div>首页</div>
              </li>
              <li>
                <div >语言</div>
                  <div class="san"></div>
                  <ul>
                    <li>中文</li>
                    <li>英文</li>
                  </ul>

              </li>
            </ul>
        </div>

  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="less" scoped>
  @import '../../.././common/style/index.less';
  @import '../../.././common/style/reset.css';
  #aside{
    background-color: #5E7081;
    .w(250);
    .h(600);
    position:fixed;
    top:0;
    right:0;
    z-index:-1;
    display: flex;
    flex-direction: column;
  }
  .top{
    float:left;
    .w(250);
    .h(80);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    img{
      .w(24);
      .h(24);
    }
    .button_left,.button_right{
      .w(73);
      .h(34);
      background-color: #0F86CB;
      border:none;
      color:#ffffff;
      font-size: 14px;
    }
  }
  .ul{
    .biao1 li{
      .w(250);
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    .biao1 li div{
      .margin(0,0,0,29);
      .h(40);
      .lh(40);
      font-size: 14px;
    }
    .biao1 .biao1_1{
      background-color: #FF9D12;
    }
    .san{
      .w(0);
      .h(0);
      border-top: 5px solid;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      color: #FFFFFF;
      .margin(0,0,0,4);
    }
  }
</style>
