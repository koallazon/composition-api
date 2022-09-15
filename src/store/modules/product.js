const productModule = {
  state: () => ({
    name: '에어 조던 6 레트로',
    filterType: 'ALL',
    products: [
      {
        size: 250,
        inventory: 30,
        color: 'white',
      },
      {
        size: 260,
        inventory: 0,
        color: 'black',
      },
      {
        size: 270,
        inventory: 20,
        color: 'red1',
      },
    ],
  }),
  getters: {
    hasProduct(state) {
      return state.products.length > 0
    },
    filteredProducts(state) {
      let conditions = (item) => true
      if (state.filterType === 'STOCK') conditions = (item) => item.inventory > 0
      return state.products.filter(conditions)
    },
  },
  mutations: {
    changeFilterType(state, type) {
      if (!['ALL', 'STOCK'].includes(type)) throw new Error('invalid type params')
      state.filterType = type
    },
  },
}

export default {
  namespaced: true,
  ...productModule,
}
