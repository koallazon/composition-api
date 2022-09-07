<template>
  <div class="container">
    <section id="user">
      <h3>{{ welcomeText }}</h3>
      <label for="username" class="font-bold">사용자 이름</label>
      <input
        id="username"
        :value="username"
        type="text"
        class="text-base grow ml-3"
        @input="changeName"
      />
    </section>
    <section id="product">
      <h3>{{ productName }}</h3>
      <BaseButton label="전체" @click="changeFilterType" />
      <BaseButton label="재고" value="STOCK" @click="changeFilterType" />
      <ul v-if="hasProduct">
        <li v-for="(product, idx) in filteredProducts" :key="idx">
          <p v-for="n in Object.keys(product).length" :key="`product-${n}`">
            <label>{{ Object.keys(product)[n - 1] }}</label
            ><span>: {{ product[Object.keys(product)[n - 1]] }}</span>
          </p>
        </li>
      </ul>
      <div v-else>제품이 없습니다.</div>
    </section>
    <section id="brand">
      <h3>{{ brandName }}</h3>
      <h4>Icons</h4>
      <ul>
        <Card
          v-for="(icon, index) in icons"
          :key="index"
          :item="icon"
          @click="changeActiveStatus"
        />
      </ul>
    </section>
  </div>
</template>

<script>
import { ref, reactive, computed } from 'vue'
import BaseButton from '../components/BaseButton.vue'
import Card from '../components/Card.vue'

export default {
  components: {
    BaseButton,
    Card,
  },
  setup() {
    // state
    const productName = ref('에어 조던 6 레트로')
    const filterType = ref('ALL')
    const products = reactive([
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
    const username = ref('홍길동')
    const userId = ref('frontman')

    // computed
    const hasProduct = computed(() => products.length > 0)
    const filteredProducts = computed(() => {
      let conditions = (item) => true
      if (filterType.value === 'STOCK') conditions = (item) => item.inventory > 0
      return products.filter(conditions)
    })
    const loggedIn = computed(() => !!userId.value)
    const welcomeText = computed(() =>
      loggedIn.value ? `${username.value}님 환영합니다.` : '로그인이 필요합니다.'
    )
    // function
    const changeFilterType = (type) => {
      if (!['ALL', 'STOCK'].includes(type)) throw new Error('invalid type params')
      filterType.value = type
    }
    const changeName = (e) => {
      username.value = e.target.value?.trim()
    }
    const changeActiveStatus = (id) => {
      const findItem = icons.value.findIndex((v) => v.id === id)
      if (findItem < 0) return
      icons.value.splice(findItem, 1, {
        ...icons.value[findItem],
        active: !icons.value[findItem].active,
      })
    }

    return {
      productName,
      filterType,
      products,
      brandName,
      icons,
      username,
      userId,
      hasProduct,
      filteredProducts,
      welcomeText,
      changeFilterType,
      changeName,
      changeActiveStatus,
    }
  },
}
</script>

<style lang="scss" scoped></style>
