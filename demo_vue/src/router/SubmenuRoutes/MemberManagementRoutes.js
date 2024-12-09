// MemberManagementRoutes.js
import MemberData from '@/views/MemberManagement/MemberData.vue'
import MemberReportTable from '@/views/MemberManagement/MemberReportTable.vue'
import PointExchangeSettings from '@/views/MemberManagement/PointExchangeSettings.vue'

const MemberManagementChildren = [
  {
    path: '/MemberManagement/MemberData',
    name: 'MemberData',
    component: MemberData,
  },
  {
    path: '/MemberManagement/MemberReportTable',
    name: 'MemberReportTable',
    component: MemberReportTable,
  },
  {
    path: '/MemberManagement/PointExchangeSettings',
    name: 'PointExchangeSettings',
    component: PointExchangeSettings,
  },
]

export default MemberManagementChildren
