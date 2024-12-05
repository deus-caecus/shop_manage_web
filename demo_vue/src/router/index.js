import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: ()=> import('@/views/HomeView.vue')
    },
    {
      path: '/Login',
      name: 'Login',
      component:()=>import('@/views/LoginView.vue')
    },
    {
      path:'/Login2',
      name:'Login2',
      component:()=>import('@/views/LoginView2.vue')
    }
  ],
})

export default router
