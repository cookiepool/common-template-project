/****
 * 用于模拟REST API
 * 使用mock工具为mocker-api，github：https://github.com/jaywcjlove/mocker-api
 * ****/

// 引入模块
const user = require('./modules/user');

const proxy = {
  // 对象的解构是es7标准
  ...user
};

module.exports = proxy;
