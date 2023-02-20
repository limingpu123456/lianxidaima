import Vue from 'vue'
import VueRouter from 'vue-router'
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
    component: () => import(/* webpackChunkName: "HomeView" */ '../views/HomeView.vue'),
    meta: {
      activeNum: 0,
      isShowTabbar: true,
    },
    children: [
      {
        //要么home斜杠都写全。要么就写一个searchPopup
        path: '/home/searchPopup',
        name: 'searchPopup',
        component: () => import(/* webpackChunkName: "searchPopup" */ '../views/SearchPopup.vue')
      },
    ]
  },
  {
    path: '/topic',
    name: 'Topic',
    component: () => import(/* webpackChunkName: "Topic" */ '../views/Topic.vue'),
    meta: {
      activeNum: 1,
      isShowTabbar: true,
    },
  },
  {
    path: '/category',
    name: 'category',
    component: () => import(/* webpackChunkName: "Topic" */ '../views/Category.vue'),
    meta: {
      activeNum: 2,
      isShowTabbar: true,
    },
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import(/* webpackChunkName: "Topic" */ '../views/Cart.vue'),
    meta: {
      activeNum: 3,
      isShowTabbar: true,
    },
  },
  {
    path: '/user',
    name: 'user',
    component: () => import(/* webpackChunkName: "Topic" */ '../views/User.vue'),
    meta: {
      activeNum: 4,
      isShowTabbar: true,
    },
  },
  {
    path: '/productDetail',
    name: 'ProductDetail',
    component: () => import(/* webpackChunkName: "ProductDetail" */ '../views/ProductDetail.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
//在每执行一条路由之前，执行这个函数，相当于钩子函数，用于路由守卫
router.beforeEach((to, from, next) => {
  //跳到哪里
  // console.log(to);
  //从哪跳转
  // console.log(from);
  //调用next函数，就可以顺利通往要到达的路由

  let token = localStorage.getItem('token')
  if (to.path == '/cart') {
    //判断有没有登录，本质就是判断token是否存在
    if (token) {
      next()
    } else {
      //表示没有登录
      Vue.prototype.$toast('请先登录')
      setTimeout(() => {
        next('/user')
      }, 1000)
    }
  }
  next()
})

export default router
