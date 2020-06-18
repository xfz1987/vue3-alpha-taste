<template>
  <div>
    <pre>
      用于判断数据是否是 readonly
    </pre>
  </div>
</template>

<script>
import { reactive, readonly, isReadonly, shallowReactive, shallowReadonly } from '@vue/reactivity'

export default {
  setup() {
    console.log(isReadonly(readonly({}))) // true
    console.log(isReadonly(shallowReadonly({}))) // true
    console.log(isReadonly(reactive({}))) // false
    console.log(isReadonly(shallowReactive({}))) // false
  }
}
</script>
