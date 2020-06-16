<template>
  <!-- <h1>{{ msg }}</h1> -->
  <button @click="increment">count is: {{ count }}, double is {{ double }}</button>
</template>

<script>
// 2.x
// export default {
//   name: 'HelloWorld',
//   props: {
//     msg: String
//   },
//   data() {
//     return {
//       count: 0
//     }
//   }
//  methods: {
//     goTo () {
//       this.$emit('test', {
//         count
//       })
//     }
//   }
// }

// 3.x
import { ref, computed, onMounted } from 'vue'

export default {
  name: 'counterRef',
  // props: {
  //   msg: String
  // },
  setup(props, { emit }) {
    const count = ref(0)
    const double = computed(() => count.value * 2)

    const increment = () => {
      count.value++;
    }

    return {
      count,
      double,
      increment
    }

    const goTo = () => {
      emit('test', {
        count
      })
    }
  }
}
</script>
