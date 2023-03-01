export default {
  namespaced: true,
  state: {
    isCollapse: false,
  },
  mutations: {
    changeIsCollapse(state) {
      //点击取反
      state.isCollapse = !state.isCollapse
    }
  }
}
