module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  // TODO 暂时注释按需引入饿了么组件
  // plugins: [
  //   [
  //     'component',
  //     {
  //       libraryName: 'element-ui',
  //       styleLibraryName: 'theme-chalk'
  //     }
  //   ]
  // ],
  env: {
    development: {
      plugins: ['dynamic-import-node']
    }
  }
};
