import Vue from 'vue'
import Router from 'vue-router'
import QuanBu from '../components/pages/homePage/pages/quanbu.vue'
import MuJiZhong from '../components/pages/homePage/pages/mujizhong.vue'
import WeiKaiShi from '../components/pages/homePage/pages/weikaishi.vue'
import YiJieShu from '../components/pages/homePage/pages/yijieshu.vue'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path:'/',
            redirect:'quanbu'
        },
        {
            path: '/quanbu',
            component: QuanBu,
            children: []
        },
        {
            path: '/mujizhong',
            component: MuJiZhong,
            children: []
        },
        {
            path: '/weikaishi',
            component: WeiKaiShi,
            children: []
        },
        {
            path: '/yijieshu',
            component: YiJieShu,
            children: []
        },

    ]
})