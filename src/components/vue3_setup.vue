<template>
  <div>
    company: {{ name }}<br />
    title: {{ title }}
    <slot name="hello" />
    <button @click="onClickFunc">OK 버튼</button>
  </div>
</template>

<script>
import { ref, watch } from 'vue'
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup(props, context) {
    console.log('props', props)

    console.log('attrs', context.attrs)

    // Slots (Non-reactive object)
    console.log(context.slots)

    watch(context.attr, (curVal, prevVal) => {
      console.log('attr', curVal, prevVal)
    })
    watch(props.title, (curVal, prevVal) => {
      console.log('title', curVal, prevVal)
    })
    // Emit Events (Method)
    console.log(context.emit)
    const name = ref('hnt')

    return {
      name,
    }
  },
}
</script>
