export default {
  namespaced: true,
  state: {
    //购物车数量
    cartTotal: 0,
    //用户信息
    userInfo: {
      nickName: "游客",
      coin: 0,
      //路径要用require!!!!!!!!!!!
      headImg: require("@/assets/img/userImg.f8bbec5e.png")
    },
  },
  getters: {
  },
  mutations: {
    chanUserInfo(state, payload) {
      state.cartTotal = payload.cartTotal
      state.userInfo = payload.userInfo
    }
  },
  actions: {
    async asyncChanUserInfo() {
      let userInfoRes = await UserProfilesAPI()
    }
  },
}
