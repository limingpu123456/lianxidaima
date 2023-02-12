export default {
  namespaced: true,
  state: {
    text: "",
  },
  mutations: {
    clickbtn(state, payload) {
      state.text = payload
    }
  },
}
