import { ref, computed } from 'vue'
export default function useUser() {
  //user
  const username = ref('홍길동')
  const userId = ref('frontman')
  const loggedIn = computed(() => {
    return !!userId.value
  })
  const welcomeText = computed(() => {
    return loggedIn.value ? `${username.value}님 환영합니다.` : '로그인이 필요합니다.'
  })

  function changeName(e) {
    username.value = e.target.value?.trim()
  }
  return {
    welcomeText,
    username,
    changeName,
  }
}
