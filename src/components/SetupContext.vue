<template>
  <div>title: {{ title }}</div>
</template>

<script>
export default {
  name: 'SetupContext',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup(props, context) {
    console.log('props', props)

    // Slots (Non-reactive object)
    console.log('attrs', context.attrs)

    // Slots (Non-reactive object)
    console.log('slots', context.slots)

    // Emit Events (Method)
    console.log('emit', context.emit)

    console.log('expose', context.expose)
  },
}
</script>
