import { GetUserInfoApi } from '@/request/api'
export default {
  namespaced: true,
  state: {
    //从本地取的字符串如果原来是个对象，需要把他再反序列化
    userInfo: JSON.parse(localStorage.getItem("edb-userInfo")) || {
      permissions: null,
      roles: null,
      user:null
    },
  },
  mutations: {
    //如果存到本地的东西是对象，需要把对象先序列化
    changeUserInfo(state, payload) {
      state.userInfo = payload
      localStorage.setItem("edb-userInfo",JSON.stringify(state.userInfo))
    }
  },
  actions: {
    async asyncChangeUserInfo({commit},payload) {
      let GetUserInfoApiRes = await GetUserInfoApi()
      console.log(GetUserInfoApiRes);
      if (!GetUserInfoApiRes) return;
      commit("changeUserInfo", {
        permissions: GetUserInfoApiRes.permissions,
        roles: GetUserInfoApiRes.roles,
        user: GetUserInfoApiRes.user
      })
    }
  }
}
