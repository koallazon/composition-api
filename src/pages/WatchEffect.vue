<template>
  <div class="box">
    todos ID: {{ id }}<button type="button" @click="id++">다음</button>
    <ul v-if="results" class="p-5">
      <li>ID: {{ results.id }}</li>
      <li>title: {{ results.title }}</li>
      <li>completed: {{ results.completed }}</li>
    </ul>
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue'

export default {
  setup() {
    const id = ref(1)
    const results = ref(null)

    watchEffect(async () => {
      let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id.value}`)
      response = await response.json()
      results.value = response
    })

    return { id, results }
  },
}
</script>
