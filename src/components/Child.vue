<script setup>
import { inject, shallowRef, ref, watch } from 'vue'
const x = inject('x')
const y = inject('y')
const arr = {
  name: 'ltg',
  age: 50,
  school: ['1', '2'],
}
const arr1 = {
  name: 'kjh',
  age: 34,
  school: ['3', '4'],
}
const data = shallowRef(arr)
const data1 = ref(arr1)

const onClickButton = () => {
  // data.value.age = 2
  // data1.value.age = 10
  // data.value = {}
  // data1.value = {}
}

watch(data, (curVal, prevVal) => {
  console.log('data', curVal, prevVal)
})

watch(data1, (curVal, prevVal) => {
  console.log('data1', curVal, prevVal)
})
</script>

<template>
  <div>
    <p>{{ x }}, {{ y }}</p>
    <button class="text-white" @click="onClickButton">버튼</button>
    <div class="flex w-full justify-center">
      <dl style="width: 200px">
        <dt>shallowRef</dt>
        <dd>{{ (data.name, data.age) }} | {{ data.school }}</dd>
      </dl>
      <dl style="width: 200px">
        <dt>Ref</dt>
        <dd>{{ (data1.name, data1.age) }} | {{ data1.school }}</dd>
      </dl>
    </div>
  </div>
</template>
