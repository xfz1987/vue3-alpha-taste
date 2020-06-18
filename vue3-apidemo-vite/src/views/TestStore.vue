<template>
  <div class="test">
    <div>state from vuex {{ a }}</div>
    <button @click="update">update a</button>
  </div>
</template>

<script>
import { computed, getCurrentInstance } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore();
    const a = computed(() => store.state.a)

    //  const store = useStore();
    //     const router = useRouter();
    //     const state = reactive({ 
    //         todolist : computed(()=>store.state.todolist ) 
    //     });
    //     const goAddTodo = () => {
    //         store.dispatch(Constant.INITIALIZE_TODOITEM);
    //         router.push({ name:"addTodo" });
    //     }
    //     return { state, goAddTodo }

    const update = () => {
      store.dispatch('setTestA', 1)
    }

    return {
      a,
      update
    }
  }  
}
</script>