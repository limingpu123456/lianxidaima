export default {
  namespaced: true,
  state: {
    //用来白哦是提示框组件的显示与隐藏
    isShowToast: false,
    msg: "",
    type: ""
  },
  getters: {
  },
  mutations: {
    chanIsShowToast(state, payload) {
      state.isShowToast = payload.isShow;
      state.msg = payload.msg;
      state.type = payload.type
    }
  },
  //commit是在异步action中调用mutations中的方法
  actions: {
    asyncChanIsShowToast(state, payload) {
      state.commit('chanIsShowToast', {
        isShow: true,
        msg: payload.msg,
        type: payload.type,
      })
      setTimeout(() => {
        state.commit('chanIsShowToast', {
          isShow: false,
          msg: payload.msg,
          type: payload.type,
        });
      }, 1500);
    }
  },
}
