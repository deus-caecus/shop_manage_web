import SupplyChainSettlementManagement from '@/views/SupplyChain/SettlementManagement.vue'
import SupplyChainSupplierManagement from '@/views/SupplyChain/SupplierManagement.vue'

const supplyChainChildren = [
  {
    path: '/SupplyChain/SettlementManagement',
    name: 'SettlementManagement',
    component: SupplyChainSettlementManagement,
  },
  {
    path: '/SupplyChain/SupplierManagement',
    name: 'SupplierManagement',
    component: SupplyChainSupplierManagement,
  },
]

export default supplyChainChildren
