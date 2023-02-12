import instance from './request'
export const JingpinAPI = () => instance.get("/products/recommend")
