import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/curriculum',
    name: 'curriculum',
    component: () => import(/* webpackChunkName: "about" */ '../views/CurriculumView.vue')
  },
  {
    path: '/proyecto',
    name: 'proyecto',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProyectoView.vue')
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactoView.vue')
  },




]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
