// StockManagementRoutes.js
import StockInventory from '@/views/StockManagement/StockInventory.vue'
import WarehousingGoods from '@/views/StockManagement/WarehousingGoods.vue'
import WarehousingInvoicesQuery from '@/views/StockManagement/WarehousingInvoicesQuery.vue'

const StockManagementChildren = [
  {
    path: '/StockManagement/StockInventory',
    name: 'StockInventory',
    component: StockInventory,
  },
  {
    path: '/StockManagement/WarehousingGoods',
    name: 'WarehousingGoods',
    component: WarehousingGoods,
  },
  {
    path: '/StockManagement/WarehousingInvoicesQuery',
    name: 'WarehousingInvoicesQuery',
    component: WarehousingInvoicesQuery,
  },
]

export default StockManagementChildren
