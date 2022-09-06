<template>
  <div>
    <section id="user">
      <p class="text-xl font-bold">{{ welcomeText }}</p>
      <div class="flex items-center mt-3">
        <label for="username" class="font-bold">사용자 이름</label>
        <input
          :value="name"
          id="username"
          type="text"
          class="text-base grow ml-3"
          @input="changeName"
        />
      </div>
    </section>
    <section id="product">
      <dl v-if="hasProduct">
        <dt class="flex justify-between mb-3">
          {{ name }}
          <div>
            <input type="radio" value="" />
            <button
              type="button"
              class="ring-white ring-1 mr-3 py-1.5"
              @click="changeFilterType('ALL')"
            >
              전체
            </button>
            <button
              type="button"
              class="ring-white ring-1 py-1.5"
              @click="changeFilterType('STOCK')"
            >
              재고 있음
            </button>
          </div>
        </dt>
        <dd
          v-for="(product, idx) in filteredProducts"
          :key="idx"
          class="flex flex-col bg-slate-100 mb-5 text-black p-2 rounded"
        >
          <p
            v-for="n in Object.keys(product).length"
            :key="`product-${n}`"
            class="flex"
          >
            <label>{{ Object.keys(product)[n - 1] }}</label
            ><span>: {{ product[Object.keys(product)[n - 1]] }}</span>
          </p>
        </dd>
      </dl>
    </section>
  </div>
</template>

<script>
import ProductMixin from "../mixins/productMixin";
import BrandMixin from "../mixins/brandMixin";
import UserMixin from "../mixins/userMixin";

export default {
  mixins: [ProductMixin, UserMixin, BrandMixin],
  mounted() {
    // Vue option 안에서 이름이 같을 경우 맨 마지막에 추가된 mixin이 덮어씀
    // BrandMixin의 name이 출력됨
    console.log(this.name);
  },
};
</script>

<style scoped>
section {
  width: 100%;
  border: 2px solid #ccc;
  border-radius: 1rem;
  margin-bottom: 2rem;
  padding: 24px;
  text-align: left;
}
input {
  min-height: 40px;
  padding: 0 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #eee;
  color: #000;
}
</style>
