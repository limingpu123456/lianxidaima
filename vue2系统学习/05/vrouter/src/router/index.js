import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
//router整体   $route 一条对应关系
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    //重定向
    redirect: "/tab/category"
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    //只有访问这个页面才会加载，而上面的是直接加载，一口气全部加载了，最好用懒加载
    component: () => import(/* webpackChunkName: "nihao" */ '../views/AboutView.vue')
  },
  {
    path: '/tab',
    name: 'Tab',
    component: () => import(/* webpackChunkName: "nihao" */ '../views/Tab.vue'),
    children: [
      {
        path: '/tab/category',
        component: () => import('../components/Category.vue')
      },
      {
        path: '/tab/cart',
        component: () => import('../components/Cart.vue')
      },
      {
        path: '/tab/mine',
        component: () => import('../components/Mine.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
