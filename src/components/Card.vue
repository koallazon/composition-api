<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
})
const emit = defineEmits(['click'])
</script>

<template>
  <li :class="['card', { active: item.active }]" @click="emit('click', item.id)">
    {{ item.name }}
  </li>
</template>
