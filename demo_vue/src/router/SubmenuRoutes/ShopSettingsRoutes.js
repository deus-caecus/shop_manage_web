// ShopSettingsRoutes.js
import ShelvesManagement from '@/views/ShopSettings/ShelvesManagement.vue'
import ShopManagement from '@/views/ShopSettings/ShopManagement.vue'

const ShopSettingsChildren = [
  {
    path: '/ShopSettings/ShelvesManagement',
    name: 'ShelvesManagement',
    component: ShelvesManagement,
  },
  {
    path: '/ShopSettings/ShopManagement',
    name: 'ShopManagement',
    component: ShopManagement,
  },
]

export default ShopSettingsChildren
