<template>
    <div class='tab'>
          <router-link 
           tag='div'
           to='/quanbu'
          
          >全部</router-link>
          <router-link 
           tag='div'
           to='/mujizhong'
           name="test"
          
          >筹集中</router-link>
          <router-link 
           tag='div'
           to='/weikaishi'
          
          >未开始</router-link>
          <router-link 
           tag='div'
           to='/yijieshu'
           
          >已结束</router-link>
           
    </div>
</template>
<script>

export default {

}
</script>
<style lang="less" scoped>
@import '../../../common/style/index.less';
  .tab{
      display: flex;
    //   position:fixed;

      flex-direction: row;
      justify-content: space-around;
      .w(375);
      .h(30);
      .top(0);
      div{
          font-size: 14px;
          color:#cccc;
          .lh(20);
          .margin(13,0,0,0)
      }
      .router-link-active{
          border-bottom: 1px solid orange;
          font-weight:800;
          color: white;
      }
  }
</style>
