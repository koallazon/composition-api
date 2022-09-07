export default {
  data() {
    return {
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
    }
  },
  methods: {
    changeActiveStatus(id) {
      const findItem = this.icons.findIndex((v) => v.id === id)
      if (findItem < 0) return
      this.icons.splice(findItem, 1, {
        ...this.icons[findItem],
        active: !this.icons[findItem].active,
      })
    },
  },
}
