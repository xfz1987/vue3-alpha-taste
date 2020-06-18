import Vuex from 'vuex'

export default Vuex.createStore({
  state: {
    a: 1
  },
  mutations: {
    INCREMENT(state, payload) {
      state.a += payload
      console.log(state.a)
    }
  },
  actions: {
    setTestA(context, payload) {
      context.commit('INCREMENT', payload)
    }
  },
  modules: {
  }
})