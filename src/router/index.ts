import { createRouter, createWebHistory } from 'vue-router'
import PageDefault from '../Layouts/PageDefault.vue'
import AuthLayout from '../Layouts/AuthLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PageDefault,
      children: [
        {
          path: '',
          name: 'homePage',
          component: () => import('../views/Home.vue')
        },
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
      component: AuthLayout,
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
