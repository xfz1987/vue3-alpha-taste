<template>
  <div class="test">
    <h2>测试页</h2>
    <!-- <h1>{{ name }}</h1>
    <h1>{{ n }}</h1> -->
    <h1>{{ state.name }}</h1>
    <h1>{{ state.n }}</h1>
    <button @click="test">测试</button>
  </div>
</template>

<script>
// import { reactive, toRefs } from '@vue/composition-api'
import { reactive } from '@vue/composition-api'

export default {
  setup (props, { root }) {
    const state = reactive({
      n: 1,
      name: 'hello xfz'
    })

    const test = () => {
      state.n += 1
    }

    // toRefs 把reactive创建出的数据变更为响应式
    return {
      state,
      // ...toRefs(state),
      test
    }
  }
}
</script>

<style scoped>

</style>
