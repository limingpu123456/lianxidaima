import axios from "axios";
//主要有两个东西：
//请求头token放在请求拦截器里面
//请求拦截器，响应拦截器
//instance是实例，也就是所谓的对象
const instance = axios.create({
  baseURL: "http://kumanxuan1.f3322.net:8881/cms",
  //请求发送最多等待的时间
  timeout: 5000,
})
//interceptors是拦截器
instance.interceptors.request.use(config => {
  //什么时候执行这里的代码？  在每个请求发出去之前
  //这个请求拦截器可以添加token请求头
  // console.log("config为：", config)
  return config
}, err => {
  return Promise.reject(err)
})

//interceptors是拦截器
//这个是相应拦截器
instance.interceptors.response.use(res => {
  //什么时候执行这里的代码？  在后端返回相应，并且在进入到组件成功回调函数之前
  // console.log("res", res)
  //res是一个对象，就是后端发送的axios封装的对象
  //可以对服务器相应回来的数据做统一的处理
  //res.data就可以拿到后端给到我们的纯数据，其他的东西就不要了
  return res.data
}, err => {
  return Promise.reject(err)
})

export default instance
