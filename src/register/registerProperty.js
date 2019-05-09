import Vue from 'vue';
import axios from 'axios';
import lodash from 'lodash';

Object.defineProperty(Vue.prototype, '$http', {
  value: axios
});
Object.defineProperty(Vue.prototype, '$lodash', {
  value: lodash
});
