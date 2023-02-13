export default {
  namespaced: true,
  state: {
    //用来表示登录的状态，true表示已经登录，false表示没有登录
    isLogined: localStorage.getItem("x-auth-token") ? true : false,
  },
  getters: {
  },
  mutations: {
    //用来表示登录模态窗口的显示和隐藏
    chanIsLogined(state, payload) {
      state.isLogined = payload
    }
  },
  actions: {
  },
}
