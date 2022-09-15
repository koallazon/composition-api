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
import { mapState, mapGetters, mapMutations } from 'vuex'
export default {
  components: {
    BaseButton,
    Card,
  },
  computed: {
    ...mapState('user', {
      username: (state) => state.name,
    }),
    ...mapState('product', {
      productName: (state) => state.name,
    }),
    ...mapState('brand', {
      brandName: (state) => state.name,
      icons: (state) => state.icons,
    }),
    ...mapGetters('product', ['hasProduct', 'filteredProducts']),
    ...mapGetters('user', ['welcomeText', 'loggedIn']),
  },
  methods: {
    ...mapMutations('product', ['changeFilterType']),
    ...mapMutations('brand', ['changeActiveStatus']),
    ...mapMutations('user', ['changeName']),
  },
}
</script>
