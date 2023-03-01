import instance from "./request";

//获取验证码的请求
export const  GetCaptchaCodeApi = () => instance.get("http://xue.cnkdl.cn:23683/prod-api/captchaImage")

//登录请求
export const LoginApi = (params) => instance.post("/prod-api/login", params)

//获取用户可以访问的路由的api
export const  GetUserRoutersApi = () => instance.get("/prod-api/getRouters")

//获取用户信息
export const  GetUserInfoApi = () => instance.get("/prod-api/getInfo")

//客户管理-客户列表展示
export const  GetCustomerListApi = (params) => instance.get("/prod-api/customer",{params})
