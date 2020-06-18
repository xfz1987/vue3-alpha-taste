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
import { computed } from 'vue'

export default {
  setup() {
    const refCount = ref(0)
    const refDoubleCount = computed(() => refCount.value * 2)
    // 当我们通过 refDoubleCount.value 取值时，如果 refCount 的值没变，
    //那么表达式 refCount.value * 2 只会计算一次。
    // 这也是 computed() 优于 methods 的地方
  }
}
</script>
