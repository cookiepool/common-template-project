import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// 引入reset.scss
import '@/assets/css/reset.scss';

// api请求的方法
import requestInstance from '@/utils/request';
Vue.prototype.$api = requestInstance;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
