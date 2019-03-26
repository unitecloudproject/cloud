<template>
    <div class="login">
      <h2>登录</h2>
      <input type="text" class="phone" placeholder="手机/邮箱">
      <br>
      <input type="password" class="ps" placeholder="密码">
      <br>
      <router-link tag="a" to="/forgetps">忘记密码</router-link>
      <router-link tag="a" to="/reg">用户注册</router-link>
      <br>
      <button>登录</button>
    </div>
</template>
<script>
    export default {

    }
</script>
<style scoped lang="less">
@import "~commom/style/index.less";
</style>
