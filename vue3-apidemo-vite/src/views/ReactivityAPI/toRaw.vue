<template>
  <div>
    <pre>
      接收代理对象作为参数，并获取原始对象
      如果参数是非代理对象，则直接返回该值
    </pre>
  </div>
</template>

<script>
import { reactive, readonly, toRaw } from '@vue/reactivity'

export default {
  setup() {
    const obj1 = {}
    const reactiveProxy = reactive(obj1)
    console.log(reactiveProxy)
    console.log(toRaw(reactiveProxy) === obj1) // true

    const obj2 = {}
    const readonlyProxy = readonly(obj2)
    console.log(readonlyProxy)
    console.log(toRaw(reactiveProxy) === obj1) // true

    const obj3 = {}
    console.log(toRaw(obj3) === obj3) // true
    console.log(toRaw(1) === 1) // true
    console.log(toRaw('hello') === 'hello') // true
  }
}
</script>
