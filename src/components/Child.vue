<script setup>
import { inject } from 'vue'
const globalMouse = inject('globalMouse')
const { x, y, msg } = globalMouse()
</script>

<template>
  <div class="box">
    <p>x: {{ x }}, y: {{ y }}</p>
    <br />
    <p>{{ msg }}</p>
  </div>
</template>
