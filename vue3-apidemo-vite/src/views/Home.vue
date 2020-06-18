<template>
  <div class="home">
    <p>Hello, vue3</p>
  </div>
  <div class="nav">
    <router-link to="/counterRef">counterRef</router-link> |
    <router-link to="/counterReactive">counterReactive</router-link> |
    <router-link to="/testStore">testStore</router-link> |
    <router-link to="/rgb">RGB</router-link> |
    <router-link to="/reactiveDemo">reactiveDemo</router-link> |
    <router-link to="/xxx">notFound</router-link><br/>
    <router-link to="">深入理解 Vue3 Reactivity API</router-link><br/>
    <router-link to="/effectAndRective">effect与reactive</router-link> |
    <router-link to="/shallowReactive">shallowReactive</router-link> |
    <router-link to="/readonly">readonly</router-link> |
    <router-link to="/shallowReadonly">shallowReadonly</router-link> |
    <router-link to="/isReactive">isReactive</router-link> |
    <router-link to="/isReadonly">isReadonly</router-link> |
    <router-link to="/isProxy">isProxy</router-link> |
    <router-link to="/markRaw">markRaw</router-link> |
    <router-link to="/toRaw">toRaw</router-link> |
    <router-link to="/ReactiveFlags">ReactiveFlags</router-link> |
    <router-link to="/effectToScheduler">effect - scheduler</router-link> |
    <router-link to="/watchEffect">watchEffect</router-link> |
    <router-link to="/stopEffect">停止一个effect副作用</router-link> |
    <router-link to="/watchVsEffect">watch Vs effect</router-link> |
    <router-link to="/trackAndTrigger">track 与 trigger</router-link> |
    <router-link to="/ref">ref</router-link> |
    <router-link to="/lazyEffect">lazy的effect</router-link> |
    <router-link to="/effectOpt">effect() 的其他选项</router-link> |
  </div>
  <div class="container">
    <router-view />
  </div>
</template>

<script>
import { getCurrentInstance } from 'vue'

export default {
  // setup 函数会在组件挂载前（ beforeCreate 和 created 生命周期之间）运行一次，类似组件初始化的作用。注意，此时组件还未完成实例化
  // setup的2个参数:
  // props 和 context
  // props是一个reactive对象，不要对它进行解构赋值，这样会破坏props的响应机制，导致后序外部更新props的时候组件无法更新
  // ontext： context 对象也是一个 Proxy 对象，本质上代理对象会将访问指向组件的内部实例（如访问组件的 attrs 或者 emit ）
  setup(props) {
    const { ctx } = getCurrentInstance()
    console.log(ctx.$router.currentRoute.value)
    // ctx.$router.push('/counterRef')
  }
}
</script>

<style scoped>
p {
  text-align: center;
}
.container {
  width: 80%;
  min-height: 200px;
  border: 1px solid #000;
  margin-left: 10%;
  margin-top: 20px;
  padding: 15px;
}
.nav {
  text-align: center;
}
</style>