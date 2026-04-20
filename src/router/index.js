import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/members',
    name: 'Members',
    component: () => import('@/views/MembersView.vue')
  },
  {
    path: '/project',
    name: 'Project',
    component: () => import('@/views/ProjectView.vue')
  },
  {
    path: '/timeline',
    name: 'Timeline',
    component: () => import('@/views/TimelineView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router