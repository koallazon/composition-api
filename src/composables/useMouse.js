import { ref, computed, onMounted, onUnmounted, readonly } from 'vue'

export default function useMouse() {
  const x = ref(0)
  const y = ref(0)

  const update = (event) => {
    x.value = event.pageX
    y.value = event.pageY
  }

  const msg = computed(() => {
    return `x축 위치는 ${x.value}이고 y축 위치는 ${y.value}입니다.`
  })

  onMounted(() => window.addEventListener('mousemove', update))
  onUnmounted(() => window.removeEventListener('mousemove', update))

  return {
    x: readonly(x),
    y: readonly(y),
    msg,
  }
}
