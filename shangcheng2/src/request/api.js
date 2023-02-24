import instance from './request'
import qs from 'qs'
//首页精品推荐的请求,热门兑换
export const JingpinAPI = () => instance.get("/products/recommend")
export const ReMenAPI = () => instance.get("/products/hot")
//发送短信验证码的请求,post后面接参数要写对象
export const SendSMSAPI = (params) => instance.post("/sendSMS", qs.stringify(params))
//手机号验证码(含注册)
export const PhoneLoginAPI = (params) => instance.post("/phoneRegin", qs.stringify(params))
//获取登录用户信息
export const UserProfilesAPI = () => instance.get("/shop/userProfiles")
//获取详情页数据
export const GoodDetailsAPI = (id) => instance.get(`/products/${id}`)
//请求加入购物车
export const AddToCartAPI = (params) => instance.post("/shop/carts/add", qs.stringify(params))
//商品搜索请求
export const SearchGoodsAPI = (params) => instance.get("/products",{params})
