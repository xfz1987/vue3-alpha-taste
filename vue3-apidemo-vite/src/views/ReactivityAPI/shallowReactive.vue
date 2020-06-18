<template>
  <div>
    <pre>
      定义浅响应数据
    </pre>
  </div>
</template>

<script>
import { effect, shallowReactive } from '@vue/reactivity'

export default {
  setup() {
    const obj = shallowReactive({ foo: { bar: 1 } })

    effect(() => {
      console.log(obj.foo.bar)
    })

    obj.foo.bar = 2 // 无效
    obj.foo = { bar: 2 } // 有效
  }
}
</script>
