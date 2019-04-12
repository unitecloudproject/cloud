<template>
    <div id='aaa'>
        <div id='extract'>
            提币
        </div>
        <div id='box'>
           <input type="text" value='输入提币金额'>
        </div>
        <div id='box1'
        @click="goaDdress">
            <div id='icon'>

            </div>
            <div id='span'>
                添加地址 0/6
            </div>
        </div>
        <div id='content'>
            <div id='eth'>
               <p>手续费: 0.001ETH</p> 
               <p>实际到账: 0ETH</p>
            </div>
            <div id='box'
            @click="goaDdress">
               提币
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    methods:{
        goaDdress(){
            this.$router.push('/money/extract/ddress')
        }
    }
    
}
</script>
<style lang="less" scoped>
@import url('../../style/index.less');
#aaa{
    position:fixed;
    top:56px;
    bottom:0;
    width:100%;
    background:#fff;
    #extract{
        width:37px;
        height:70px;
        color:#0087D1;
        font-size:18px;
        text-align:center;
        line-height:70px;
        margin-left:170px;
    }
    #box{
        input{
        width:330px;
        height:43px;
        margin-left:23px;
        border:1px solid #DDE2ED;
        color:#DDE2ED;
        font-size:12px;
        }
    }
    #box1{
        width:115px;
        height:34px;
        border:1px dashed  #00A3FA;
        margin-top:39px;
        margin-left:130px;
        
    
    #icon{
        width:16px;
        height:16px;
        .margin(8,0,10,10);
        background:#00A3FA;
        border-radius:10px;
        float:left;
    }
   #span{
     width:75px;
     height:20px;
     .margin(7,7,7,33);
      font-size:12px;
     color:#00A3FA ;
     line-height:20px;
     
   }
    }
    #content{
        width:100%;
        height:50px;
        border:1px solid #eee;
        margin-top:356px;
        #eth{
            width:108px;
            height:46px;
            float:left;
            font-size:12px;
            color:#62707F;
             .margin(6,0,0,10);
        }
        #box{
            width:115px;
            height:50px;
            background:#0F86CB;
           float:right;
           font-size:14px;
           color:#FFFFFF;
           line-height:50px;
           text-align:center;
        }
    }
}
</style>
