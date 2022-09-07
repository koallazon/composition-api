import { ref, computed, readonly } from 'vue'

export default () => {
  // state
  const name = ref('홍길동')
  const id = ref('frontman')

  // computed
  const loggedIn = computed(() => !!id.value)
  const welcomeText = computed(() =>
    loggedIn.value ? `${name.value}님 환영합니다.` : '로그인이 필요합니다.'
  )

  // function
  const changeName = (e) => {
    name.value = e.target.value?.trim()
  }
  return {
    name: readonly(name),
    welcomeText,
    changeName,
  }
}
