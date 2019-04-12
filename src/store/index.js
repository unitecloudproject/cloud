import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import user from './user/'
import aside from './aside'
import homePage from './homePage'
import money from './money'
import reg from './reg'
import login from './login'
const store=new Vuex.Store({
  modules:{
    user,aside,homePage,money,reg,login
  }
});
export default store;
