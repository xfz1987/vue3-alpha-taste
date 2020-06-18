<template>
  <div>
    <pre>
      哪些数据是可以被代理的：
        Object 、Array、Map、Set、WeakMap、WeakSet
        非 Object.isFrozen

      非 VNode，Vue3 的 VNode 对象带有 _vskip: 
      true 标识，用于跳过代理
      （实际上，只要带有 _vskip 属性并且值为 true 的对象，都不会被代理）

      markRaw() 函数用于让数据不可被代理：
      实际上 markRaw 函数所做的事情，就是在数据对象上定义 __vskip 属性，从而跳过代理：
    </pre>
  </div>
</template>

<script>
import { reactive, readonly, markRaw } from '@vue/reactivity'

export default {
  setup() {
    const obj = { foo: 1 }
    Object.freeze(obj)

    // Object.isFrozen() // true

    const proxyObj = reactive(obj)
    console.log(proxyObj === obj) // true
    // proxyObj.foo = 2 // Cannot assign to read only property 'foo' of object '#<Object>'
    

    const obj2 = reactive({
      foo: 0,
      __v_skip: true
    })

    const obj3 = { foo: 1 }
    console.log(markRaw(obj3)) //{ foo: 1, __v_skip: true }
    obj3.foo = 6;
  }
}
</script>
