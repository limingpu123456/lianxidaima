import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/goods',
    component: () => import('../views/Goods.vue')
  },
  {
    path: '/user',
    component: () => import('../views/User.vue'),
    redirect:'/user/profiles',
    children: [
      {
        //children有两种写路径的写法，第一种就不加斜杠，写成相对路径，第二个是写全了
      path: '/user/cart',
      component: () => import('../components/user/Cart.vue')
      },
      {
        path: 'profiles',
        component: () => import('../components/user/Profiles.vue')
      },
    ]
  },
  {
    path: '/order',
    component: () => import('../views/Order.vue')
  },
  {
    path: '/free',
    component: () => import('../views/Free.vue')
  },
  {
    path: '/details',
    component: () => import('../views/Details.vue')
  },
  {
    path: '*',
    name:'Error',
    component: () => import('../views/Error.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
//全局导航守卫(路由拦截)
// router.beforeEach((to, from, next) => {
//   //next()方法表示放行

//   //判断有没有登录
//   if (to.path === '/user') {
//     //再判断有没有token
//     let token = localStorage.getItem('x-auth-token')
//     if (token) {
//       next()
//     } else {
//       store.dispatch('toastStatus/asyncChanIsShowToast', {
//         msg: '请先登录',
//         type:'warning'
//       })
//     }
//     return
//   }
//   next()
// })
export default router
