<script setup>
import BaseButton from '../components/BaseButton.vue'
import Card from '../components/Card.vue'
import useProduct from '../composables/useProduct.js'
import useUser from '../composables/useUser.js'
import useBrand from '../composables/useBrand.js'

const { name: productName, hasProduct, filteredProducts, changeFilterType } = useProduct()
const { name: userName, welcomeText, changeName } = useUser()
const { name: brandName, icons, changeActiveStatus } = useBrand()
</script>

<template>
  <div class="container">
    <section id="user">
      <h3>{{ welcomeText }}</h3>
      <label for="username" class="font-bold">사용자 이름</label>
      <input
        id="username"
        :value="userName"
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
