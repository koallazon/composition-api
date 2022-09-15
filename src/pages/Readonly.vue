<template>
  <div class="box">
    count: {{ count }}
    <button type="button" @click="count++">readonly 더하기</button>
    <button type="button" @click="addCount">methods 더하기</button>
  </div>
</template>

<script>
import { readonly, ref } from 'vue'
export default {
  setup() {
    const count = ref(0)

    function addCount() {
      count.value++
    }

    return {
      count: readonly(count),
      addCount,
    }
  },
}
</script>
