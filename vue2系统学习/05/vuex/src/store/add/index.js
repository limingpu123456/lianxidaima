import state from "./state"
import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"
export default {
  namespaced: true,
  state,
  //有点像computed属性
  getters,
  //修改数据
  mutations,
  actions,
}
