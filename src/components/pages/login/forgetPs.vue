<template>
    <div class="forgerPs">
      <h2>找回密码</h2>
      <input type="text" class="phone" placeholder="手机号/邮箱">
      <br>
      <button @click="cont">下一步</button>
    </div>
</template>
<script>
    export default {
      data(){
        return{
          url:"http://39.106.157.48:8000/"
        }
      },
      methods:{
        cont(){
          this.$axios.post(this.url+"forgetpassword/",{})
            .then(()=>{

            })
        }
      }
    }
</script>
<style scoped lang="less">
@import "~commom/style/index.less";
</style>
