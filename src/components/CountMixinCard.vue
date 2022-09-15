<template>
  <div class="box">
    count: {{ count }}<br /><br />
    <button type="button" @click="increment">더하기</button>
  </div>
</template>

<script>
import countMixin from '@/mixins/countMixin'
export default {
  mixins: [countMixin],
  props: {
    type: {
      type: String,
      required: true,
      validator(value) {
        return ['mixin', 'composable'].includes(value)
      },
    },
  },
}
</script>
