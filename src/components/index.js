import Vue from 'vue';

// 检索目录下的模块
const req = require.context('.', true, /\.vue$/);

req.keys().forEach(fileName => {
  // require模块
  if (fileName.includes('Om')) {
    const componentConfig = req(fileName);
    const name =
      fileName.name ||
      fileName.replace(/^\.\/(.*\/)?/, '').replace(/\.vue$/, '');
    // 过滤掉不以 Nr 开头的 .vue 文件
    /^Om/.test(name) &&
      Vue.component(name, componentConfig.default || componentConfig);
  }
});
