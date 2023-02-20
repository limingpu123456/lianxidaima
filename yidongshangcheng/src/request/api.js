import request from './request'
export const GetHomeList = () => request.get("/index/index")
//获取搜索弹出框的数据
export const GetSearchPopupData = () => request.get("/search/index")
//获取实时搜索的文本提示数据列表
export const GetSearchTipsListData = (params) => request.get("/search/helper", { params })
//搜索商品的列表数据
export const GetGoodsListData = (params) => request.get("/goods/list", { params })
//清除历史记录
export const ClearHistory = () => request.post("/search/clearhistory")
//登录请求
export const GoLogin = params => request.post("/auth/loginByWeb", params)
//商品详情请求
export const GetGoodsDetailData = (params) => request.get("/goods/detail", { params })
//相关产品的数据
export const GetGoodsRelatedtData = (params) => request.get("/goods/related", { params })
//获取购物车的产品数量
export const GetGoodsCount = () => request.get("/cart/goodscount")
//加入购物车
export const AddProductToCart = params => request.post("/cart/add", params)
//获取购物车数据
export const GetCartListData = () => request.get("/cart/index")
//点击切换商品的选中状态
export const ChangeGoodChecked = params => request.post("/cart/checked", params)
