import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Register from '@/views/Register.vue'
import Product from '@/views/Product.vue'
import Login from '@/views/Login.vue'
import Features from '@/views/Features.vue'
import NewFile from '@/views/NewFile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
      {
      path: '/register',
      name: 'register',
      component: Register,
    },
      {
      path: '/product',
      name: 'product',
      component: Product,
    },
     {
      path: '/features',
      name: 'features',
      component: Features,
    },
     {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/newfile',
      name: 'newfile',
      component: NewFile,
    },

  ],
})

export default router
