import { ref, computed } from 'vue'
export const useBrand = () => {
  const brandName = ref('Nike')
  const icons = ref([
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
  ])
  function changeActiveStatus(id) {
    const findItem = icons.value.findIndex((v) => v.id === id)
    if (findItem < 0) return
    icons.value.splice(findItem, 1, {
      ...icons.value[findItem],
      active: !icons.value[findItem].active,
    })
  }
  return {
    brandName,
    icons,
    changeActiveStatus,
  }
}
