import GoodsSaleStatistic from '@/views/BusinessManagement/GoodsSaleStatistic.vue'
import SaleChart from '@/views/BusinessManagement/SaleChart.vue'
import SaleInvoicesQuery from '@/views/BusinessManagement/SaleInvoicesQuery.vue'

const BusinessManagementChildren = [
  {
    path: '/BusinessManagement/GoodsSaleStatistic',
    name: 'GoodsSaleStatistic',
    component: GoodsSaleStatistic,
  },
  {
    path: '/BusinessManagement/SaleChart',
    name: 'SaleChart',
    component: SaleChart,
  },
  {
    path: '/BusinessManagement/SaleInvoicesQuery',
    name: 'SaleInvoicesQuery',
    component: SaleInvoicesQuery,
  },
]

export default BusinessManagementChildren
