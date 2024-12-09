<script setup>
import { supplierQueryService, supplierAddService, supplierDeleteService, supplierUpdateService } from '@/api/SupplyChain/SupplierManagement'
import { ref } from 'vue';

const supplierList = ref([])
 supplierList.value = supplierQueryService()

const supplierDelete = function (supplierID) {
  let data = supplierDeleteService(supplierID)
}
const showAddForm = ref(false);
const formData = ref({
  name: '',
  contactPerson: '',
  contactNumber: '',
  bankAccountNumber: '',
  bankName: '',
  isNormal: ''
});

</script>
<script>
import { ElTable, ElTableColumn, ElTag, /* ElCheckbox, */ ElButton } from 'element-plus';

export default {

  components: {
    ElTable,
    ElTableColumn,
    ElTag,
    // ElCheckbox,
    ElButton,
  },

  methods: {
    handleEdit(row) {
      console.log('Edit row:', row);
      // Implement your edit logic here
    },
    handleDelete(row) {
      console.log('Delete row:', row);
      // Implement your delete logic here
    },
  },
};
</script>
<template>
  <div class="common-layout">
    <el-container>
      <el-main>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="supplierId" label="编号" width="80"></el-table-column>
          <el-table-column prop="name" label="名称" width="150"></el-table-column>
          <el-table-column prop="contactPerson" label="联系人" width="150"></el-table-column>
          <el-table-column prop="contactNumber" label="联系电话" width="150"></el-table-column>
          <el-table-column prop="bankAccountNumber" label="银行卡号" width="170"></el-table-column>
          <el-table-column prop="bankName" label="开户行" width="150"></el-table-column>
          <el-table-column prop="isNormal" label="状态" width="100">
            <template #default="scope">
              <el-tag :type="scope.row.isNormal === 0 ? 'danger' : 'success'">
                {{ scope.row.isNormal == 1 ? "正常" : "停用" }}
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="170">
            <template #header>
              <span style="margin-left:30px; display: flex;">操作</span> <!-- 使用flex布局和margin-left: auto;使文本靠右 -->
            </template>
            <template #default="scope">
              <!-- <el-checkbox v-model="scope.row.checked" style="margin: 10px ;" /> -->
              <el-button type="primary" size="small" @click="handleEdit(scope.row)">编辑</el-button>
              <el-button type="danger" size="small" @click="handleDelete(scope.row)">删除</el-button>
            </template>
          </el-table-column>
          <el-dialog  @click="showAddForm = true" title="添加数据">
            <el-form :model="formData" label-width="80px">
              <el-form-item label="名称">
                <el-input v-model="formData.name"></el-input>
              </el-form-item>
              <el-form-item label="联系人">
                <el-input v-model="formData.contactPerson"></el-input>
              </el-form-item>
              <el-form-item label="联系电话">
                <el-input v-model="formData.contactNumber"></el-input>
              </el-form-item>
              <el-form-item label="银行卡号">
                <el-input v-model="formData.bankAccountNumber"></el-input>
              </el-form-item>
              <el-form-item label="开户行">
                <el-input v-model="formData.bankName"></el-input>
              </el-form-item>
              <el-form-item label="状态">
                <el-input v-model="formData.isNormal"></el-input>
              </el-form-item>
            </el-form>
            <template #footer>
              <span class="dialog-footer">
                <el-button @click="showAddForm = false">取消</el-button>
                <el-button type="primary" @click="handleAdd">添加</el-button>
              </span>
            </template>
          </el-dialog>
        </el-table>
      </el-main>
      <el-footer>
        <el-button round @click="showAddForm = true">添加</el-button>

        <!-- <el-button  round>删除</el-button> -->
      </el-footer>
    </el-container>
  </div>
</template>
