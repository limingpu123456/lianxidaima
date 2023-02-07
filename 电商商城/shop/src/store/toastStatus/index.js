export default {
  namespaced: true,
  state: {
    // 用来表示提示框组件的显示与隐藏状态
    isShowToast: false,
    msg: "",
    // 我们封装的提示框组件有3种状态, 用type属性来表示
    // success 成功
    // warning 警告
    // danger 失败 
    type:""
  },
  mutations: {
    // 修改isShowToast的值
    chanIsShowToast(state, payload) {
      state.isShowToast = payload.isShow;
      state.msg = payload.msg;
      state.type = payload.type;

      
    }

  },
  actions: {
    // 要用到提示框直接调用这个方法  asyncChanIsShowToast
    asyncChanIsShowToast(state,payload) {
      state.commit('chanIsShowToast', {
        isShow: true,
        msg: payload.msg,
        type: payload.type
      })
      setTimeout(() => {
        state.commit('chanIsShowToast',{
          isShow: false,
          msg: payload.msg,
          type: payload.type
        });
      }, 1500)
    }
  },
}

// 封装Toast组件总结:
// 结构样式
// 显示和隐藏的变量存在Vuex中
// 过渡效果(进场离场)
// msg 和 type的处理 (toast 文字和图标是的处理)
// 定时器,隐藏toast组件
// 定时器优化-- 抽取定时器到actions方法中,让调用更加简便