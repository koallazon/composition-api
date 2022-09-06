import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(), 
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('./pages/Home.vue')
        },
        {
            path: '/options-api',
            name: 'Option-API',
            component: () => import('./pages/OptionApi.vue')
        },
        {
            path: '/composition-api',
            name: 'Composition-API',
            component: () => import('./pages/CompositionApi.vue')
        },
        {
            path: '/composition-api-setup-script',
            name: 'Composition-API-etup-script',
            component: () => import('./pages/CompositionApiSetupScript.vue')
        }
    ]
})

export default router