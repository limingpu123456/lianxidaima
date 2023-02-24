const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  devServer: {
      proxy: {
          '/api': {
              target: "http://kumanxuan1.f3322.net:8881/cms",
              pathRewrite: {
                  '^/api': ''
              }
          }
      }
  }
}
