export default {
  namespaced: true,
  state: {
    listtitle: "",
  },
  mutations: {
    chanListtitle(state, payload) {
      state.listtitle = payload
    }
  },
  actions: {
  },
}
