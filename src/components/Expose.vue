<template>
  <p>Counter: {{ counter }}</p>
  <div class="mt-5">
    <button type="button" @click="reset">Reset from children</button>
    <button type="button" @click="terminate">Terminate from children</button>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup(_, { expose }) {
    const counter = ref(0)

    const interval = setInterval(() => {
      counter.value++
    }, 1000)

    const reset = () => {
      counter.value = 0
    }

    const terminate = () => {
      clearInterval(interval)
    }

    // expose({ reset })

    return {
      counter,
      reset,
      terminate,
    }
  },
}
</script>
