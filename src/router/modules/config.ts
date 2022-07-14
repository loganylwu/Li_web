import Layout from '@/layouts';
import DashboardIcon from '@/assets/assets-slide-dashboard.svg';

export default [
  {
    path: '/config',
    component: Layout,
    redirect: '/config/base',
    name: 'config',
    meta: { title: '辅助配置', icon: DashboardIcon },
    children: [
      {
        path: 'base',
        name: 'BaseConfig',
        component: () => import('@/pages/form/base/index.vue'),
        meta: { title: 'Docker配置项' },
      },
    ],
  },
];
