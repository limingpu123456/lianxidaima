//主要有两个东西：请求拦截器， 响应拦截器
import axios from "axios";
import store from '@/store'
// 实例：就是对象
const instance = axios.create({
  baseURL: "http://kumanxuan1.f3322.net:8881/cms",
  //请求过期时间最大值
  timeout: 5000
})
instance.interceptors.request.use(config => {
  //怎么学一个方法：弄清楚什么时候执行这个方法
  //config是一个对象，记录了本次请求的相关信息，是axios封装成的对象
  //这个函数用来做一些请求前的准备工作，如果有token，就在请求头中携带token到后端去
  let token = localStorage.getItem("x-auth-token")
  if (token) {
    config.headers['x-auth-token'] = token
  }
  return config
}, err => {
  return Promise.reject(err)
})

//响应拦截器
instance.interceptors.response.use(res => {
  //怎么学一个方法：弄清楚什么时候执行这个方法
  //这个在后端返回响应，在进入到组件中成功的回调函数之前执行
  //这个res就是then里面的，实际在create()，代码中在then里面接受的res就是响应拦截器返回的res
  //这个res就是服务器返回回来的数据做统一的处理
  let res_data = res.data
  if (res_data.code != 0) {
    store.dispatch("toastStatus/asyncChanIsShowToast", { msg: res_data, type: 'danger' })
    return false
  }
  return res_data
}, err => {
  store.dispatch("toastStatus/asyncChanIsShowToast", { msg: err, type: 'danger' })
  return Promise.reject(err)
})
export default instance
