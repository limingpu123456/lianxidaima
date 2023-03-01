import Vue from "vue"
import SvgIcon from "./SvgIcon"
// 全局注册SvgIcon组件,这样就可以在其他地方使用这个svg-icon组件了
Vue.component("svg-icon", SvgIcon)

// 自动导入所有svg图标。
const req = require.context('@/assets/icons/svg',false,/\.svg$/)
const requireAll = requireContext =>{
    // requireContext.keys()数据：['./404.svg', './agency.svg', './det.svg', './user.svg']
    requireContext.keys().map(requireContext)
} 
requireAll(req)