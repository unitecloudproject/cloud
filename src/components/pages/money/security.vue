<template>
    <div id='con'>
        <div id='header'>
            安全验证
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
       <div id='box2'
       @click="goSuccess">
            完成
       </div>
       <div id='icon'
       @click="goDdress">

       </div>
       <router-view></router-view>
    </div>
</template>
<script>
export default {
    methods:{
        goDdress(){
            this.$router.push('/money/extract/ddress')
        },
        goSuccess(){
            this.$router.push('/money/extract/ddress/security/success')
        }
    }
    
}
</script>
<style lang="less" scoped>
@import url('../../style/index.less');
#con{
    position:fixed;
    top:56px;
    bottom:0;
    width:100%;
    background:#fff;
    #header{
        width:73px;
        height:70px;
        margin-left:153px;
        font-size:18px;
        color:#0087D1;
        line-height:70px;
        text-align:center;
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
    #box2{
        width:330px;
        height:43px;
        margin-top:41px;
        margin-left:23px;
        background:#0F86CB;
        color:#FFFFFF;
        font-size:14px;
        line-height:43px;
        text-align:center;
    }
    #icon{
        width:40px;
        height:40px;
        margin-top:30px;
        margin-left:168px;
        background-color:#667C89;
    }
}
</style>
