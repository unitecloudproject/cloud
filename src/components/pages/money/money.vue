<template>
  <div id='app'>
      
       <div id='content'>
          充币提币
       </div>
       <div id='box'>
            <div id='first'>
               <div id='icon_1'>

               </div>
               <span>
                   ETH
               </span>
            </div>
            <div id='last'>
                <div id='let'>
                        <span>
                            可以用        0.00000158
                        </span>
               </div>
               <div id='box1'>
                    <div id='blue' 
                    @click="goRecharge">
                      充币
                    </div>
                    <div id='origin'
                    @click="goExtract">
                    提币
                    </div>
               </div>
            </div>
       </div>
       <div id='box2'>
            <div id='first'>
               <div id='icon_1'>

               </div>
               <span>
                   ETH
               </span>
            </div>
            <div id='last'>
                <div id='let'>
                        <span>
                            可以用        0.00000158
                        </span>
               </div>
               <div id='box1'>
                    <div id='blue'>
                      充币
                    </div>
                    <div id='origin'>
                    提币
                    </div>
               </div>
            </div>
       </div>
        <router-view></router-view>
  </div>
</template>
<script>
export default {
    methods:{
        goRecharge(){
            this.$router.push('/money/recharge')
        },
        goExtract(){
            this.$router.push('/money/extract')
        }
    }
    
}
</script>
<style lang="less" scoped>
@import url('../../style/index.less');

#content{
    width:100%;
    height:70px;
    line-height:70px;
    text-align:center;
    font-size:18px;
    color:#0087D1;
    font-family:Arial; 
}
#box{
    width:100%;
    height:108px;
    border-top:1px solid #eee;
    border-bottom:1px solid #eee;

#first{
    width:100px;
    height:40px;
    .margin(9,0,0,10);
    span{
          color:#62707F;
          font-size:16px;
          display: block;
          line-height:40px;
          margin-left:57px;
          
    }
}
#icon_1{
    width:40px;
    height:40px;
    background:#0087D1;
    border-radius:20px;
    float:left;
}
#last{
    width:100%;
    height:30px;
    margin-top:22px;
    
}
#let{
    float:left;
    span{
        font-size:14px;
        color:#62707F ;
        display:block;
        line-height:30px;
        margin-left:13px;
    }
}
#box1{
    width:154px;
    height:30px;
    float:right;
    margin-right:13px;
    #blue{
        width:74px;
        height:30px;
        background:#0F86CB;
        float:left;
        line-height:30px;
        text-align:center;
        font-size:14px;
        color:#fff;
        border-radius:5px;}
   #origin{
        width:74px;
        height:30px;
        background:#FF9D12;
        float:right;
         line-height:30px;
        text-align:center;
        font-size:14px;
        color:#fff;
        border-radius:5px;
    }
   }
}
#box2{
    width:100%;
    height:108px;
    border-top:1px solid #eee;
    border-bottom:1px solid #eee;
    margin-top:10px;

#first{
    width:100px;
    height:40px;
    .margin(9,0,0,10);
    span{
          color:#62707F;
          font-size:16px;
          display: block;
          line-height:40px;
          margin-left:57px;
          
    }
}
#icon_1{
    width:40px;
    height:40px;
    background:#0087D1;
    border-radius:20px;
    float:left;
}
#last{
    width:100%;
    height:30px;
    margin-top:22px;
    
}
#let{
    float:left;
    span{
        font-size:14px;
        color:#62707F ;
        display:block;
        line-height:30px;
        margin-left:13px;
    }
}
#box1{
    width:154px;
    height:30px;
    float:right;
    margin-right:13px;
    #blue{
        width:74px;
        height:30px;
        background:#0F86CB;
        float:left;
        line-height:30px;
        text-align:center;
        font-size:14px;
        color:#fff;
        border-radius:5px;}
   #origin{
        width:74px;
        height:30px;
        background:#FF9D12;
        float:right;
         line-height:30px;
        text-align:center;
        font-size:14px;
        color:#fff;
        border-radius:5px;
    }
   }
}
</style>

