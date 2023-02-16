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
