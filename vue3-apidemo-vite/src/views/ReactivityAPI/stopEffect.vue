<template>
  <div>
    @vue/reactivity 提供了 stop 函数用来停止一个副作用
    effect() 函数会返回一个值，这个值其实就是 effect 本身，我们通常命名它为 runner。
    把这个 runner 传递给 stop() 函数，就可以停止掉这个 effect。
    后续对数据的变更不会触发副作用函数的重新执行
  </div>
</template>

<script>
import { stop, reactive, effect } from '@vue/reactivity'

export default {
  setup() {
    const obj = reactive({ foo: 1 })

    const runner = effect(() => {
      console.log(obj.foo)
    })

    stop(runner)

    obj.foo++
    obj.foo++
  }
}
</script>
