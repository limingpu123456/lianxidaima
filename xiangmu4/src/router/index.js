import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
//解决重复点击路由的bug问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function (location) {
  return originalPush.call(this, location).catch(err => { })
};
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/page1',
    component: () => import(/* webpackChunkName: "searchPopup" */ '../views/page1.vue')
  },
  {
    path: '/page2',
    component: () => import(/* webpackChunkName: "searchPopup" */ '../views/page2.vue')
  },
  {
    path: '/page3',
    component: () => import(/* webpackChunkName: "searchPopup" */ '../views/page3.vue')
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
