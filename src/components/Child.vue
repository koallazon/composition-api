<script setup>
import { inject } from 'vue'
const x = inject('x')
const y = inject('y')
</script>

<template>
  <div>
    <p>{{ x }}, {{ y }}</p>
  </div>
</template>
