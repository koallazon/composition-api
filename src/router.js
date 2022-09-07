import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/options-api',
      name: 'Option-API',
      component: () => import('./pages/OptionApi.vue'),
    },
    {
      path: '/mixins',
      name: 'Mixins',
      component: () => import('./pages/Mixins.vue'),
    },
    {
      path: '/composition-api',
      name: 'Composition-API',
      component: () => import('./pages/CompositionApi.vue'),
    },
    {
      path: '/setup-script',
      name: 'Setup-script',
      component: () => import('./pages/CompositionApiSetupScript.vue'),
    },
    {
      path: '/dependency-injection',
      name: 'Dependency-Injection',
      component: () => import('./pages/DependencyInjection.vue'),
    },
  ],
})

export default router
