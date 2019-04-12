<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for='(item,index) in list' :key='index'>
                <!-- <img :src="item.picUrl" alt=""> -->
               
               
               <img :src='item'  alt="">
                
            </div>
        </div>
    </div>
</template>
<script>
import  Swiper from 'swiper'
import img1 from "../../../../static/img/1.jpg";
import img2 from "../../../../static/img/2.jpg";
import img3 from "../../../../static/img/3.jpg";
// import  ApiConfig from '../../../common/api/apiconfig.js'
export default {
    data(){
        
            return {
                list:[
                    img1,
                    img2,
                    img3
                   
                ]
            }
       },
   methods:{
       initswiper(){
           new Swiper('.swiper-container',{
               autoplay:true,
               loop:true
           })
       }
    //    initdata(){
    //     let url=ApiConfig.bannerApi
    //         this.$axios.get(url)
    //         .then((data)=>{
    //             // console.log(data)
    //             this.list=data.data.data.slider
    //             this.$nextTick(()=>{
    //                 this.initswiper()
    //             })
    //             // console.log(this.list)
    //          })
    //     }
   },
   
//    created(){
//      this.initdata()
//    },
   mounted(){
       this.initswiper()
   }

}

</script>
<style lang="less" scoped >
@import '../../../common/style/index.less';
@import'../../../../node_modules/swiper/dist/css/swiper.min.css';
.swiper-container{
        .margin(90,0,0,0);
        .w(375);
        .h(125);
        img{
            width: 100%;
            height: 100%;
        }
    }
</style>
