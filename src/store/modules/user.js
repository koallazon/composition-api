const userModule = {
  state: () => ({
    name: '홍길동',
    id: 'frontman',
  }),
  getters: {
    loggedIn(state) {
      return !!state.id
    },
    welcomeText(state, getters) {
      return getters.loggedIn ? `${state.name}님 환영합니다.` : '로그인이 필요합니다.'
    },
  },
  mutations: {
    changeName(state, e) {
      state.name = e.target.value?.trim()
    },
  },
}

export default {
  namespaced: true,
  ...userModule,
}
