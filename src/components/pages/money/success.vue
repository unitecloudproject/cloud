<template>
    <div id='success'>
        <div id='icon'>
         
        </div>
        <div id='content'>
   您的提币请求已被确认,可到提现记录页面查看状态
        </div>
        <div id='fode'>
            <div id='back'>
            返回首页
            </div>
            <div id='record'
            @click='goRecord'>
            提笔记录
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    methods:{
     goRecord(){
         this.$router.push('/money/extract/ddress/security/success/record')
     }
    }
}
</script>
<style lang="less" scoped>
@import url('../../style/index.less');
#success{
    position:fixed;
    top:56px;
    bottom:0;
    width:100%;
    background:#fff;
    #icon{
        width:80px;
        height:80px;
        margin-top:35px;
        margin-left:148px;
        background:#1DBF74;
    }
    #content{
        width:330px;
        height:40px;
        margin-top:40px;
        margin-left:23px;
        font-size:14px;
        color:#667C89;
    }
    #fode{
        width:288px;
        height:34px;
        margin-top:60px;
        margin-left:43px;
        display:flex;
        justify-content:space-between;
        #back{
            width:95px;
            height:34px;
            background:#0F86CB;
            font-size:14px;
            color:#FFFFFF;
            line-height:34px;
            text-align:center;
        }
        #record{
             width:95px;
            height:34px;
            background:#FF9D12;
            font-size:14px;
            color:#FFFFFF;
            line-height:34px;
            text-align:center;
        }
    }
}
</style>
