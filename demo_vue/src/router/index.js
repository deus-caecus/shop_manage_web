import { createRouter, createWebHistory } from 'vue-router'
import BusinessManagementChildren from './SubmenuRoutes/BusinessManagementRoutes'
import GoodsManagementChildern from './SubmenuRoutes/GoodsManagementRoutes'
import MemberManagementChildren from './SubmenuRoutes/MemberManagementRoutes'
import OtherProductSettingsChildren from './SubmenuRoutes/OtherProductSettingsRoutes'
import ShopSettingsChildren from './SubmenuRoutes/ShopSettingsRoutes'
import StaffManagementChildren from './SubmenuRoutes/StaffManagementRoutes'
import StockManagementChildren from './SubmenuRoutes/StockManagementRoutes'
import SupplyChainChildren from '@/router/SubmenuRoutes/SupplyChainRoutes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/Login',
      name: 'Login',
      component: () => import('@/views/LoginView.vue'),
     },
     {
      path: '/',
      name: 'Home',
      component: () => import('@/views/HomeView.vue'),
      children:
        [
          ...BusinessManagementChildren,
          ...GoodsManagementChildern,
          ...MemberManagementChildren,
          ...OtherProductSettingsChildren,
          ...ShopSettingsChildren,
          ...StaffManagementChildren,
          ...StockManagementChildren,
          ...SupplyChainChildren,
        ]
    },
  ],
})

export default router
