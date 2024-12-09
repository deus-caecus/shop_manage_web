<script>
import { ElTable, ElTableColumn, ElTag, ElCheckbox, ElButton } from 'element-plus';

export default {
  components: {
    ElTable,
    ElTableColumn,
    ElTag,
    ElCheckbox,
    ElButton,
  },
  data() {
    return {
      tableData: [
        {
          id: 1,
          name: '城北市场',
          contactName: '李小姐',
          contactPhone: '17789455648',
          bankCardNumber: '12345678901234567',
          bankName: '工商银行',
          businessScope: '副食、小吃、百货',
          status: '停用',
          checked: false,
        },
        {
          id: 2,
          name: '城北大市场',
          contactName: '王先生',
          contactPhone: '14712345678',
          bankCardNumber: '12345678901234567',
          bankName: '工商银行',
          businessScope: '饮品、日化',
          status: '正常',
          checked: false,
        },
        {
          id: 3,
          name: '城北二市场',
          contactName: '王先生',
          contactPhone: '14712345678',
          bankCardNumber: '12345678901234567',
          bankName: '工商银行',
          businessScope: '副食、百货',
          status: '正常',
          checked: false,
        },
        {
          id: 4,
          name: '城北五市场',
          contactName: '王先生',
          contactPhone: '14712345678',
          bankCardNumber: '12345678901234567',
          bankName: '工商银行',
          businessScope: '小吃',
          status: '正常',
          checked: false,
        },
      ],
    };
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
            <el-checkbox v-model="scope.row.checked" style="margin: 10px ;" />
            <el-button type="primary" size="small" @click="handleEdit(scope.row)">编辑</el-button>
            <el-button type="danger" size="small" @click="handleDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      </el-main>
      <el-footer>
        <el-button round>添加</el-button>
        <el-button round>删除</el-button>
      </el-footer>
    </el-container>
  </div>
</template>
