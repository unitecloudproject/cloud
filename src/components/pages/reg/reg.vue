<template>
    <div class="reg">
      <h2>注册</h2>
      <input type="text" class="phone" placeholder="手机号/邮箱">
      <br>
      <input type="text" class="code" placeholder="动态验证码"><button>获取验证码</button>
      <br>
      <input type="text" class="ming" placeholder="名"><input type="text" class="xing" placeholder="性">
      <br>
      <input type="password" class="ps" placeholder="密码">
      <br>
      <input type="password" class="recPs" placeholder="确认密码">
      <br>
      <input type="checkbox">我已阅读
      <br>
      <button>注册</button>
    </div>
</template>
<script>
    export default {

    }
</script>
<style scoped lang="less">
@import "~commom/style/index.less";
</style>
