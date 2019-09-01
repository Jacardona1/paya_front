import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import layoutLogin from "./layouts/Login"
import layoutDashboard from "./layouts/Dashboard"


Vue.component("layout-Dashboard",layoutDashboard);
Vue.component("layout-Login",layoutLogin);

Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
