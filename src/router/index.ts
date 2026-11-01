import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import PortfolioView from '@/views/PortfolioView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Avijit Bairagi | Lead Software Engineer | Fintech & Backend Engineering',
        description: 'Lead Software Engineer with 8+ years building enterprise applications, fintech platforms, payment integrations, and scalable backend systems.'
      }
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: PortfolioView,
      meta: {
        title: 'Avijit Bairagi – Professional Portfolio | Experience & Engineering Projects',
        description: 'Comprehensive professional portfolio of Avijit Bairagi: career history, engineering contributions, projects, technical expertise, and verified outcomes.'
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
          const element = document.querySelector(to.hash)
          if (element) {
            resolve({
              el: to.hash,
              behavior: 'smooth',
              top: 80
            })
          } else {
            resolve({ top: 0, behavior: 'smooth' })
          }
        }, 100)
      })
    }
    return { top: 0, behavior: 'smooth' }
  }
})

router.afterEach((to) => {
  const title = (to.meta.title as string) || 'Avijit Bairagi | Lead Software Engineer'
  document.title = title
  
  const descEl = document.querySelector('meta[name="description"]')
  if (descEl && to.meta.description) {
    descEl.setAttribute('content', to.meta.description as string)
  }
})

export default router
