export default {
  namespaced: true,
  state: {
    listtitle: "",
    btnnum1: 0,
  },
  mutations: {
    chanListtitle(state, payload) {
      state.listtitle = payload
    },
    chanListbtnnum1(state, payload) {
      state.btnnum1 = payload
    }
  },
  actions: {
  },
}
