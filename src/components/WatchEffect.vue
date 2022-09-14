<template>
  <div>
    todos ID: {{ id }}<button @click="id++">다음</button>
    <div>
      <p>Number of events: {{ JSON.stringify(results) }}</p>
    </div>
  </div>
</template>
<script>
import { ref, watchEffect } from 'vue'

export default {
  setup() {
    const id = ref(1)
    const results = ref(null)

    watchEffect(async () => {
      results.value = await getEventCount(id.value)
    })

    return { id, results }
  },
}

function getEventCount(id) {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then((res) => res.json())
    .then((_data) => _data)
}
1
</script>
