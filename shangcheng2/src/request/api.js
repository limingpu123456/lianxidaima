import instance from './request'
import qs from 'qs'
//首页精品推荐的请求
export const JingpinAPI = () => instance.get("/products/recommend")
//发送短信验证码的请求,post后面接参数要写对象
export const SendSMSAPI = (params) => instance.post("/sendSMS", qs.stringify(params))
//手机号验证码(含注册)
export const PhoneLoginAPI = (params) => instance.post("/phoneRegin", qs.stringify(params))
//获取登录用户信息
export const UserProfilesAPI = () => instance.get("/shop/userProfiles")
