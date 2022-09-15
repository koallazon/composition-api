const brandModule = {
  state: () => ({
    name: 'Nike',
    icons: [
      {
        id: 1,
        name: '에어포스1',
        active: false,
      },
      {
        id: 2,
        name: '나이키덩크',
        active: false,
      },
      {
        id: 3,
        name: '데이브레이크',
        active: false,
      },
      {
        id: 4,
        name: '인피니티 런',
        active: false,
      },
      {
        id: 5,
        name: '블레이저',
        active: false,
      },
    ],
  }),
  mutations: {
    changeActiveStatus(state, id) {
      const findItem = state.icons.findIndex((v) => v.id === id)
      if (findItem < 0) return
      state.icons.splice(findItem, 1, {
        ...state.icons[findItem],
        active: !state.icons[findItem].active,
      })
    },
  },
}

export default {
  namespaced: true,
  ...brandModule,
}
