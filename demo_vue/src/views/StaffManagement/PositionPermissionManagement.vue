<template>
  <div class="employee-container">
    <h1>职位权限表</h1>
    <el-button type="primary" @click="showAddEmployeeForm = true">添加权限信息</el-button>
    <el-dialog title="添加权限信息" v-model="showAddEmployeeForm" width="30%">
      <el-form :model="newEmployee" label-width="80px">
        <el-form-item label="名称">
          <el-input v-model="newEmployee.name"></el-input>
        </el-form-item>
        <el-form-item label="职位权限">
          <el-checkbox v-model="checkedItems" label="营业管理"></el-checkbox>
          <el-checkbox v-model="checkedItems" label="商品管理"></el-checkbox>
          <el-checkbox v-model="checkedItems" label="库存管理"></el-checkbox>
          <el-checkbox v-model="checkedItems" label="店铺设置"></el-checkbox>
          <el-checkbox v-model="checkedItems" label="员工管理"></el-checkbox>
          <el-checkbox v-model="checkedItems" label="副屏广告"></el-checkbox>
          <el-checkbox v-model="checkedItems" label="会员管理"></el-checkbox>
          <el-checkbox v-model="checkedItems" label="供应管理"></el-checkbox>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="showAddEmployeeForm = false">取 消</el-button>
        <el-button type="primary" @click="addEmployee">确 定</el-button>
      </span>
    </el-dialog>
    <el-table :data="employees" style="width: 100%">
      <el-table-column prop="id" label="序号"></el-table-column>
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column prop="permissions" label="职位权限"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="editEmployee(scope.$index)">编辑</el-button>
          <el-button type="danger" @click="deleteEmployee(scope.$index)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      employees: [
        { id: 1, name: '店长', permissions: '掌柜宝：员工，营销，商品，增值服务，账户，库存，会员，商铺\n收银机：会员\nshop后台：商品管理，会员管理，员工管理，库存管理，营业管理，副屏广告，店铺设置' },
        { id: 2, name: '收银员', permissions: '掌柜宝：商品，库存\n收银机：会员\nshop后台：无' },
        { id: 3, name: '财务', permissions: '掌柜宝：无\n收银机：无\nshop后台：营业管理' },
        { id: 4, name: '促销员', permissions: '掌柜宝：商品，库存\n收银机：会员\nshop后台：商品管理' },
        { id: 5, name: '老板', permissions: '掌柜宝：员工，营销，商品，增值服务，账户，营业统计，库存，会员，商铺\n收银机：会员，交班\nshop后台：商品管理，会员管理，员工管理，库存管理，营业管理，副屏广告，店铺设置' }
      ],
      showAddEmployeeForm: false,
      newEmployee: {
        name: '',
        permissions: ''
      }
    };
  },
  methods: {
    addEmployee() {
      this.employees.push({ ...this.newEmployee, id: this.employees.length + 1 });
      this.showAddEmployeeForm = false;
      this.newEmployee = {
        name: '',
        permissions: ''
      };
    },
    editEmployee(index) {
      console.log('Editing employee at index:', index);
    },
    deleteEmployee(index) {
      this.employees.splice(index, 1);
    }
  }
};
</script>

<style scoped>
.employee-container {
  padding: 20px;
}
</style>
