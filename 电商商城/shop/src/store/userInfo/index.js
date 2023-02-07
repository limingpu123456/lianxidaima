import {  UserProfilesAPI } from "@/request/api"
export default {
  namespaced: true,
  state: {
    //购物车数量
    cartTotal: 0,
    // 用户信息
    userInfo: {
      nickName: "游客~~",
      coin: 0,
      headImg: require("@/assets/img/userImg.f8bbec5e.png")
    }
  },
  mutations: {
    chanUserInfo(state, payload) {
      
      state.cartTotal = payload.cartTotal,
      // 用户信息
      state.userInfo = payload.userInfo
    },
    initUserInfo(state) {
      state.cartTotal = 0;
      state.userInfo = {
        nickName: "游客~~",
        coin: 0,
        headImg: require("@/assets/img/userImg.f8bbec5e.png")
      }
    }
  },
  actions: {
    async asyncChanUserInfo({ commit }) {
      let userInfoRes = await UserProfilesAPI();
      // console.log("userInfoRes为:", userInfoRes);
      commit("chanUserInfo", userInfoRes.data)
    }
  },
}