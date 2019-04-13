<template>
<div class="content">
  <Tab></Tab>
   <banner class="banner"></banner>
    <ul>
      <li v-for="(item,index) in list" :key="index">
        <div class="box" >
         <img width="74" height="74" src="../../../../../static/img/logo-01.png" alt="">
          <div>
              <p class="p">{{item.name}}</p>
              <p class="p1">{{item.text}}</p>

          </div>
        </div>
      </li>
    </ul>







   </div>
</template>
<script>
  import Tab from '@/components/common/tab/tab.vue'
import banner from "../../../common/banner/banner"
import BScroll from 'better-scroll'
export default {
     name: 'App',
  components:{
    banner,
    Tab
  },
  methods:{
      scroll(){
         new BScroll(".content",{click:true})
      }
  },
  created(){
    this.list.map((item,index)=>{
      console.log(item.name)
      return item.name
    })
  },
  mounted(){
    this.scroll()
  },
  data(){
    return{
      list:[
        {
          img:"../../../../../static/img/logo-01.png",
          name:"ESC",
          text:"商用分布式应用的区块链操作系统"
        },
        {
          name:"ESC",
          text:"商用分布式应用的区块链操作系统"
        },
        {
          name:"ESC",
          text:"商用分布式应用的区块链操作系统"
        },
        {
          name:"ESC",
          text:"商用分布式应用的区块链操作系统"
        },

        {
          name:"ESC",
          text:"商用分布式应用的区块链操作系统"
        },
      ]
    }
  }




}
</script>
<style lang="less" scoped>
 @import '../../../../common/style/index.less';
.content{

.banner{
  .margin(94,0,0,0)
}

   ul{

     list-style: none;
     li{

       list-style: none;
       .box{
         display: flex;
         .w(340);
         .h(110);
         border:1px solid rgba(242, 240, 242, 1);
         .margin(19,17,18,18);

         img{

            display: inline-block;
            .margin(18,0,18,20);



         }
         div{
           .p{
             font-size: 18px;
             color: rgba(0, 135, 209, 1);
             .margin(20,0,0,16)

           }
           .p1{
             font-size: 12px;
             color: rgba(143, 149, 174, 1);
             .margin(13,0,0,16)

           }
         }
       }
     }
   }
}

</style>

