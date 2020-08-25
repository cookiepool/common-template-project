module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true, // 使用单引号
        arrowParens: 'always' // 箭头函数始终包含圆括号
      }
    ],
    // 不允许声明了 变量但是不使用，目前关闭函数参数里面的变量未使用不报错
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'none',
        ignoreRestSiblings: false
      }
    ],
    // 这个选项设置为警告，不然不能在代码中使用return设置断点
    'no-unreachable': 'warn'
  }
};
