<template>
  <div id="app">
    <router-view></router-view>
    <Login></Login>
  </div>
</template>

<script>
  import Reg from '../src/components/pages/reg/reg.vue';
  import Login from '../src/components/pages/login/login.vue';
  import ForgetPs from '../src/components/pages/login/forgetPs.vue';
  import Safety from '../src/components/pages/login/safety.vue';
  import ResetPs from '../src/components/pages/login/resetPs.vue';
export default {
  name: 'App',
  components:{
    Reg,
    Login,
    ForgetPs,
    Safety,
    ResetPs
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
