<template>
  <ul class="breadcumb">
    <li v-for="(v,i) in list" :key="i">
      <a>{{ v.meta.title }}</a>
      <span v-if="i<list.length-1">/</span>
    </li>
  </ul>
</template>

<script>
import { reactive, onMounted, toRefs, watch } from '@vue/composition-api'

export default {
  setup (props, { root }) {
    const state = reactive({
      list: []
    })

    onMounted(() => {
      console.log(root.$route)
      state.list = root.$route.matched
    })

    watch(() => root.$route, (to, from) => {
      state.list = to.matched
    })

    return {
      ...toRefs(state)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  overflow: hidden;
}
li {
  list-style: none;
  float: left;
}
</style>
