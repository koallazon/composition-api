import { ref, computed } from 'vue'
export default function useProduct() {
  //product
  const productName = ref('에어 조던 6 레트로')
  const filterType = ref('ALL')
  const products = ref([
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
  ])
  const hasProduct = computed(() => {
    return products.value.length > 0
  })
  const filteredProducts = computed(() => {
    let conditions = (item) => true
    if (filterType.value === 'STOCK') conditions = (item) => item.inventory > 0
    return products.value.filter(conditions)
  })
  function changeFilterType(type) {
    if (!['ALL', 'STOCK'].includes(type)) throw new Error('invalid type params')
    filterType.value = type
  }
  return {
    productName,
    changeFilterType,
    hasProduct,
    filteredProducts,
  }
}
