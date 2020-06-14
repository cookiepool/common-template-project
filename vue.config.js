const path = require('path');
const apiMocker = require('mocker-api');

// 这个可以自定义端口号
const port = process.env.port || process.env.npm_config_port || 9288;

// 解析路径
function resolve(dir) {
  return path.join(__dirname, dir);
}

// 自定义配置
module.exports = {
  devServer: {
    port: port,
    // 加载mocker-api
    before(app) {
      apiMocker(app, path.resolve('./src/mock/mock.js'), {
        changeHost: true
      });
    }
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
