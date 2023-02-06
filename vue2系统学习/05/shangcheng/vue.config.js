const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
//前端代理服务器，解决跨域问题
module.exports = {
  devServer: {
    proxy: "http://localhost:8000"
  }
}
