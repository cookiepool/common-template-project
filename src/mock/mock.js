/****
 * 用于模拟REST API
 * 使用mock工具为mocker-api，github：https://github.com/jaywcjlove/mocker-api
 * ****/

// 引入模块
const user = require('./modules/user');

const proxy = {
  ...user
};

module.exports = proxy;
