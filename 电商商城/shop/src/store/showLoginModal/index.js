export default {
  namespaced: true,
  state: {
    // 用来表示登录模态窗口的显示true或隐藏false
    isShowLoginModal: false
  },
  mutations: {
    // 修改isShowLoginModal的值
    chanIsShowLoginModal(state, payload) {
      state.isShowLoginModal = payload
    }

  },
  actions: {
  },
}