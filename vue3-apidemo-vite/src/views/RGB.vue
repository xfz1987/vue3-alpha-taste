<template>
  <div :style="{ whidh: '100px', height: '100px', backgroundColor: `rgb(${r},${g},${b})`}"></div>
  <input type="range" from="0" to="255" v-model="r"><br/>
  <input type="range" from="0" to="255" v-model="g"><br/>
  <input type="range" from="0" to="255" v-model="b"><br/>
</template>

<script>
export default {
  data: () => ({
    r: 0,
    g: 0,
    b: 0
  })
}
</script>

<style>

</style>