/*
  注册全局组件、插件
*/
import Vue from 'vue';
// import vueAwesomeSwiper from "vue-awesome-swiper";
// import "swiper/dist/css/swiper.css";
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);
import IEcharts from 'vue-echarts-v3/src/full.js';
Vue.component('IEcharts', IEcharts);
// 全局组件注册
import '@/components';

// 引入样式
import 'vue-easytable/libs/themes-base/index.css';
// 导入 table 和 分页组件
import { VTable, VPagination } from 'vue-easytable';

// 注册到全局
Vue.component(VTable.name, VTable);
Vue.component(VPagination.name, VPagination);
