import Vue from 'vue'
import VueRouter from 'vue-router'

import { routes } from './routes'
import { store } from './store/index.js'
import Accounting from 'accounting-js'
import App from './App.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  }
})

Vue.filter('currency', function(val){
  return Accounting.formatMoney(val)
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
