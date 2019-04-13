<template>
  <div id="app">
    <Header></Header>
    <router-view class="body"></router-view>
  </div>
</template>


<script>
  import Reg from '../src/components/pages/reg/reg.vue';
  import Login from '../src/components/pages/login/login.vue';
  import ForgetPs from '../src/components/pages/login/forgetPs.vue';
  import Safety from '../src/components/pages/login/safety.vue';
  import ResetPs from '../src/components/pages/login/resetPs.vue';
  import Header from '../src/components/common/Header.vue'
export default {
  name: 'App',
  components:{
    Reg,
    Login,
    ForgetPs,
    Safety,
    ResetPs,
    Header
  }
}
</script>



<style lang="less" scoped>
  @import "common/style/index";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background:#fff;
}
.body{
  .margin(44,0,0,0)
}
</style>
