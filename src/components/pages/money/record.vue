<template>
    <div id='record'>
         <div id='nav'> 
             <div id='nav_1'
            >
               <a>充币记录</a>
             </div>
             <div id='nav_2'
             >
             <a>提币记录</a>
             </div>
         </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
@import url('../../style/index.less');
#record{
    position:fixed;
    top:56px;
    bottom:0;
    width:100%;
    background:#fff;
    #nav{
       .w(375);
       .h(36);
       background:#62707F;
       #nav_1{
           .w(187.5);
            font-size:14px;
            color:#fff;
            line-height:36px;
            text-align:center;
            float:left;
       }
       #nav_2{
            .w(187.5);
            font-size:14px;
            color:#fff;
            line-height:36px;
            text-align:center;
            float:right;
       }
      a:hover{
            border-bottom:#FF9D12 100%;
        }
    }
}
</style>
