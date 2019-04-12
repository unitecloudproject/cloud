// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios';
import LazyLoad from 'vue-lazyload'
import store from './store';
import './common/style/reset.css'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
import './common/font/iconfont.css'

Vue.use(Mint);
Vue.config.productionTip = false
Vue.prototype.$axios=Axios;
Vue.use(LazyLoad,{

});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
