<template>
    <div id='text'>
         <div id='header'>
          <div id='logo'>

          </div>
          <div id='icon'>
              
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
#header{
    background:#62707F 100%;
    width:100%;
    height:56px;
    display:flex;
    justify-content:space-between;
    z-index:10;
}
#logo{
    width:30px;
    height:30px;
     background:#fff;
     .margin(13,0,13,13)
}
#icon{
    width:24px;
    height:24px;
     background:#fff;
     .margin(13,13,13,0)
}
</style>
