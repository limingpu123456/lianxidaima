import axios from 'axios'
const instance = axios.create({
  baseURL: "http://kumanxuan1.f3322.net:8001",
  timeout: 5000
});
//请求拦截器
instance.interceptors.request.use(
  config => {
    //可以判断用户有没有登录，如果没有登录，就return，请求就不会出去
    //config是本次请求的信息
    // console.log('config:', config)
    return config
  }, err => {
    return Promise.reject(err)
  })
//相应拦截器
instance.interceptors.response.use(
  res => {
    // console.log('res:', res)
    return res
  }, err => {
    return Promise.reject(err)
  })
export default instance
