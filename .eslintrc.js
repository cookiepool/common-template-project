module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  globals: {
    AMap: true
  },
  rules: {
    // prettier报错规则
    'prettier/prettier': [
      'error',
      {
        'singleQuote': true, // 使用单引号
        'arrowParens': 'always' // 箭头函数始终包含圆括号
      }
    ],
    // 这个选项设置为警告，不然不能在代码中使用return设置断点，这个规则在switch处感觉会出现判定问题，所以关闭
    'no-unreachable': 'off',
    // 不要使用没必要的转义
    'no-useless-escape': 'off',
    // 不允许使用Object.prototypes直接内置命令
    'no-prototype-builtins': 'off',
    // 不允许声明了 变量但是不使用，目前关闭函数参数里面的变量未使用不报错
    'no-unused-vars': ['error', { 
      'vars': 'all',
      'args': 'none',
      'ignoreRestSiblings': false
    }],
    // switch语句的case后面必须使用break，这个规则暂时 关闭。
    'no-fallthrough': 'off',
    // 有些文件里面的props属性没声明类型，这个规则暂时关闭
    'vue/require-prop-type-constructor': 'off',
    // 有些页面的计算属性没有始终返回一个值，这个规则暂时关闭
    'vue/return-in-computed-property': 'off',
    // 这个规则表示不允许在computed属性里面出现给data里面变量赋值的操作，这个规则暂时关闭  
    'vue/no-side-effects-in-computed-properties': 'off',
    // 这个规则表示v-if和v-for不要再同一级标签使用，这个暂时关闭
    'vue/no-use-v-if-with-v-for': 'off'
  }
};
