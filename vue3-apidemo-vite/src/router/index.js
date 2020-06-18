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
      {
        path: '/effectAndRective',
        name: 'effectAndRective',
        component: () => import(/* webpackChunkName: "effectAndRective" */ '../views/ReactivityAPI/effect.vue')
      },
      {
        path: '/shallowReactive',
        name: 'shallowReactive',
        component: () => import(/* webpackChunkName: "shallowReactive" */ '../views/ReactivityAPI/shallowReactive.vue')
      },
      {
        path: '/readonly',
        name: 'readonly',
        component: () => import(/* webpackChunkName: "readonly" */ '../views/ReactivityAPI/readonly.vue')
      },
      {
        path: '/shallowReadonly',
        name: 'shallowReadonly',
        component: () => import(/* webpackChunkName: "shallowReadonly" */ '../views/ReactivityAPI/shallowReadonly.vue')
      },
      {
        path: '/isReactive',
        name: 'isReactive',
        component: () => import(/* webpackChunkName: "isReactive" */ '../views/ReactivityAPI/isReactive.vue')
      },
      {
        path: '/isReadonly',
        name: 'isReadonly',
        component: () => import(/* webpackChunkName: "isReadonly" */ '../views/ReactivityAPI/isReadonly.vue')
      },
      {
        path: '/isProxy',
        name: 'isProxy',
        component: () => import(/* webpackChunkName: "isProxy" */ '../views/ReactivityAPI/isProxy.vue')
      },
      {
        path: '/markRaw',
        name: 'markRaw',
        component: () => import(/* webpackChunkName: "markRaw" */ '../views/ReactivityAPI/markRaw.vue')
      },
      {
        path: '/toRaw',
        name: 'toRaw',
        component: () => import(/* webpackChunkName: "toRaw" */ '../views/ReactivityAPI/toRaw.vue')
      },
      {
        path: '/ReactiveFlags',
        name: 'ReactiveFlags',
        component: () => import(/* webpackChunkName: "ReactiveFlags" */ '../views/ReactivityAPI/ReactiveFlags.vue')
      },
      {
        path: '/effectToScheduler',
        name: 'effectToScheduler',
        component: () => import(/* webpackChunkName: "effectToScheduler" */ '../views/ReactivityAPI/effectToscheduler.vue')
      },
      {
        path: '/watchEffect',
        name: 'watchEffect',
        component: () => import(/* webpackChunkName: "watchEffect" */ '../views/ReactivityAPI/watchEffect.vue')
      },
      {
        path: '/stopEffect',
        name: 'stopEffect',
        component: () => import(/* webpackChunkName: "stopEffect" */ '../views/ReactivityAPI/stopEffect.vue')
      },
      {
        path: '/watchVsEffect',
        name: 'watchVsEffect',
        component: () => import(/* webpackChunkName: "watchVsEffect" */ '../views/ReactivityAPI/watchVsEffect.vue')
      },
      {
        path: '/trackAndTrigger',
        name: 'trackAndTrigger',
        component: () => import(/* webpackChunkName: "trackAndTrigger" */ '../views/ReactivityAPI/trackAndTrigger.vue')
      },
      {
        path: '/ref',
        name: 'ref',
        component: () => import(/* webpackChunkName: "ref" */ '../views/ReactivityAPI/ref.vue')
      },
      {
        path: '/lazyEffect',
        name: 'lazyEffect',
        component: () => import(/* webpackChunkName: "lazyEffect" */ '../views/ReactivityAPI/lazyEffect.vue')
      },
      {
        path: '/effectOpt',
        name: 'effectOpt',
        component: () => import(/* webpackChunkName: "effectOpt" */ '../views/ReactivityAPI/effectOpt.vue')
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