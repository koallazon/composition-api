<script setup>
import useCount from '@/composables/useCount'
const { count, increment } = useCount()
</script>

<template>
  <div class="box">
    count: {{ count }}<br /><br />
    <button type="button" @click="increment">더하기</button>
  </div>
</template>
