<template>
  <div>
    <pre>
      effect 的其他选项
      <code style="#000">
        onTrack({
          effect：track谁,
          target: 谁track的,
          type: set/get,
          key: 哪个key track 的
        }),
        onTrigger({
          effect：trigger 谁？
          target：谁 trigger 的？
          type：因为啥 trigger
          key：哪个 key trigger 的？可能是 undefined，例如：map.clear() 的时候。
          newValue 和 oldValue：新旧值
        })
      </code>
    </pre>
  </div>
</template>

<script>
// import { effect, reactive } from '@vue/reactivity'
import { reactive, watchEffect } from 'vue'

export default {
  setup() {
    const obj = reactive({ foo: 1 })

    // effect(() => {
    //   console.log(obj.foo)
    // }, {
    //   onTrack({ effect, target, type, key }) {
    //   },
    //   onTrigger({ effect, target, type, key, newValue, oldValue }) {
    //   },
    //   onStop() {
    //   }
    // })

    watchEffect(() => {
      console.log(obj.foo)
    }, {
      onTrack({ effect, target, type, key }) {
        console.log('track')
        console.log(effect, target, type, key)
      },
      onTrigger({ effect, target, type, key, newValue, oldValue }) {
        console.log('trigger')
        console.log(effect, target, type, key, newValue, oldValue)
      },
      onStop() {
        console.log('stop...')
      }
    })

    obj.foo = 2
  }
}
</script>
