<template>
    <div class="consent">
    <ul>
        <div class="logo">
         <img src="../../../../../static/img/logo-01.png" alt="">
      </div>
     <li>
      <p class="p">ESO Token</p>
      <P class="p1">支持ETH丶TCH</P>
      </li>
      </ul>
      <div>
      <span>暂时无优惠，去官网了解更多
      </span>
      </div>
       <a class="a1" href="">官网:www.baidu.com</a>
       <a class="a2" href=""><img src="../../../../../static/img/logo-01.png" alt=""><span>钱包下载</span></a>
       <p class="p2">已结束</p>
        <p class="p3">—— —— —— ——</p>
        <b>兑换</b>
         <input type="text"   value="暂无优惠" disabled>
         <ul class="ul">
             <li>25%</li>
              <li>50%</li>
               <li>75%</li>
                <li>100%</li>
    </ul>
     <b>需要</b>
            <input type="text"  value="暂无优惠"  disabled>
            <button class="but1" disabled>充值</button>
            <button class="but2" disabled>兑换</button>
        <p class="p4">
            如果你无法简洁的表达你的想法，那只说明你还不够了解它。  -- 阿尔伯特·爱因斯坦如果你无法简洁的表达你的想法，那只说明你还不够了解它。  -- 阿尔伯特·爱因斯坦如果你无法简洁的表达你的想法，那只说明你还不够了解它。  -- 阿尔伯特·爱因斯坦如果你无法简洁的表达你的想法，那只说明你还不够了解它。  -- 阿尔伯特·爱因斯坦如果你无法简洁的表达你的想法，那只说明你还不够了解它。  -- 阿尔伯特·爱因斯坦如果你无法简洁的表达你的想法，那只说明你还不够了解它。  -- 阿尔伯特·爱因斯坦
        </p>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
    data(){
       return{
           list:[
               {
                   img:"../../../../../static/img/logo-01.png"
               }
           ]
       }
    },
    methods:{
        scroll(){
         new BScroll(".consent",{click:true})
      },
      methods(){
           this.scroll()
      }
    }
}
</script>
<style lang="less" scoped>
@import '../../../../common/style/index.less';
.consent{
   padding-top: 90px;
    ul{
        display: flex;
       
    .logo{
        .w(60);
        .h(60);
        display: inline-block;
      
        .margin(20,0,0,20);
        img{
            .w(60);
        .h(60);
        }
    }
        li{
            display: flex;
            flex-direction: column;
     .p{
        display: inline;
        font-size: 16px;
        color: rgba(16, 16, 16, 1);
        .margin(24,0,0,16);
        .w(84);
        .h(23);
        
    }
    .p1{
       display: inline;
        font-size: 12px;
        color: rgba(94, 112, 129, 1);
        .margin(4,0,0,16);
       .w(86);
       .h(23);
        
    }
        } 
    
    }
    div{
        span{
        display: block;
        font-size: 18px;
        color:rgba(16, 16, 16, 1);
        .margin(29,0,0,21);
        .w(335);
        .h(52);
        
    }
    }
    .a1{
       display: inline-block;
       font-size: 12px;
       color:rgba(94, 112, 129, 1);
       .margin(36,0,0,21);
       .lh(17);
    }
    .a2{
        img{
            display: inline-block;
            .w(16);
            .h(16);
            border:1px solid #cccccc;
            .margin(42,0,0,134)
        }
        span{
            display: inline;
            font-size: 12px;
            color: rgba(98, 112, 127, 1);
            .margin(39,0,0,3);
            .lh(18);
        }
    }
    .p2{
      
      text-align: center;
      font-size: 12px;
      color:black;
      .margin(19,0,0,0)
    }
    .p3{
        text-align: center;
      font-size: 12px;
      color:black;
      .margin(7,0,0,0)
    }
    b{
        font-size: 12px;
        display: block;
        .margin(6,0,0,23);
        
    }
    input{
        .w(330);
        .h(38);
        .margin(4,0,0,22);
        background-color: rgb(235, 235, 228);
        border: none;
    }
    .ul{
        display: flex;
        .margin(10,23,0,23);
        justify-content: space-around;
        li{
            .w(70);
            .h(28);
            border:1px solid #cccccc;
            text-align: center;
           line-height: 28px;
        }
    }
    .but1{
        .w(95);
        .h(34);
        background: #0F86CB 100%;
        font-size: 14px;
        color: white;
        .margin(15,0,0,23);
        border:none
    }
    .but2{
        .w(95);
        .h(34);
        background:#62707F 100%;
        font-size: 14px;
        color: white;
        .margin(15,0,0,140);
        border:none
    }
    .p4{
        font-size: 14px;
        color: rgba(16, 16, 16, 1);
        display: flex;
        flex-wrap: wrap;
        .w(330);
        .margin(20,0,0,23)
    }
}
</style>