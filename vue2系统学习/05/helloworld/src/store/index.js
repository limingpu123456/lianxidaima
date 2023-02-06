import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//更方便的组件间传值，更方便的状态管理
export default new Vuex.Store({
  //保存数据
  state: {
    num: 2000,
    
  },
  //计算属性，有缓存作用
  getters: {
  },
  //对数据进行修改
  mutations: {
  },
  //异步修改数据
  actions: {
  },
  //模块
  modules: {
  }
})
