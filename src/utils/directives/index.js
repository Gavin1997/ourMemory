import Vue from 'vue';

const req = require.context('.', false, /\.\/(?!index\.)\w*\.js$/);

req.keys().forEach(fileName => {
  const model = req(fileName);
  const name = fileName.replace(/\.\//, '').replace(/\.js$/, '');
  Vue.directive(name, model.default || model);
});
