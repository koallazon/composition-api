<template>
  <div class="box">
    <Expose ref="counter" />
    <div class="my-3">
      <button type="button" @click="reset">Reset from parent</button>
      <button type="button" @click="terminate">Terminate from parent</button>
    </div>
  </div>
</template>

<script>
import Expose from '../components/Expose.vue'

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
