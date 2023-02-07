import axios from 'axios'
import store from "@/store"

// instance 实例 对象
const instance = axios.create({
  baseURL: "http://kumanxuan1.f3322.net:8881/cms",
  timeout: 5000
})

// 主要有两个东西: 请求拦截器,  响应拦截器
instance.interceptors.request.use(config => {
  // 什么时候执行这里的代码??  在每个请求发出去之前
  // config 是什么?? 是一个对象 记录了本次请求的相关信息
  console.log("config为:", config);
  // 这个函数用来做什么??  可以用来做一些请求前的准备工作,比如: 添加请求头
  
  let token = localStorage.getItem("x-auth-token");
  if (token) {
    // 就在请求头中携带token
    config.headers["x-auth-token"] = token;
  }
  return config
}, err => {
  return Promise.reject(err)
})

// 响应拦截器
instance.interceptors.response.use(res => {
  // 什么时候执行这里的代码??  后端返回响应,在进入到组件中成功地回调函数之前,执行
  // res 是什么?? 是一个对象 , 原先说的axios封装的res对象
  // console.log("res为:", res);
  // 这个函数用来做什么??  对服务器相应回来的数据做统一的处理

  // 接口数据code不为0的情况统一处理:
  let res_data = res.data
  if (res_data.code != 0 && res_data.code != 400 && res_data.code!=407) {
    // 业务上的是失败
    store.dispatch("toastStatus/asyncChanIsShowToast", {
      msg: res_data.message,
      type:"danger"
    })
    return false
  }
  return res_data
}, err => {
  // 请求的失败
  // 相当于我们在组件中,发送请求之后的那个catch方法
  store.dispatch("toastStatus/asyncChanIsShowToast", {
    msg: err,
    type: "danger"
  })
  return Promise.reject(err);
})

export default instance