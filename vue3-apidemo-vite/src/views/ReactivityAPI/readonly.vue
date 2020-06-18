<template>
  <div>
    <pre>
      有些数据，我们要求对用户是只读的，此时可以使用 readonly() 函数
    </pre>
  </div>
</template>

<script>
import { reactive, readonly } from '@vue/reactivity'

export default {
  setup() {
    const obj = readonly({ text: 'hello' })

    obj.text += ' world' // Set operation on key "text" failed: target is readonly

    console.log(obj.text)
  }
}
</script>
