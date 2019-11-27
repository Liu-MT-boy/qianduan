import Vue from 'vue'
import App from './App.vue'
import router from './routers/index.js'

// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/styles/index.less'
// 让Vue实例上能够挂载element-ui的所有组件
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
