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
    children: [
      {
        //要么home斜杠都写全。要么就写一个searchPopup
        path: '/home/searchPopup',
        name: 'searchPopup',
        component: () => import(/* webpackChunkName: "searchPopup" */ '../views/SearchPopup.vue')
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
