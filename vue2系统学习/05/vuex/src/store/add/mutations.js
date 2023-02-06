import { ADD_NUM } from "../MutationType"
export default {
  [ADD_NUM](state, payload) {
    // setTimeout(() => {
    // state.num += payload.age
    // }, 1000)
    state.num += payload
  }
}
