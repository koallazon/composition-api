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
import { ref, reactive, computed } from "vue"
import BaseButton from "../components/BaseButton.vue"

export default {
  components: {
    BaseButton,
  },
  setup() {
    // state
    const productName = ref("에어 조던 6 레트로")
    const filterType = ref("ALL")
    const products = reactive([
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
    ])
    const brandName = ref("Nike")
    const icons = reactive([
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
    ])
    const brands = reactive(["ACG", "NikeLab", "나이키 스포츠웨어", "조던"])
    const username = ref("홍길동")
    const userId = ref("frontman")

    // computed
    const hasProduct = computed(() => products.length > 0)
    const filteredProducts = computed(() => {
      let conditions = (item) => true
      if (filterType.value === "STOCK")
        conditions = (item) => item.inventory > 0
      return products.filter(conditions)
    })
    const loggedIn = computed(() => !!userId.value)
    const welcomeText = computed(() =>
      loggedIn.value
        ? `${username.value}님 환영합니다.`
        : "로그인이 필요합니다."
    )
    // function
    function changeFilterType(type) {
      if (!["ALL", "STOCK"].includes(type))
        throw new Error("invalid type params")
      filterType.value = type
    }
    function changeName(e) {
      username.value = e.target.value?.trim()
    }

    return {
      productName,
      filterType,
      products,
      brandName,
      icons,
      brands,
      username,
      userId,
      hasProduct,
      filteredProducts,
      welcomeText,
      changeFilterType,
      changeName,
    }
  },
}
</script>

<style lang="scss" scoped></style>
