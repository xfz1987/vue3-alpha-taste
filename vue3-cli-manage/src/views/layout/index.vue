<template>
  <div>
    <ul class="index-title">
      <li>粉丝量: 20000</li>
      <li>活跃： 10000</li>
      <li>白板： 5</li>
      <li>视频：480</li>
    </ul>
    <Map />
  </div>
</template>

<script>
import Map from '../../components/map'
import { reactive } from '@vue/composition-api'

export default {
  setup () {
    const state = reactive({
    })
    return {
      state
    }
  },
  components: { Map }
}
</script>

<style scoped>

</style>
