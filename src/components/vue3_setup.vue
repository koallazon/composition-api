<template>
  <div>company: {{ name }}</div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup(props, context) {
    const name = ref('hnt')
    return {
      name,
    }
  },
}
</script>
