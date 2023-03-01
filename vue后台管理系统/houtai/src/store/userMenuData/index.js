export default {
  namespaced: true,
  state: {
    menuData: [],
  },
  mutations: {
    changeMenuData(state,payload) {
      //点击取反
      state.menuData = payload
    }
  }
}
