<script setup>
import { useRouter } from "vue-router"
const router = useRouter()
const routes = router.options?.routes ?? []
</script>

<template>
  <nav>
    <template v-for="(route, index) in routes">
      <router-link
        v-text="route.name"
        :to="route.path"
        :class="{ active: router.currentRoute?.name === route.name }"
      />
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
