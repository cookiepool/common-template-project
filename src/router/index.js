import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Layout from '@/layout/index';

/** 不需要权限就能访问的路由 **/
export const constRoutes = [
  {
    path: '/redirect',
    component: Layout,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () =>
          import(/* webpackChunkName: 'redirect-refresh' */ '@/views/redirect')
      }
    ],
    hidden: true
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/login'),
    hidden: true
  },
  {
    path: '/404',
    name: '404',
    component: () => import(/* webpackChunkName: "404" */ '@/views/404.vue'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    name: '数据操作',
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: '控制面板',
        component: () =>
          import(
            /* webpackChunkName: "dashboard" */ '@/views/dashboard/index.vue'
          ),
        meta: { title: 'dashboard', icon: 'dashboard' }
      }
    ]
  },
  {
    path: '/pension',
    component: Layout,
    name: '机构养老',
    redirect: '/pension/index',
    children: [
      {
        path: 'index',
        name: '首页',
        component: () => import('@/views/pension'),
        meta: { title: '首页' }
      },
      {
        path: 'activity',
        name: '活动管理',
        component: () => import('@/views/activity'),
        meta: { title: '活动管理' }
      },
      {
        path: 'activityDetail',
        name: '活动详情',
        component: () => import('@/views/activity/activity-detail.vue'),
        hidden: true
      }
    ]
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
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
