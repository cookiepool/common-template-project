import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// 引入重置样式
import './styles/reset.scss';

// 引入element-ui（按需引入）
import { Input, Button, Form, FormItem } from 'element-ui';
Vue.use(Input)
  .use(Button)
  .use(Form)
  .use(FormItem);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
