<script setup>
import { provide, readonly, ref } from 'vue'
import { useRouter } from 'vue-router'
import useFetch from '@/composables/useFetch.js'
const router = useRouter()
const routes = router.options?.routes ?? []
provide('globalFetch', useFetch)
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
</template>

<style scoped>
main {
  margin-top: 30px;
}
nav {
  width: 100%;
  font-size: 1.5rem;
  padding: 10px 5px;
  line-height: 2.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
