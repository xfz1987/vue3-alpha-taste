<template>
  <ul class="nav">
    <li><router-link to="/index">首页</router-link></li>
    <li><router-link to="/test">测试页</router-link></li>
    <li><router-link to="/about">关于我们</router-link></li>
  </ul>
</template>

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav {
  list-style: none;
  overflow: hidden;
}
.nav > li {
  float: left;
  margin-right: 10px;
  cursor: pointer;
}
</style>
