import Vue from 'vue'
import VueRouter from 'vue-router'
import Content from '../components/Content'
import Main from '../components/Main'
import Kuang from '../components/Kuang'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      //路由路径
      path: '/content',
      name: 'content',
      //跳转的组件
      component: Content
    },
    {
      //路由路径
      path: '/main',
      name: 'main',
      //跳转的组件
      component: Main
    },
    {
      //路由路径
      path: '/kuang',
      name: 'kuang',
      //跳转的组件
      component: Kuang
    },
  ]
})