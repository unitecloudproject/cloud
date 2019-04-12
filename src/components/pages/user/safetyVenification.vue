<template>
  <div class="safetyVenification">
    <Header></Header>
    <div class="title">
      <p>安全验证</p>
    </div>

    <div class="content">
      <input type="text" class="one">

      <div class="two">
        <input type="text" class="two_left" placeholder="验证码">
        <button @click="email">
          <p>获取验证码</p>
        </button>
      </div>

      <!--<input type="text" class="three">

      <div class="four" >
        <input type="text" class="four_left" placeholder="短信验证码">
        <button @click="phone">
          <p>获取验证码</p>
        </button>
      </div>

      <div class="five">
        <input type="text" class="five_left" placeholder="谷歌验证码">
      </div>-->

      <div class="six">
        <button @click="goModifyPasswored">
          <p>确定</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '../.././common/aside/header.vue'



  export default {
    components: {
      Header
    },
    methods: {
      goModifyPasswored() {
        this.$router.push('modifyPasswored')
      },
      email(){
        this.$axios.get('/api/user/emailcode/')
          .then((data)=>{
            console.log(data)
            if(data.data.status=200){
              console.log(data.data.msg)
            }else{
              console.log(data.msg)
            }
          })
      },
      phone(){
        this.$axios.get('/api/user/phonecode/')
          .then((data)=>{
              console.log(data)
          })
      }
    }
  }
</script >


<style lang="less" scoped>
  @import '../../.././common/style/index.less';
  .safetyVenification{
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
  }
  .title{
    width: 100%;
  .h(70);
    display: flex;
    flex-direction: row;
    justify-content:center;
    align-items: center;
  }
  .title p {
    font-size:17px;
    color: #4193E5;
  }
  .content{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
  }
  .one{
    display: flex;
    width:92%;
    .h(45);
    background-color: #F7F7F7;
    border: none;
  }

  .two{
    display: flex;
    justify-content: space-between;
    width:92%;
    .h(45);
    border: 1px solid #EBEBEB;
    .margin(15,0,0,0);
  }
  .two_left{
    flex: 1;
    border: none;
  }


  input::-webkit-input-placeholder {
    /* placeholder颜色  */
    color: #999999;
    /* placeholder字体大小  */
    font-size: 14px;
    /* placeholder位置  */
    text-align: left;
  }
  .two button{
    background: transparent;
    border:none;
    outline: none;
  }
  .two button p{
    font-size: 14px;
    border-left:1px solid #999999 ;
    .padding(0,0,0,6);
    color:#4193E5;
  }

  .three{
    display: flex;
    width:92%;
    .h(45);
    background-color: #F7F7F7;
    border: none;
    .margin(15,0,0,0);
  }

  .four{
    display: flex;
    justify-content: space-between;
    width:92%;
    .h(45);
    border: 1px solid #EBEBEB;
    .margin(15,0,0,0);
  }
  .four_left{
    flex: 1;
    border: none;
  }
  input::-webkit-input-placeholder {
    /* placeholder颜色  */
    color: #999999;
    /* placeholder字体大小  */
    font-size: 14px;
    /* placeholder位置  */
    text-align: left;
    .padding(0, 0, 0, 10);
  }
  .four button{
    background: transparent;
    border:none;
    outline: none;
  }
  .four button p{
    font-size: 14px;
    border-left:1px solid #999999 ;
    .padding(0,0,0,6);
    color:#4193E5;
  }

  .five{
    display: flex;
    justify-content: space-between;
    width:92%;
    .h(45);
    border: 1px solid #EBEBEB;
    .margin(15,0,0,0);
  }
  .five_left{
    flex: 1;
    border: none;
  }
  input::-webkit-input-placeholder {
    /* placeholder颜色  */
    color: #999999;
    /* placeholder字体大小  */
    font-size: 14px;
    /* placeholder位置  */
    text-align: left;
    .padding(0, 0, 0, 10);
  }

  .six{
    display: flex;
    .margin(15,0,0,0);
    width:92%;
    .h(45);
  }
  .six button{
    width:100%;
    height: 100%;
    background: #4193E5;
    border:none;
    outline: none;
    border-radius: 4px;
  }
  .six button p{
    font-size: 14px;
    color: #FFFFFF;
  }



</style>
