export default {
  namespaced: true,
  state: {
    isShowLoginModal: false,
  },
  getters: {
  },
  mutations: {
    //用来表示登录模态窗口的显示和隐藏
    chanIsShowLoginModal(state, payload) {
      state.isShowLoginModal = payload
    }
  },
  actions: {
  },
}
