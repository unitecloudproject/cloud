import { Popup } from 'mint-ui';
Vue.component(Popup.name, Popup);
<template>
    <div id="aaa">
        <div id='box1'>
            充币
        </div>
        <div id='code'>
          二维码
        </div>
        <div id='box2'>
            dadadadjalkjdlakjdla
        </div>
        <div id='box3'
        >
              <div id='Preservation'>
                  保存二维码
              </div>
              <div id='copy'>
                   复制地址
              </div>
        </div>
        <div id='box4'>
             转入说明
        </div>
        <div id='box5'>
           <p>1.转入是自动的，货币转账需要整个网络进行确认，达到6个确认后您的货币会自动充值到您的账户。</p>
           <p>2.此地址是您唯一且独自的使用的转入地址，你可以同时进行多次充值，也可将此地址作为您在矿池的付款地址</p>
           <p>3.请仔细确认该地址币种，任何其他币种充值到该地址将不可找回。</p>
        </div>
    </div>
</template>
<script>
export default {
    
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

#box1{
    width:100%;
    height:65px;
    font-size:18px;
    font-family: Arial;
    line-height:65px;
    text-align:center;
    color:#0087D1;
}
#code{
    width:200px;
    height:175px;
    border:1px solid #eee;
    margin-left:87px;
    line-height:175px;
    text-align:center;
}
#box2{
    width:188px;
    height:23px;
    color:#101010;
    font-size:14px;
    margin-left:93.5px;
    line-height:23px;
    text-align:center;
    margin-top:25px;
}
#box3{
    width:213px;
    height:38px;
    margin-left:82px;
    margin-top:27px;
    #Preservation{
        width:100px;
        height:38px;
        background:#FF9D12;
        border-radius:4px;
        font-size:14px;
        color:#fff;
        line-height:38px;
        text-align:center;
        float:left;
    }
     #copy{
        width:100px;
        height:38px;
        background:#0F86CB ;
        border-radius:4px;
        font-size:14px;
        color:#fff;
        line-height:38px;
        text-align:center;
        float:right;
    }
}
#box4{
    width:57px;
    height:23px;
    margin-left:22px;
    margin-top:92px;
    font-size:14px;
    color:#8697A6;
    line-height:23px;
    text-align:center;
}
#box5{
    width:330px;
    height:124px;
    margin-top:13px;
    margin-left:22px;
    color:#8297A8;
    line-height:19px;
    text-align:left;
    font-size:13px;
}
}
</style>
