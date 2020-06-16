import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  { 
    path: '/', 
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    // redirect: '/counterRef',
    children: [
      {
        path: '/counterRef',
        name: 'counterRef',
        component: () => import(/* webpackChunkName: "counterRef" */ '../views/CounterRef.vue')
      },
      {
        path: '/counterReactive',
        name: 'counterReactive',
        component: () => import(/* webpackChunkName: "counterReactive" */ '../views/CounterReactive.vue')
      },
      {
        path: '/testStore',
        name: 'testStore',
        component: () => import(/* webpackChunkName: "testStore" */ '../views/TestStore.vue')
      },
      {
        path: '/rgb',
        name: 'rgb',
        component: () => import(/* webpackChunkName: "RGB" */ '../views/RGB.vue')
      },
      {
        path: '/reactiveDemo',
        name: 'reactiveDemo',
        component: () => import(/* webpackChunkName: "reactiveDemo" */ '../views/ReactiveDemo/index.vue')
      },
      { path: '/:catchAll(.*)', component: NotFound }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router