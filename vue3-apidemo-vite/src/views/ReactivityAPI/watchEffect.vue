<template>
  <div>
    <pre>
      watchEffect() 函数并不在 @vue/reactivity 中提供，而是在 @vue/runtime-core 中提供，
      与 watch() 函数一起对外暴露

      作用：把数据的最终的状态应用到副作用中，而不是每次变化都重新执行一次

      ---------------------------------------------------------
      异步副作用和invalidate
      <code style="color:#000;">
      watchEffect(async () => {
        const data = await fetch(obj.foo)
      })
      
      当 obj.foo 变化后，意味着将会再次发送请求，
      那么之前的请求怎么办呢？是否应该将之前的请求标记为 invalidate?

      实际上，副作用函数接收一个函数作为参数
      watchEffect(async (onInvalidate) => {
        const data = await fetch(obj.foo)
      })

      我们可以调用它来注册一个回调函数，这个回调函数会在副作用无效时执行
      watchEffect(async (onInvalidate) => {
        let validate = true
        onInvalidate(() => {
          validate =  false
        })
        const date = await fetch(obj.foo)
        if (validate) {
          // 使用date
        } else {
          // 屏蔽即可
        }
      })
      </code>
    </pre>
  </div>
</template>

<script>
import { reactive, watchEffect } from 'vue'

export default {
  setup() {
    const obj = reactive({ foo: 1 })
    watchEffect(() => {
      console.log(obj.foo) // 1 4
    })

    obj.foo++
    obj.foo++
    obj.foo++
  }
}
</script>
