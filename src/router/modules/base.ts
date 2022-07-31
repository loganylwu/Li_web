import Layout from '@/layouts';
import DashboardIcon from '@/assets/assets-slide-dashboard.svg';

export default [
  {
    path: '/dashboard',
    component: Layout,
    redirect: '/dashboard/base',
    name: 'dashboard',
    meta: { title: '基本功能', icon: DashboardIcon },
    children: [
      {
        path: 'base',
        name: 'DashboardBase',
        component: () => import('@/pages/config/base/index.vue'),
        meta: { title: '动态配置' },
      },
      {
        path: 'detail',
        name: 'DashboardDetail',
        component: () => import('@/pages/dashboard/detail/index.vue'),
        meta: { title: '统计报表' },
      },
      {
        path: "mongo",
        name: 'mongoMgr',
        component: () => import('@/pages/dataMgr/mongo/index.vue'),
        meta: { title: 'mongoDB 数据管理' },
      },
    ],
  },
];
