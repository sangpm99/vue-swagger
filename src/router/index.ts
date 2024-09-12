import { createRouter, createWebHistory } from 'vue-router'
import PageDefault from '../Layouts/PageDefault.vue'
import AuthLayout from '../Layouts/AuthLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      name: 'home',
      component: PageDefault,
      children: [
        {
          path: '/',
          name: 'home',
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
      path: '/authorize/',
      component: AuthLayout,
      name: 'authorize',
      children: [
        {
          path: 'signin',
          name: 'sign in',
          component: () => import('../views/authorize/SignIn.vue')
        },
        {
          path: 'signup',
          name: 'sign up',
          component: () => import('../views/authorize/SignUp.vue')
        },
        {
          path: 'forgotpassword',
          name: 'forgot password',
          component: () => import('../views/authorize/ForgotPassword.vue')
        },
        {
          path: 'recoverpassword',
          name: 'recover password',
          component: () => import('../views/authorize/RecoverPassword.vue')
        }
      ]
    },
    {
      path: '/my-account/',
      
    }
  ]
})

export default router
