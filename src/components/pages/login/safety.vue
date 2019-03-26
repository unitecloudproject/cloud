<template>
    <div class="safety">
      <h2>安全验证</h2>
      <input type="text" class="email" >
      <br>
      <input type="text" class="ecode" placeholder="邮箱验证码"><button>获取验证码</button>
      <br>
      <input type="text" class="phone">
      <br>
      <input type="text" class="pcode" placeholder="手机验证码"><button>获取验证码</button>
      <br>
      <button>下一步</button>
    </div>
</template>
<script>
    export default {

    }
</script>
<style scoped lang="less">
@import "~commom/style/index.less";
</style>
