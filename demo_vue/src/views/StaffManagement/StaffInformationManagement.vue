<script setup>
import { ref, onMounted } from 'vue';
import { empMsgService } from '@/api/user';
const employees = ref([]);
const showAddEmployeeForm = ref(false)
const newEmployee = ref({
  name:'',
  position:'',
  username:'',
  phone:'',
  status:'',
})
const showEmployee = async () => {
  const res = await empMsgService();
  employees.value = res.data;
  console.log(typeof res);
  console.log(typeof employees.value);
  console.log("showemployee方法", res.data);

}
onMounted(() => {
  showEmployee();
  console.log("挂载");

});

</script>
<template>
  <div class="employee-container">
    <h1>员工信息表</h1>
    <el-button type="primary" @click="showAddEmployeeForm = true">添加员工</el-button>
    <el-dialog title="添加员工" v-model="showAddEmployeeForm" width="30%">
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
      <template v-slot:footer>
        <span class="dialog-footer">
          <el-button @click="showAddEmployeeForm = false">取 消</el-button>
          <el-button type="primary" @click="addEmployee">确 定</el-button>
        </span>
      </template>
    </el-dialog>
    <el-table :data="employees" style="width: 100%" id="empTable">
      <el-table-column prop="userName" label="员工姓名"></el-table-column>
      <el-table-column prop="positionName" label="职位"></el-table-column>
      <el-table-column prop="account" label="账号"></el-table-column>
      <el-table-column prop="connectInfo" label="联系电话"></el-table-column>
      <!-- <el-table-column prop="status" label="账户状态"></el-table-column> -->
      <el-table-column label="操作">
        <template v-slot="scope">
          <el-button @click="editEmployee(scope.$index)">编辑</el-button>
          <el-button type="danger" @click="deleteEmployee(scope.$index)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style scoped>
.employee-container {
  padding: 20px;
}
</style>
