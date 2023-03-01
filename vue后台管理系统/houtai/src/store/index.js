import Vue from 'vue'
import Vuex from 'vuex'
import navCollapse from './navCollapse'
import userMenuData from './userMenuData'
import userInfo from './userInfo'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    navCollapse,
    userMenuData,
    userInfo
  }
})
