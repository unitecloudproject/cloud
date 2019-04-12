<template>
    <div class="forgerPs">
      <h2>找回密码</h2>
      <input type="text" v-model="phone" class="phone" placeholder="手机号/邮箱">
      <br>
      <button class="cont" @click="cont">下一步</button>
    </div>
</template>
<script>
    export default {
      data(){
        return{
          phone:"",
        }
      },
      methods:{
        cont(){
          let data = new FormData();
          data.append("username",this.phone);
          console.log(data[0])
//          this.$router.push('/safety');
          this.$axios.post("/api/user/forgetpassword/",{username:this.phone})
            .then((data)=>{
              console.log(data)
            })
        }
      }
    }
</script>
<style scoped lang="less">
@import "~commom/style/index.less";
  .forgerPs{
    display: flex;
    flex-direction: column;
    align-items: center;
    h2{
      .h(70);
      .lh(70);
      font-size: 17px;
      color: #4193E5;
    }
    .phone{
      .w(311);
      font-size: 14px;
      color: #666666;
      .h(40);
      border-radius: 4px;
      border: 1px solid #7D7D7D;
      .padding(0,0,0,5);
    }
    .cont{
      .w(150);
      .h(40);
      background-color: #4193E5;
      border-radius: 4px;
      font-size: 15px;
      color: #FFFFFF;
      outline: none;
      border: none;
      .margin(40,0,0,0)
    }
  }
</style>
