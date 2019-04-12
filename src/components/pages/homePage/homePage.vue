
<template>
<div id="homePage">
  <!--<button @click="asideShow">按钮</button>-->
  <!--<Aside v-show="state"></Aside>-->
  <User></User>
</div>

</template>


<script>
//  import Aside from '../../common/aside/nologin.vue'
//  import Aside from '../../common/aside/login.vue'
  import User from '.././user/index.vue'


  export default {
    components:{User},
    data(){
      return{
        state:false
      }
    },
    methods:{
      asideShow(){
        this.state=!this.state
        console.log(this.state)
      }
    },
    created(){
      this.asideShow()
    },
  }
</script>
