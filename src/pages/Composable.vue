<script setup>
import useMouse from '@/composables/useMouse'

const { x, y } = useMouse()
</script>

<template>Mouse position is at: {{ x }}, {{ y }}</template>
