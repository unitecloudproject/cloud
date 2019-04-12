<template>
  <div id="app">
    <Header></Header>
   <router-view></router-view>
  </div>
</template>

<script>
import Money from './components/pages/money/money'
import Header from './components/pages/money/header'
export default {
  name: 'App',
  components:{
    Money,Header
  }
}
</script>

<style>
app{
  background:#fff;
}
</style>
