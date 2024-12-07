// StaffManagementRoutes.js
import PositionPermissionManagement from '@/views/StaffManagement/PositionPermissionManagement.vue';
import StaffInformationManagement from '@/views/StaffManagement/StaffInformationManagement.vue';

const StaffManagementChildren = [
  {
    path: 'StaffManagement/PositionPermissionManagement',
    name: 'PositionPermissionManagement',
    component: PositionPermissionManagement,
  },
  {
    path: 'StaffManagement/StaffInformationManagement',
    name: 'StaffInformationManagement',
    component: StaffInformationManagement,
  }
];

export default StaffManagementChildren
