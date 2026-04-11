import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Register from '@/views/Register.vue'
import Product from '@/views/Product.vue'
import Login from '@/views/Login.vue'
import Users from '@/views/Users.vue'

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
      path: '/users',
      name: 'users',
      component: Users,
    },
     {
      path: '/login',
      name: 'login',
      component: Login,
    },

  ],
})

export default router
