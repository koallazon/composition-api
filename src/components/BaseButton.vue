<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    default: "ALL",
  },
})

defineEmits(["click"])
</script>

<template>
  <button
    type="button"
    class="ring-white ring-1"
    @click="$emit('click', value)"
  >
    {{ label }}
  </button>
</template>
