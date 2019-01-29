// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import store from "./store/index"
import './assets/css/style.css'
import './assets/css/reset.css'
import './assets/js/flexible.js'
import *as filters from './utils/filters.js';//导入所有的过滤器
import common from './utils/toast.js'; //toast方法
Vue.use(Mint);

Object.keys(filters).forEach(key=>{  
	Vue.filter(key, filters[key]);
});

Vue.config.productionTip = false;

Vue.prototype.$ajax = axios;

Vue.prototype.toast = common;

/*引入mockjs*/
require('./mock.js');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});



router.beforeEach((to, from, next) =>{
	if(to.meta.auth){
		if(store.state.setUset.isLogin == true){
			next();
		}else{
			next({
				path: '/login',
				query: {redirect: to.fullPath}
			})
		}
	}else{
		next();
	}
});
