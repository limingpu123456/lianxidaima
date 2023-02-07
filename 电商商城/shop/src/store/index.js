import Vue from 'vue'
import Vuex from 'vuex'
import showLoginModal from './showLoginModal'
Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    showLoginModal,
  }
})
