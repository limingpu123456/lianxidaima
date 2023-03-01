import axios from "axios";
//这个import进来的就是一个函数
import {Message} from 'element-ui'
const instance = axios.create({
  baseURL:"http://xue.cnkdl.cn:23683",
  timeout:1000
})

instance.interceptors.request.use(config =>{
  //记录请求头
  const token = localStorage.getItem("edb-authorization-token")
  if (token && !config.url.endsWith('/login') && !config.url.endsWith('/captchaImage')) {
    config.headers["Authorization"] = "Bearer "+token
  }
  return config
}, err => {
  return Promise.reject(err)
})

instance.interceptors.response.use(res => {
  let res_data = res.data
  if (res_data.code!=200) {
    Message.error(res_data.msg || '网络请求错误')
    return false
  }
  return res_data
}, err => {
  return Promise.reject(err)
})

export default instance
