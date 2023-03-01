import Vue from 'vue'
import VueRouter from 'vue-router'
import { GetUserRoutersApi } from '@/request/api'
import store from '@/store'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'mainlayout',
    component: () => import(/* webpackChunkName: "mainlayout" */ '../views/layout/MainLayout.vue'),
    redirect:'/home',
    children:[
      {
        path:"/home",
        component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
      },
      {
        path:"/customer/customer",
        component: () => import(/* webpackChunkName: "customer" */ '../views/customer/Customer.vue')
      },
      {
        path:"/customer/visit",
        component: () => import(/* webpackChunkName: "visit" */ '../views/customer/Visit.vue')
      },
      {
        path:"/flow/definition",
        component: () => import(/* webpackChunkName: "definition" */ '../views/flow/Definition.vue')
      },
      {
        path:"/business/appointment",
        component: () => import(/* webpackChunkName: "definition" */ '../views/business/Appointment.vue')
      },
      {
        path:"/business/service",
        component: () => import(/* webpackChunkName: "definition" */ '../views/business/Service.vue')
      },
      {
        path:"/business/statement",
        component: () => import(/* webpackChunkName: "definition" */ '../views/business/Statement.vue')
      },
    ]
  },
  {
    path: '*',
    component: () => import(/* webpackChunkName: "404" */ '../views/404.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/login/Login.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async(to, from, next) => {
 const token =  localStorage.getItem("edb-authorization-token")
  //管理系统常见的两个经典的逻辑
  //1.如果用户访问登录页面，但是token已经存在，跳转到首页
  if (to.path == '/login'&& token) {
    next('/');
    return
  }
  //2.如果用户访问不是登录页面，但是没有token，要跳转到登录页面
  if (to.path!== '/login' && !token) {
    next('/login')
    return
  }
  if (token && store.state.userMenuData.menuData.length == 0) {
    let GetUserRoutersApiRes = await GetUserRoutersApi()
    let newUserMenuData = [{ title: '首页', path: '/' }]
    let ret = GetUserRoutersApiRes.data.map(item => {
      if (item.children) {
        return {
          title: item.meta.title,
          path: item.path,
          children: item.children.map(sitem => {
            return {
              title: sitem.meta.title,
              path: item.path+'/'+sitem.path
            }
          })
        }
      } else {
        return {
          title: item.meta.title,
          path: item.path,
        }
      }
    })
    newUserMenuData = [...newUserMenuData, ...ret];
    store.commit("userMenuData/changeMenuData",newUserMenuData)
    console.log(newUserMenuData);
  }
  next()
})

export default router
