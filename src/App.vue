<template>
  <div id="app">
    <router-view/>
    <Reg></Reg>
  </div>
</template>

<script>
  import Reg from '../src/components/pages/reg/reg.vue'
export default {
  name: 'App',
  components:{
    Reg
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
  margin-top: 60px;
}
</style>
