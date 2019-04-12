import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Money from '../components/pages/money/money'
import Recharge from '../components/pages/money/recharge'
import Extract from '../components/pages/money/extract'
import Ddress from '../components/pages/money/ddress'
import Security from '../components/pages/money/security'
import Success from '../components/pages/money/Success'
import Record from '../components/pages/money/record'
const router=new Router({
  routes: [
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
      }
  ]
})
export default router
