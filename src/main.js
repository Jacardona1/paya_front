import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import layoutLogin from "./layouts/Login"
import layoutDashboard from "./layouts/Dashboard"
import VueSession from 'vue-session'

Vue.use(VueAxios, axios)
Vue.use(VueSession)



Vue.component("layout-Dashboard",layoutDashboard);
Vue.component("layout-Login",layoutLogin);

Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
