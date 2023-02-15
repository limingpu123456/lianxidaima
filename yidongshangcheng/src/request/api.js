import request from './request'
export const GetHomeList = () => request.get("/index/index")
export const GetProDetalList = () => request.get("/brand/detail")
