const path = require('path');

// 这个可以自定义端口号
const port = process.env.port || process.env.npm_config_port || 9288;

// 解析路径
function resolve(dir) {
  return path.join(__dirname, dir);
}

// 自定义配置
module.exports = {
  devServer: {
    port: port
  },
  configureWebpack: {
    // 配置一个路径解析
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
};
