import Vue from 'vue'
import Vuex from 'vuex'
import showLoginModal from './showLoginModal'
import loginStatus from './loginStatus'
import toastStatus from './toastStatus'
import userInfo from './userInfo'

Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    showLoginModal,
    loginStatus,
    toastStatus,
    userInfo,
  }
})
