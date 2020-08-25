/*
 * 用于模拟REST API
 */

// 引入模块
const user = require('./modules/user');

const proxy = {
  ...user
};

module.exports = proxy;
