import instance from "./request"
//这个文件来同一管理 项目中所有的api链接
//首页精品推荐的请求
export const JingpinAPI = () => instance.get("/products/recommend")

//发送短信验证码短信请求
export const SendSMSAPI = (params) => instance.post("/sendSMS", params)
