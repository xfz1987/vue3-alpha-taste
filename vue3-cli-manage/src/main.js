import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCompositionApi from '@vue/composition-api'
import axios from 'axios'

axios.default.baseURL = 'http://127.0.0.1:3333'

Vue.config.productionTip = false
Vue.use(VueCompositionApi)
Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
