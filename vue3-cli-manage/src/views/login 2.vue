<template>
  <div class="login">
    <h1>登录页</h1>
    <input type="text" v-model="username" placeholder="用户名"><br/>
    <input type="password" v-model="password" placeholder="密码" @keyup.enter="login"><br>
    <button @click="login">登录</button>
  </div>
</template>

<script>
import { reactive, toRefs } from '@vue/composition-api'

export default {
  setup (props, { root }) {
    const state = reactive({
      username: 'admin',
      password: 'admin'
    })

    const login = () => {
      const { username, password } = state
      if (!username || !password) {
        alert('用户名或密码不能为空')
        return
      }

      if (username === 'admin' && password === 'admin') {
        sessionStorage.setItem('username', username)
        root.$router.push('/home')
      } else {
        alert('用户名或密码错误')
      }

      // root.$http({
      //   method: 'post',
      //   url: '/login',
      //   data: { username, password }
      // }).then(({ data }) => {
      //   if (data.code === 200) {
      //     sessionStorage.setItem('username', username)
      //     root.$router.push('/home')
      //   } else {
      //     alert('用户名或密码错误')
      //   }
      // }).catch(err => {
      //   console.log(err)
      // })
    }

    // toRefs 把reactive创建出的数据变更为响应式
    return {
      ...toRefs(state),
      login
    }
  }
}
</script>

<style scoped>

</style>
