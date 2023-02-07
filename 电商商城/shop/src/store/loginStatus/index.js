export default {
  namespaced: true,
  state: {
    // 用来表示登录的状态, true表示已经登录 false表示没有登录
    isLogined: localStorage.getItem("x-auth-token")?true:false
  },
  mutations: {
    // 修改isLogined的值
    chanIsLogined(state, payload) {
      state.isLogined = payload
    }

  },
  actions: {
  },
}