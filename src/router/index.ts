import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PageDefault from '../views/PageDefault.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PageDefault,
      children: [
        {
          path: 'shop',
          name: 'shop',
          component: () => import('../views/Shop.vue')
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('../views/About.vue')
        },
        {
          path: 'blog',
          name: 'blog',
          component: () => import('../views/Blog.vue')
        },
        {
          path: 'contact',
          name: 'contact',
          component: () => import('../views/Contact.vue')
        }
      ]
    },
    {
      path: '/authorize',
      name: 'Sign In',
      component: () => import('../Layouts/AuthLayout.vue'),
      children: [
        {
          path: 'signin',
          name: 'signin',
          component: () => import('../views/authorize/SignIn.vue')
        },
        {
          path: 'signup',
          name: 'signup',
          component: () => import('../views/authorize/SignUp.vue')
        }
      ]
    }
  ]
})

export default router
