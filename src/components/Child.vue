<script setup>
import { inject } from 'vue'
const useFetch = inject('globalFetch')
const { data, error } = useFetch('https://jsonplaceholder.typicode.com/todos/1')
</script>

<template>
  <div class="box">
    <div v-if="!data && !error">...Loading</div>
    <div v-else-if="data && !error">
      <dl class="text-left">
        <dt class="text-4xl">Data</dt>
        <br />
        <dd>
          <p>ID: {{ data.id }}</p>
          <p>title: {{ data.title }}</p>
          <p>completed: {{ data.completed }}</p>
        </dd>
      </dl>
    </div>
    <div v-else>error: {{ error }}</div>
  </div>
</template>
