<template>
    <div id='box'>
        <div id='box1'>
        添加钱包地址
        </div>
        <div id='box2'>
           <input type="text" value='     钱包地址'>
        </div>
         <div id='box3'>
           <input type="text" value='     地址备注'>
        </div>
        <div id='box4'>
              &nbsp;323******@qq.com
        </div>
        <div id='box5'>
          <input type="text" value='邮箱验证码'>
        </div>
         <div id='box6'>
              167*****6655
        </div>
        <div id='box7'>
          <input type="text" value='手机号验证'>
        </div>
         <div id='box8'>
          <input type="text" value='谷歌验证码'>
        </div>
         <div id='box9'
         @click="goSecurity">
              确定
        </div>
        <div id='icon'
        @click="goExteact">
          
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    methods:{
        goSecurity(){
            this.$router.push('/money/extract/ddress/security')
        },
        goExteact(){
            this.$router.push('/money/extract')
        }
    }
    
}
</script>
<style lang="less" scoped>
@import url('../../style/index.less');
#box{
    position:fixed;
    top:56px;
    bottom:0;
    width:100%;
    background:#fff;
    #box1{
        width:109px;
        height:54px;
        font-size:18px;
        color:#0087D1 ;
        margin-left:135px;
        line-height:54px;
        text-align:center;
    }
    #box2{
        input{
        width:330px;
        height:40px;
        border:1px solid #DDE2ED;
        margin-top:1px;
        margin-left:23px;
        color:#DDE2ED ;
        font-size:12px;
    }
    }
    #box3{
        input{
        width:330px;
        height:40px;
        border:1px solid #DDE2ED;
        margin-top:7px;
        margin-left:23px;
        color:#DDE2ED ;
        font-size:12px;
    }
    }
    #box4{
         width:330px;
        height:40px;
        background:#F7F7F7;
        margin-top:7px;
        margin-left:23px;
        font-size:12px;
        color:#AAAAAA ;
        line-height:40px;
        
    }
    #box5{
         input{
        width:330px;
        height:40px;
        border:1px solid #DDE2ED;
        margin-top:7px;
        margin-left:23px;
        color:#DDE2ED ;
        font-size:12px;
    }
    }
     #box6{
         width:330px;
        height:40px;
        background:#F7F7F7;
        margin-top:7px;
        margin-left:23px;
        font-size:12px;
        color:#AAAAAA ;
        line-height:40px;
        
    }
    #box7{
        input{
        width:330px;
        height:40px;
        border:1px solid #DDE2ED;
        margin-top:7px;
        margin-left:23px;
        color:#DDE2ED ;
        font-size:12px;
    }
    }
    #box8{
         input{
        width:330px;
        height:40px;
        border:1px solid #DDE2ED;
        margin-top:7px;
        margin-left:23px;
        color:#DDE2ED ;
        font-size:12px;
    }
    }
    #box9{
        width:330px;
        height:40px;
        margin-top:7px;
        margin-left:23px;
        background:#0F86CB;
        font-size:14px;
        color:#FFF;
        line-height:40px;
        text-align:center;
        }
        #icon{
            width:40px;
            height:40px;
            margin-top:10px;
            margin-left:168px;
            background:#667C89;
        }
}
</style>

