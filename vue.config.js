module.exports = {
  devServer: {
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://mall-pre.springboot.cn',
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      }
    }
  },
  lintOnSave: false,
  chainWebpack:config=>{
    config.plugins.delete('prefetch');
  }
}