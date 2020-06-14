import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

/** 不需要权限就能访问的路由 **/
export const constRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/login')
  },
  {
    path: '/404',
    name: '404',
    component: () => import(/* webpackChunkName: "404" */ '@/views/404.vue')
  },
  {
    path: '/',
    component: () =>
      import(/* webpackChunkName: "layout" */ '@/layout/index.vue'),
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () =>
          import(
            /* webpackChunkName: "dashboard" */ '@/views/dashboard/index.vue'
          ),
        meta: { title: 'dashboard', icon: 'dashboard' }
      }
    ]
  },
  {
    path: '*',
    redirect: '/404'
  }
];

/** 根据用户权限需要区分的路由 **/
export const asyncRoutes = [
  {
    path: '/'
  }
];

const router = new VueRouter({
  routes: constRoutes
});

export default router;
