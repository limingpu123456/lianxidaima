export default {
  asyncAddNum(context, payload) {
    setTimeout(() => {
      context.commit("addNum", payload)
    }, 1000)
  }
}
