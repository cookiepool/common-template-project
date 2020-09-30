const path = require('path');

// 解析路径
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: './',
  productionSourceMap: process.env.NODE_ENV === 'development' ? true : false,
  lintOnSave: 'default',
  configureWebpack: {
    // 配置一个路径解析
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  chainWebpack: (config) => {
    // 使用官方的懒加载需要去掉官方脚手架的prefetch配置
    config.plugins.delete('prefetch');
  }
};
