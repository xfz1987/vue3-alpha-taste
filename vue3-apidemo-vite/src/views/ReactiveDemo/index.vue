<template>
  <div>{{ Timer.t }}</div>
</template>

<script>
import Timer from './Timer.js';

export default {
  // data: () => ({
  //   Timer
  // })
  setup () {
    return {
      Timer
    }
  }
}
</script>