<template>
  <div class="container">
    <section id="user">
      <p>{{ welcomeText }}</p>
      <label for="username" class="font-bold">사용자 이름</label>
      <input
        id="username"
        :value="name"
        type="text"
        class="text-base grow ml-3"
        @input="changeName"
      />
    </section>
    <section id="product">
      <p>{{ name }}</p>
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
      <h3>{{ name }}</h3>
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
import ProductMixin from '../mixins/productMixin'
import BrandMixin from '../mixins/brandMixin'
import UserMixin from '../mixins/userMixin'
import CustomMixin from '../mixins/customMixin'

export default {
  components: {
    BaseButton,
    Card,
  },
  mixins: [ProductMixin, UserMixin, BrandMixin],
  computed: {
    ...CustomMixin(['Joe', 'Tom']),
  },
  mounted() {
    console.log(this.name)
    console.log(this.Joe)
    console.log(this.Tom)
  },
}
</script>
