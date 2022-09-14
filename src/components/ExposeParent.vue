<template>
  <Expose ref="counter" />

  <button @click="reset">Reset from parent</button>
  <button @click="terminate">Terminate from parent</button>
</template>

<script>
import Expose from './Expose.vue'

export default {
  name: 'ExposeParent',
  components: {
    Expose,
  },
  methods: {
    reset() {
      this.$refs.counter.reset()
    },
    terminate() {
      this.$refs.counter.terminate()
    },
  },
}
</script>
