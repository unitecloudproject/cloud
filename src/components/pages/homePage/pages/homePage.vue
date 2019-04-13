<template>
    <div>
      <Tab></Tab>
      <router-view></router-view>
    </div>
</template>
<script>
  import Tab from '@/components/common/tab/tab.vue'
  import Quanbu from './quanbu.vue'
  import Mujizhong from './mujizhong.vue'
  import Weikaishi from './weikaishi.vue'
  import Yijieshu from './yijieshu.vue'
    export default {
      components:{
        Quanbu,
        Tab,
        Mujizhong,
        Weikaishi,
        Yijieshu
      }
    }
</script>
<style>

</style>
