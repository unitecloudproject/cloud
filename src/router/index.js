import Vue from 'vue'
import Router from 'vue-router'
import Reg from '../components/pages/reg/reg.vue'
import ForgetPs from "../components/pages/login/forgetPs.vue"
import ResetPs from '../components/pages/login/resetPs.vue'
import Safety from '../components/pages/login/safety.vue'
import QuanBu from '../components/pages/homePage/pages/quanbu.vue'
import HomePage from '../components/pages/homePage/pages/homePage.vue'
import MuJiZhong from '../components/pages/homePage/pages/mujizhong.vue'
import WeiKaiShi from '../components/pages/homePage/pages/weikaishi.vue'
import YiJieShu from '../components/pages/homePage/pages/yijieshu.vue'
import Login from '@/components/pages/login/login.vue'
import NoLogin from '@/components/pages/login/nologin.vue'
import User from '@/components/pages/user/index.vue'
import Authentication from '@/components/pages/user/authentication.vue'
import ModifyPasswored from '@/components/pages/user/modifyPasswored.vue'
import SafetyVenification from '@/components/pages/user/safetyVenification.vue'
import Money from '../components/pages/money/money'
import Recharge from '../components/pages/money/recharge'
import Extract from '../components/pages/money/extract'
import Ddress from '../components/pages/money/ddress'
import Security from '../components/pages/money/security'
import Success from '../components/pages/money/Success'
import Record from '../components/pages/money/record'

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/login",
      name: 'login',
      component: Login
    },
    {
      path: "/reg",
      name: "reg",
      component: Reg
    },
    {
      path: "/forgetps",
      name: "forgetps",
      component: ForgetPs
    },
    {
      path: "/safety",
      name: "safety",
      component: Safety
    },
    {
      path: "/resetps",
      name: "resetps",
      component: ResetPs
    },
    {
      path: "/",
      redirect: "/login"
    },
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
    {
      path:'/money',
      name:'money',
      component:Money,
      children:[
        {
          path:'recharge',
          name:'recharge',
          component:Recharge
        },
        {
          path:'extract',
          name:'extract',
          component:Extract,
          children:[
            {
              path:'ddress',
              name:'ddress',
              component:Ddress,
              children:[
                {
                  path:'security',
                  name:'security',
                  component:Security,
                  children:[{
                    path:'success',
                    name:'success',
                    component:Success,
                    children:[{
                      path:'record',
                      name:'record',
                      component:Record
                    }]
                  }]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      path:'/',
      redirect:'/money'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/nologin',
      name: 'NoLogin',
      component: NoLogin,
    },
    {
      path: '/user',
      name: 'User',
      component: User,
    },
    {
      path:'/user/authentication',
      name:'Authentication',
      component:Authentication
    },
    {
      path:'/user/modifyPasswored',
      name:'ModifyPasswored',
      component:ModifyPasswored
    },
    {
      path:'/user/safetyVenification',
      name:'SafetyVenification',
      component:SafetyVenification
    },
    {
      path:'/',
      component:User
      //重定向
    }
  ]
})



