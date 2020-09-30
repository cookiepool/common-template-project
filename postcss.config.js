// TODO pxtorem的插件先注释，需要使用的话再放出来
// const pxtorem = require('postcss-pxtorem');
const autoprefixer = require('autoprefixer');

module.exports = ({ file }) => {
  return {
    plugins: [
      autoprefixer()
      // pxtorem({
      //   rootValue: 75,
      //   propList: ['*'],
      //   selectorBlackList: ['van']
      // })
    ]
  };
};
