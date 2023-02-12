import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "reset-css"
import '@/assets/css/global.less'
import SlideVerify from 'vue-monoplasty-slide-verify' // 拼图验证码

Vue.config.productionTip = false
Vue.use(SlideVerify)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
