<template>
  <pre>
    effect() 函数来自于 @vue/reactivity ，而 watchEffect() 函数来自于 @vue/runtime-core
    它们的区别在于：effect() 是非常底层的实现，watchEffect() 是基于 effect() 的封装
    watchEffect() 会维护与组件实例以及组件状态(是否被卸载等)的关系，
    如果一个组件被卸载，那么 watchEffect() 也将被 stop，但 effect() 则不会

    <code style="color:#000">
      const obj = reactive({ foo: 1 })
      const Comp = defineComponent({
        setup() {
          watchEffect(() => {
            console.log(obj.foo)
          })
        }
      })
      // 挂载组件
      render(h(Comp), document.querySelector('#app'))
      // 卸载组件
      render(null, document.querySelector('#app'))
      obj.foo++ // 副作用函数不会重新执行
      // 如果是effect, 副作用函数仍然会被执行，
    </code>

    可以借助 onUnmounted API 解决这个问题
    <code style="color:#000">
      const obj = reactive({ foo: 1 })
      const Comp = defineComponent({
        setup() {
          const runner = effect(() => {
            console.log(obj.foo)
          })
          onUnmounted(() => stop(runner))
        }
      })
      // 挂载组件
      render(h(Comp), document.querySelector('#app'))
      // 卸载组件
      render(null, document.querySelector('#app'))
      obj.foo++ // 这时，副作用函数不会重新执行
    </code>
  </pre>
</template>

<script>
import { stop, reactive, effect } from '@vue/reactivity'



export default {
  setup() {
    
  }
}
</script>
