import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/home',
    name: 'home',
    redirect: '/index',
    component: () => import('../views/layout/home.vue'),
    children: [
      {
        path: '/index',
        name: 'index',
        meta: { title: '首页' },
        component: () => import('../views/layout/index.vue')
      },
      {
        path: '/test',
        name: 'test',
        meta: { title: '测试' },
        component: () => import('../views/layout/test.vue')
      },
      {
        path: '/about',
        name: 'about',
        meta: { title: '关于我们' },
        component: () => import('../views/layout/about.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
