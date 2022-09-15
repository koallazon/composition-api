import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/options-api',
      name: 'option-API',
      component: () => import('./pages/OptionApi.vue'),
    },
    {
      path: '/mixins',
      name: 'mixins',
      component: () => import('./pages/Mixins.vue'),
    },
    {
      path: '/composition-api',
      name: 'composition-API',
      component: () => import('./pages/CompositionApi.vue'),
    },
    {
      path: '/setup-script',
      name: 'setup-script',
      component: () => import('./pages/CompositionApiSetupScript.vue'),
    },
    {
      path: '/dependency-injection',
      name: 'dependency-injection',
      component: () => import('./pages/DependencyInjection.vue'),
    },
    {
      path: '/readonly',
      name: 'readonly',
      component: () => import('./pages/Readonly.vue'),
    },
    {
      path: '/watcheffect',
      name: 'watchEffect',
      component: () => import('./pages/WatchEffect.vue'),
    },
    {
      path: '/expose',
      name: 'setup-expose',
      component: () => import('./pages/ExposeParent.vue'),
    },
    {
      path: '/vuex',
      name: 'vuex',
      component: () => import('./pages/Vuex.vue'),
    },
  ],
})

export default router
