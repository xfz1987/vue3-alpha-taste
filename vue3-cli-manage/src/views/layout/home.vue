<template>
  <div>
    <button class="ct-logout" @click="logout">退出</button>
    <Nav />
    <Breadcumb />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import Nav from '../../components/nav'
import Breadcumb from '../../components/breadcumb'

export default {
  setup (props, { root }) {
    const logout = () => {
      sessionStorage.removeItem('username')
      root.$router.push('/login')
    }

    return {
      logout
    }
  },
  components: { Nav, Breadcumb }
}
</script>

<style scoped>
.ct-logout {
  position: absolute;
  top: 10px;
  right: 50%;
}
main {
  width: 500px;
  min-height: 300px;
  margin-left: 100px;
  border: 1px solid #000;
}
</style>
