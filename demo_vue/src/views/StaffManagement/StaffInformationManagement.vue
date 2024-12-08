<template>
  <div class="employee-container">
    <h1>员工信息表</h1>
    <el-button type="primary" @click="showAddEmployeeForm = true">添加员工</el-button>
    <el-dialog title="添加员工" :visible.sync="showAddEmployeeForm" width="30%">
      <el-form :model="newEmployee" label-width="80px">
        <el-form-item label="员工姓名">
          <el-input v-model="newEmployee.name"></el-input>
        </el-form-item>
        <el-form-item label="职位">
          <el-input v-model="newEmployee.position"></el-input>
        </el-form-item>
        <el-form-item label="账号">
          <el-input v-model="newEmployee.username"></el-input>
        </el-form-item>
        <el-form-item label="联系电话">
          <el-input v-model="newEmployee.phone"></el-input>
        </el-form-item>
        <el-form-item label="账户状态">
          <el-select v-model="newEmployee.status" placeholder="请选择">
            <el-option label="正常" value="正常"></el-option>
            <el-option label="冻结" value="冻结"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="showAddEmployeeForm = false">取 消</el-button>
        <el-button type="primary" @click="addEmployee">确 定</el-button>
      </span>
    </el-dialog>
    <el-table :data="employees" style="width: 100%">
      <el-table-column prop="name" label="员工姓名"></el-table-column>
      <el-table-column prop="position" label="职位"></el-table-column>
      <el-table-column prop="username" label="账号"></el-table-column>
      <el-table-column prop="phone" label="联系电话"></el-table-column>
      <el-table-column prop="status" label="账户状态"></el-table-column>
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
        { name: '张三', position: '店长', username: 'admin', phone: '155xxxxxxx', status: '正常' },
      ],
      showAddEmployeeForm: false,
      newEmployee: {
        name: '',
        position: '',
        username: '',
        phone: '',
        status: '',
      },
    };
  },
  methods: {
    addEmployee() {
      this.employees.push({ ...this.newEmployee });
      this.showAddEmployeeForm = false;
      this.newEmployee = {
        name: '',
        position: '',
        username: '',
        phone: '',
        status: '',
      };
    },
    editEmployee(index) {
      // Implement edit functionality
      console.log('Editing employee at index:', index);
    },
    deleteEmployee(index) {
      this.employees.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.employee-container {
  padding: 20px;
}
</style>
