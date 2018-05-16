import Vue from 'vue'
import axios from './axios/index.js'
import App from './App'
import router from './router/index.js'
import antdVendor from './vendor/antd.js'
import store from './store'

Vue.config.productionTip = false

Vue.use({
  	install(Vue){
    	Vue.prototype.axios = axios
  	}
})

antdVendor.install(Vue)

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})