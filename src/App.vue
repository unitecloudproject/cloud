<template>
  <div id="app">
    <Header></Header>
  <router-view></router-view>
  
  
  </div>
</template>

<script>
import Header from "../src/components/pages/homePage/m-header/header"
import banner from "../src/components/common/banner/banner"
import ApiConfig from "../src/common/api/apiconfig.js"
export default {
  name: 'App',
  components:{
    Header
  },
  created(){
    let url=ApiConfig.bannerApi
    this.$axios.get(url)
  .then((data)=>{
    // console.log(data)
  })
  }

}
</script>

<style>

</style>
