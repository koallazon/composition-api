<template>
  <div class="box text-left">
    <div>
      <h2>ref</h2>
      <div>origin_ref: {{ origin_ref }}</div>

      <div>shallow_ref: {{ shallow_ref }}</div>

      <button type="button" @click="changeRefValue">다음</button>
    </div>
    <div>
      <h2>reactive</h2>
      <div>origin_reactive: {{ origin_reactive }}</div>
      <div>shallow_reactive: {{ shallow_reactive }}</div>
      <button type="button" @click="changeReactiveValue">다음</button>
    </div>
  </div>
</template>

<script>
import { ref, reactive, shallowRef, shallowReactive, watch, watchEffect } from 'vue'

export default {
  setup() {
    const origin_ref = ref({ count: 1 })
    const shallow_ref = shallowRef({ count: 1 })
    const origin_reactive = reactive({ count: 1, role: [] })
    const shallow_reactive = shallowReactive({ count: 1, role: [] })

    watch(origin_ref.value, (count, prevCount) => {
      console.log('origin_ref watch', count, prevCount)
    })

    watch(shallow_ref.value, (count, prevCount) => {
      console.log('shallow_ref watch', count, prevCount)
    })

    watch(origin_reactive, (count, prevCount) => {
      console.log('origin_reactive watch', count, prevCount)
    })

    watch(shallow_reactive, (count, prevCount) => {
      console.log('shallow_reactive watch', count, prevCount)
    })

    const changeRefValue = () => {
      origin_ref.value.count = 2
      shallow_ref.value.count = 2
    }

    const changeReactiveValue = () => {
      const random = Math.trunc(Math.random() * 10)
      origin_reactive.role.push(random)
      shallow_reactive.role.push(random)
    }

    return {
      origin_ref,
      shallow_ref,
      origin_reactive,
      shallow_reactive,
      changeRefValue,
      changeReactiveValue,
    }
  },
}
</script>
