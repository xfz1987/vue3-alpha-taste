<template>
  <div>
    <pre>
      类似于浅响应，shallowReadonly() 定义浅只读数据,
      这意味着，深层次的对象值是可以被修改的，
      在 Vue 内部 props 就是使用 shallowReadonly() 函数来定义的
    </pre>
  </div>
</template>

<script>
import { effect, shallowReadonly } from '@vue/reactivity'

export default {
  setup() {
    const obj = shallowReadonly({ foo: { bar: 1 } })

    obj.foo.bar = 2 // ok
    obj.foo = { bar: 2 } // Set operation on key "foo" failed: target is readonly
    console.log(obj.foo)
  }
}
</script>
