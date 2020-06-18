<template>
  <div>
    <pre>
      用于判断对象是否是代理对象（reactive 或 readonly）
    </pre>
  </div>
</template>

<script>
import { isProxy, reactive, shallowReactive, readonly, shallowReadonly } from '@vue/reactivity'

export default {
  setup() {
    console.log(isProxy(reactive({}))) // true
    console.log(isProxy(shallowReadonly({}))) // true
    console.log(isProxy(readonly({}))) // true
    console.log(isProxy(shallowReactive({}))) // true
    
    const shallowReactiveProxy = shallowReactive({ foo: 1 })
    console.log(isProxy(shallowReactiveProxy)) // true
    console.log(isProxy(shallowReactiveProxy.foo)) // false

    const shallowReadonlyProxy = shallowReadonly({ foo: 1 })
    console.log(isProxy(shallowReadonlyProxy)) // true
    console.log(isProxy(shallowReadonlyProxy.foo)) // false
  }
}
</script>
