import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home.vue'),
    meta: { title: '首页' }
  }
];

const router = new VueRouter({
  routes
});

export default router;
