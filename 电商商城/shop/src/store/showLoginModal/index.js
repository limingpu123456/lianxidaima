export default {
  namespaced: true,
  state: {
    //登录魔魁啊窗口的娴熟或隐藏
    isShowLoginModal: false,
  },
  getters: {
  },
  mutations: {
    chanIsShowLoginModal(state, payload) {
      state.isShowLoginModal = payload
    }
  },
  actions: {
  },
}
