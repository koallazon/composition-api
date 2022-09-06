<script setup>
    import { ref } from 'vue'
    const color = ref("red")
    setTimeout(() => {
        color.value = 'blue'
    }, 1000)
</script>

<template>
    <div>
        Home
    </div>
</template>

<style scoped>
    div {
        color: v-bind(color)
    }
</style>