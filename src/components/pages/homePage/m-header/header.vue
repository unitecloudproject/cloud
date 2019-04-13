<template>
    <div class="header">
        <div>
       <div class="logo" >
         <img :src='logo' alt="">
       </div>
        <span>云筹</span>
        <div class="img1">
          <img src="../../../../../static/img/logo-01.png" alt="">
        </div>
        </div>
        <Tab></Tab>
    </div>
</template>
<script>
import Tab from '../../../common/tab/tab.vue'
import logo from "../../../../../static/img/logo-01.png";
import img from "../../../../../static/img/logo-01.png"
export default {
  data(){
    return{
      logo:logo,
      img:img,
    }
  },
    name:"Header",
    components:{
    Tab
  }
}
</script>
<style lang="less" scoped>
 @import '../../../../common/style/index.less';
   .header{
     .top(0);
     .w(375);
     .h(90);
     position: fixed;
     background-color:rgba(65, 147, 229, 1);
     display: flex;
     flex-direction: column;
     z-index: 100;

     div {
         .w(375);
         .h(45);
         display: flex;
     .logo{
         .w(30);
         .h(30);

         .margin(14,0,0,13);
        display: inline-block;
        img{
          .w(30);
         .h(30);

        }

     }
     span{
       font-size: 14px;
       color:#FFFFFFFF;
       .w(29);
       .h(23);
       .margin(16,0,0,8)

     }
     .img1{
         .w(24);
         .h(24);
        .margin(16,0,50,256);
      img{
         .w(24);
         .h(24);
      }

     }
   }
   }
</style>
