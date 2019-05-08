import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// 全局css
import './styles/global.scss';
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
