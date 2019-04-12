<template>
    <div class="resetPs">
      <h2>重置密码</h2>
      <p>重置密码后24小时内不可提币</p>
      <br>
      <input type="password" placeholder="新密码" class="newps">
      <br>
      <input type="password" placeholder="确认密码" class="reps">
      <br>
      <button class="sure" @click="sure">确定</button>
    </div>
</template>
<script>
    export default {
      data(){
        return{

        }
      },
      methods:{
        sure(){

        }
      }
    }
</script>
<style scoped lang="less">
@import "~commom/style/index.less";
  .resetPs{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h2{
      .h(73);
      color: #0087D1;
      .lh(70);
      font-size: 18px;
    }
    p{
      color: #AAAAAA;
      .w(330);
      display: flex;
      justify-content: flex-start;
    }
    .newps,.reps{
      .w(320);
      .h(42);
      .padding(0,0,0,10);
      border: 1px solid #E5E5E5;
      border-radius: 2px;
      .margin(10,0,10,0);
    }
    .sure{
      .w(338);
      .h(42);
      background-color: #0F86CB;
      font-size: 14px;
      border-radius: 4px;
      outline: none;
      border: none;
      color: white;
      .margin(20,0,0,0)
    }
  }
</style>
