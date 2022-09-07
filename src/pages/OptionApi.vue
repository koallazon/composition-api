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
import BaseButton from '../components/BaseButton.vue'
import Card from '../components/Card.vue'

export default {
  components: {
    BaseButton,
    Card,
  },
  data() {
    return {
      productName: '에어 조던 6 레트로',
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
      brandName: 'Nike',
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
      username: '홍길동',
      userId: 'frontman',
    }
  },
  computed: {
    hasProduct() {
      return this.products.length > 0
    },
    filteredProducts() {
      let conditions = (item) => true
      if (this.filterType === 'STOCK') conditions = (item) => item.inventory > 0
      return this.products.filter(conditions)
    },
    loggedIn() {
      return !!this.userId
    },
    welcomeText() {
      return this.loggedIn ? `${this.username}님 환영합니다.` : '로그인이 필요합니다.'
    },
  },
  methods: {
    changeFilterType(type) {
      if (!['ALL', 'STOCK'].includes(type)) throw new Error('invalid type params')
      this.filterType = type
    },
    changeName(e) {
      this.username = e.target.value?.trim()
    },
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
</script>
