import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout/index.vue'
import AuthLayout from '@/layouts/AuthLayout/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      name: 'home',
      component: DefaultLayout,
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('../views/pages/Home/index.vue')
        },
        {
          path: 'shop',
          name: 'shop',
          component: () => import('../views/pages/Shop/index.vue')
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('../views/pages/About/index.vue')
        },
        {
          path: 'blog',
          name: 'blog',
          component: () => import('../views/pages/Blog/index.vue')
        },
        {
          path: 'contact',
          name: 'contact',
          component: () => import('../views/pages/Contact/index.vue')
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
          component: () => import('../views/authorize/SignIn/index.vue')
        },
        {
          path: 'twofactor',
          name: 'two factor',
          component: () => import('../views/authorize/TwoFactor/index.vue')
        },
        {
          path: 'signup',
          name: 'sign up',
          component: () => import('../views/authorize/SignUp/index.vue')
        },
        {
          path: 'forgotpassword',
          name: 'forgot password',
          component: () => import('../views/authorize/ForgotPassword/index.vue')
        },
        {
          path: 'recoverpassword',
          name: 'recover password',
          component: () => import('../views/authorize/RecoverPassword/index.vue')
        }
      ]
    }
  ]
})

export default router
