import { createApp } from 'vue'
import axios from 'axios'
import App from './App.vue'
import './index.css'

import router from './router'
import store from './store'

const app = createApp(App)

// vue3 目前还没有devTools
app.config.devtools = false

// 全局ctx(this) 上挂载 $axios
app.config.globalProperties.$axios = axios

// app.use(/* ... */)
// app.mixin(/* ... */)
// app.component(/* ... */)
// app.directive(/* ... */)


app.use(router)
  .use(store)
  .mount('#app')
