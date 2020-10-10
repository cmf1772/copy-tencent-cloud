/*
* @Author: liangsir
* @Date: 2020-05-10 23:01:37
* @LastEditors: liangsir
* @LastEditTime: 2020-05-30 18:12:31
* @Description:
*/

module.exports = {
  lintOnSave: false,
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  indexPath: 'index.html',
  parallel: false,
  configureWebpack: {
    externals: {
      // "BMap": "BMap",
      'AMap': 'AMap'
    },
  },
  devServer: {
    disableHostCheck: true,
    port: 8088,
    open: true,
    compress: false,
    proxy: {
      '/api': {
        // 目标 API 地址
        target: '',
        // target: 'http://192.168.0.118',
        // 如果要代理 websockets
        ws: false,
        // 将主机标头的原点更改为目标URL
        changeOrigin: true,
        pathRewrite: {
          '^/api': '' //代理的路径
        }
      }
    }
  },


}
