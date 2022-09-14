<script setup>
import { provide, readonly, ref } from 'vue'
import { useRouter } from 'vue-router'
import useMouse from './composables/useMouse.js'
import VueSetup from './components/vue3_setup.vue'
const testClass = ref('hot')
const router = useRouter()
const routes = router.options?.routes ?? []
const { x, y } = useMouse()
provide('x', readonly(x))
provide('y', readonly(y))
setTimeout(() => {
  testClass.value = 'cold'
}, 2000)
</script>

<template>
  <nav>
    <template v-for="(route, index) in routes" :key="index">
      <router-link :to="route.path" :class="{ active: router.currentRoute?.name === route.name }">
        {{ route.name }}
      </router-link>
      <span v-if="index < routes.length - 1">|</span>
    </template>
  </nav>
  <main>
    <RouterView />
  </main>
  <div>
    <vue-setup id="id1" :class="testClass" :title="testClass">
      <template #hello>
        <div>hello</div>
      </template>
    </vue-setup>
  </div>
</template>

<style scoped>
main {
  margin-top: 30px;
}
nav {
  font-size: 1.5rem;
  padding: 10px 0;
}
nav span {
  margin: 0 1.5rem;
}
nav a {
  color: #ddd;
}
nav a.router-link-exact-active {
  color: #5577ff;
  font-weight: 700;
}
</style>
