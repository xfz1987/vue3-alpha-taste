<template>
    <button @click="increment">count is: {{ state.count }}, double is {{ state.double }}</button>
</template>

<script>
import { computed, reactive, onMounted } from 'vue'

export default {
  setup(props, { emit }) {
    const state = reactive({
      count: 0,
      double: computed(() => state.count * 2)
    })


    const increment = () => {
      state.count++;
    }
    
    onMounted(() => {
      console.log('mounted:', props)
    })

    return {
      state,
      increment
    }
  }
}
</script>
