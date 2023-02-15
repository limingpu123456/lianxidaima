import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/shouye'
  },
  {
    path: '/home',
    component: HomeView
  },
  {
    path: '/detailpage',
    component: () => import(/* webpackChunkName: "about" */ '../views/DetailPage.vue')
  },
  {
    path: '/shouye',
    component: () => import('../views/Shouye.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
