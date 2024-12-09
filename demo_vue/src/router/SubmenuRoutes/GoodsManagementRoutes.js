// GoodsManagementRoutes.js
import AddingGoodsShortcut from '@/views/GoodsManagement/AddingGoodsShortcut.vue'
import GoodsDataManagement from '@/views/GoodsManagement/GoodsDataManagement.vue'

const GoodsManagementChildren = [
  {
    path: '/GoodsManagement/AddingGoodsShortcut',
    name: 'AddingGoodsShortcut',
    component: AddingGoodsShortcut,
  },
  {
    path: '/GoodsManagement/GoodsDataManagement',
    name: 'GoodsDataManagement',
    component: GoodsDataManagement,
  },
]

export default GoodsManagementChildren
