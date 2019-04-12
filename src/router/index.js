import Vue from 'vue'
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
  ]
})
