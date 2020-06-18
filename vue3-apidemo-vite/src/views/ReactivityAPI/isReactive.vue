<template>
  <div>
    <pre>
      判断数据对象是否是 reactive
    </pre>
  </div>
</template>

<script>
import { reactive, isReactive, readonly, shallowReactive, shallowReadonly } from '@vue/reactivity'

export default {
  setup() {
    const reactiveProxy = reactive({ foo: { bar: 1 } })
    console.log(isReactive(reactiveProxy)) // true
    console.log(isReactive(reactiveProxy.foo)) // true
    console.log('------------')

    const shallowReactiveProxy = shallowReactive({ foo: { bar: 1 } })
    console.log(isReactive(shallowReactiveProxy)) // true
    console.log(isReactive(shallowReactiveProxy.foo)) // true
    console.log('------------')

    const readonlyProxy = readonly({ foo: { bar: 1 } })
    console.log(isReactive(readonlyProxy)) // false
    console.log(isReactive(readonlyProxy.foo)) // false
    console.log('------------')

    const shallowReadonlyProxy = shallowReadonly({ foo: { bar: 1 } })
    console.log(isReactive(shallowReadonlyProxy)) // false
    console.log(isReactive(shallowReadonlyProxy.foo)) // false

  }
}
</script>
