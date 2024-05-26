import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/ubike',
      name: 'ubike',
      component: () => import('../views/uBikeTable/uBikeTable.vue')
    },
    {
      path: '/match-game',
      name: 'match-game',
      component: () => import('../views/MatchGame/MatchGame.vue')
    }
  ]
})

export default router
