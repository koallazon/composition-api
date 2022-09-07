export default {
  data() {
    return {
      name: "홍길동",
      id: "frontman",
    }
  },
  computed: {
    loggedIn() {
      return !!this.id
    },
    welcomeText() {
      return this.loggedIn
        ? `${this.name}님 환영합니다.`
        : "로그인이 필요합니다."
    },
  },
  methods: {
    changeName(e) {
      this.name = e.target.value?.trim()
    },
  },
}
