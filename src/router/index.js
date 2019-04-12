import Vue from 'vue'
<<<<<<< HEAD
import Router from 'vue-router'
import Login from '../components/pages/login/login.vue'
import Reg from '../components/pages/reg/reg.vue'
import ForgetPs from "../components/pages/login/forgetPs.vue"
import ResetPs from '../components/pages/login/resetPs.vue'
import Safety from '../components/pages/login/safety.vue'

Vue.use(Router);
export default new Router({
  routes: [
    {
      path:"/login",
      name:'login',
      component:Login
    },
    {
      path:"/reg",
      name:"reg",
      component:Reg
    },
    {
      path:"/forgetps",
      name:"forgetps",
      component:ForgetPs
    },
    {
      path:"/safety",
      name:"safety",
      component:Safety
    },
    {
      path:"/resetps",
      name:"resetps",
      component:ResetPs
    },
    {
      path:"/",
      redirect:"/login"
    }
=======
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Login from '@/components/pages/login/login.vue'
import NoLogin from '@/components/pages/login/nologin.vue'
import User from '@/components/pages/user/index.vue'
import Authentication from '@/components/pages/user/authentication.vue'
import ModifyPasswored from '@/components/pages/user/modifyPasswored.vue'
import SafetyVenification from '@/components/pages/user/safetyVenification.vue'



const router= new VueRouter({
  routes: [
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
>>>>>>> 483264a16ae772a501124b5475b602c5f9797e4b
  ]
})

export default router
