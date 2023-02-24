import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "reset-css"
import '@/assets/css/global.less'
import SlideVerify from 'vue-monoplasty-slide-verify' // 拼图验证码

Vue.config.productionTip = false
Vue.use(SlideVerify)

//VUe的全局变量
//通过prototype定义的值，可以在组件内部直接使用this.变量名来获取
//相当于每一个vue组件都有这个数据
Vue.prototype.imgBaseUrl = 'https://sc.wolfcode.cn'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
