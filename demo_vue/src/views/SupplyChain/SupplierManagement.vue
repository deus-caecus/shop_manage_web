<script setup>
import { ref, onMounted } from 'vue';
import { ElMessage } from 'element-plus';

const tableData = ref([]);
    const showAddForm = ref(false);
    const formData = ref({
      名称: '',
      联系人: '',
      联系电话: '',
      银行卡号: '',
      开户行: '',
      业务范围: '',
      状态: ''
    });

    const handleAdd = async () => {
      try {
        const response = await axios.post('/api/addData', formData.value);
        if (response.status === 200) {
          ElMessage.success('添加成功');
          tableData.value.push(response.data);
          showAddForm.value = false;
        }
      } catch (error) {
        ElMessage.error('添加失败');
        console.error('添加失败:', error);
      }
    };

    const handleEdit = (index, row) => {
      // Handle edit
    };

    const handleDelete = (index, row) => {
      // Handle delete
    };

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
  data() {

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
        <el-table-column prop="id" label="编号" width="80"></el-table-column>
        <el-table-column prop="name" label="名称" width="150"></el-table-column>
        <el-table-column prop="contactName" label="联系人" width="150"></el-table-column>
        <el-table-column prop="contactPhone" label="联系电话" width="150"></el-table-column>
        <el-table-column prop="bankCardNumber" label="银行卡号" width="170"></el-table-column>
        <el-table-column prop="bankName" label="开户行" width="150"></el-table-column>
        <el-table-column prop="businessScope" label="业务范围" width="150"></el-table-column>
        <el-table-column prop="status" label="状态" width="100">
          <template #default="scope">
            <el-tag :type="scope.row.status === '停用' ? 'danger' : 'success'">{{ scope.row.status }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="170" >
          <template #header>
            <span style="margin-left:30px; display: flex;">操作</span> <!-- 使用flex布局和margin-left: auto;使文本靠右 -->
          </template>
          <template #default="scope">
            <!-- <el-checkbox v-model="scope.row.checked" style="margin: 10px ;" /> -->
            <el-button type="primary" size="small" @click="handleEdit(scope.row)">编辑</el-button>
            <el-button type="danger" size="small" @click="handleDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
        <el-dialog v-model="showAddForm" title="添加数据">
      <el-form :model="formData" label-width="80px">
        <el-form-item label="名称">
          <el-input v-model="formData.名称"></el-input>
        </el-form-item>
        <el-form-item label="联系人">
          <el-input v-model="formData.联系人"></el-input>
        </el-form-item>
        <el-form-item label="联系电话">
          <el-input v-model="formData.联系电话"></el-input>
        </el-form-item>
        <el-form-item label="银行卡号">
          <el-input v-model="formData.银行卡号"></el-input>
        </el-form-item>
        <el-form-item label="开户行">
          <el-input v-model="formData.开户行"></el-input>
        </el-form-item>
        <el-form-item label="业务范围">
          <el-input v-model="formData.业务范围"></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-input v-model="formData.状态"></el-input>
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



