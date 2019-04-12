<template>
  <div class="noLogin">
    <div class="top">
      <div class="iconfont icon-wode"></div>
      <div class="button_left">注册</div>
      <div class="button_right">登录</div>
    </div>
    <div class="one">
      首页
    </div>
    <div class="two" @click="show">
      <div >
        <div class="zi">语言</div>

        <div class="jiantou">
          <div class="iconfont icon-xiala"></div>
            <div class="langue" v-show="state">
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
        state:false
      }
    },
    methods:{
      show(){
        this.state=!this.state
        console.log(this.state)
      }
    },
  }
</script>

<style lang="less" scoped>
  @import '../../.././common/style/index.less';
  .noLogin{
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
  .button_left, .button_right{
    color: #FFFFFF;
    font-size: 14px;
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



</style>
