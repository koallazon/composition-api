<template>
  <div class="container">
    <section id="user">
      <p>{{ welcomeText }}</p>
      <label for="username" class="font-bold">사용자 이름</label>
      <input
        :value="username"
        id="username"
        type="text"
        class="text-base grow ml-3"
        @input="changeName"
      />
    </section>
    <section id="product">
      <p>{{ productName }}</p>
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
  </div>
</template>

<script>
import BaseButton from "../components/BaseButton.vue"

export default {
  components: {
    BaseButton,
  },
  data() {
    return {
      productName: "에어 조던 6 레트로",
      filterType: "ALL",
      products: [
        {
          size: 250,
          inventory: 30,
          color: "white",
        },
        {
          size: 260,
          inventory: 0,
          color: "black",
        },
        {
          size: 270,
          inventory: 20,
          color: "red1",
        },
      ],
      brandName: "Nike",
      icons: [
        {
          name: "에어포스1",
        },
        {
          name: "나이키덩크",
        },
        {
          name: "데이브레이크",
        },
        {
          name: "인피니티 런",
        },
        {
          name: "블레이저",
        },
      ],
      brands: ["ACG", "NikeLab", "나이키 스포츠웨어", "조던"],
      username: "홍길동",
      userId: "frontman",
    }
  },
  computed: {
    hasProduct() {
      return this.products.length > 0
    },
    filteredProducts() {
      let conditions = (item) => true
      if (this.filterType === "STOCK") conditions = (item) => item.inventory > 0
      return this.products.filter(conditions)
    },
    loggedIn() {
      return !!this.userId
    },
    welcomeText() {
      return this.loggedIn
        ? `${this.username}님 환영합니다.`
        : "로그인이 필요합니다."
    },
  },
  methods: {
    changeFilterType(type) {
      if (!["ALL", "STOCK"].includes(type))
        throw new Error("invalid type params")
      this.filterType = type
    },
    changeName(e) {
      this.username = e.target.value?.trim()
    },
  },
}
</script>
