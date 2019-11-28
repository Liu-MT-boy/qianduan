// 引入vue
import Vue from 'vue'
// 引入vue-router
import VueRouter from 'vue-router'
// 引入路由所映射的组件
import Login from '@/views/login.vue'
import Index from '@/views/index.vue'
// vue
Vue.use(VueRouter)
// 创建路由对象
let router = new VueRouter({
  routes: [
    {
      name: 'Login',
      path: '/login',
      component: Login
    },
    {
      name: 'Index',
      path: '/index',
      component: Index
    }
  ]
})

// 添加导航守卫
router.beforeEach((to, from, next) => {
  if (to.path !== '/login') {
    let token = localStorage.getItem('heima_back_39_token')
    if (token) {
      next()
    } else {
      next({ path: '/login' })
    }
  } else {
    next()
  }
})
export default router
