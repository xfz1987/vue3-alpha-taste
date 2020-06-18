<template>
  <div>
    <div>lazyEffect: {{ obj }}</div>
    <pre>
      effect() 用来运行副作用函数，默认是立即执行的，
      但它可以是 lazy 的，这时我们可以手动执行它

      实际上，computed()就是一个lazy的effect
    </pre>
  </div>
</template>

<script>
import { reactive, effect } from '@vue/reactivity'

export default {
  setup() {
    const obj = reactive({ foo: 1 })

    const runner = effect(() => {
      console.log('foo', obj.foo)
    }, {
      lazy: true
    })

    obj.foo = 2
    runner()
  }
}
</script>
