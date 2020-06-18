<template>
  <div>
    <!-- <h2>hello {{ state.user }}！</h2> -->
    <pre>
      // MLGB, it not works
      reactive() 函数接收一个对象作为参数，并返回一个代理对象
      effect() 函数用于定义副作用，它的参数就是副作用函数，这个函数可能会产生副作用，
      例如上面代码中的 document.body.innerText = state.user。
      在副作用函数内的响应式数据会与副作用函数之间建立联系，即所谓的依赖收集，
      当响应式数据变化之后，会导致副作用函数重新执行
    </pre>
  </div>
</template>

<script>
import { reactive, effect } from '@vue/reactivity'

export default {
  setup() {
    const state = reactive({ user: 'world', color: '#fff' })

    effect(() => {
      // 当state.user变化时才会执行effect,而state.color变化，不会执行，因为副作用函数没有收集color依赖
      console.log(state.user)
      // document.getElementById('app').style.background = state.color
    })

    setTimeout(() => {
      state.user = 'xfz'
    }, 3000)

    setTimeout(() => {
      state.color = 'pink'
    }, 5000)

  }
}
</script>
