import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import PortfolioView from '@/views/PortfolioView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Avijit Bairagi | Lead Software Engineer | Fintech & Backend Engineering'
      }
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: PortfolioView,
      meta: {
        title: 'Portfolio & Professional Experience | Avijit Bairagi'
      }
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ],
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            el: to.hash,
            behavior: 'smooth',
            top: 72
          })
        }, 120)
      })
    }
    return { top: 0, behavior: 'smooth' }
  }
})

router.afterEach((to) => {
  if (to.meta?.title && typeof document !== 'undefined') {
    document.title = to.meta.title as string
  }
})

export default router
