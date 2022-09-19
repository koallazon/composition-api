<template>
  <div class="box">
    <ExposeChild ref="counter" />
    <div class="my-3">
      <button type="button" @click="parentReset">Reset from parent</button>
      <button type="button" @click="terminate">Terminate from parent</button>
    </div>
  </div>
</template>

<script>
import ExposeChild from '../components/ExposeChild.vue'

export default {
  name: 'ExposeParent',
  components: {
    ExposeChild,
  },
  setup() {
    const reset = () => {
      // console.log('this.$refs.counter.reset', this.$refs.counter.reset)
      this.$refs.counter.reset()
    }
    const terminate = () => {
      this.$refs.counter.terminate()
    }
    return {
      reset,
      terminate,
    }
  },
}
</script>
