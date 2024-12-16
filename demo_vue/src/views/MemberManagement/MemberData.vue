<script setup>
import { ref, reactive } from 'vue';
import { ElTable, ElTableColumn, ElTag, ElButton, ElDialog } from 'element-plus';

// 表单值
const value = ref('');

const ShowAddForm = ref(false)
// 成员状态选项
const member_status = [
  {
    value: 'normal',
    label: '正常'
  },
  {
    value: 'disabled',
    label: '禁用'
  }
];

// 表格数据
const tableData = reactive([
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
]);

// 方法
const handleEdit = (row) => {
  console.log('Edit row:', row);
  // Implement your edit logic here
};

const handleDelete = (row) => {
  console.log('Delete row:', row);
  // Implement your delete logic here
};

// 初始化表单数据
const form = reactive({
  name: '',
  id: '',
  phoneNumber: '',
  openDate: new Date().toISOString().split('T')[0], // 设置当前日期
  initialPoints: ''
});

// 提交表单
const submitForm = () => {
  console.log('提交表单:', form);
  // 这里可以添加表单提交的逻辑
};

// 取消表单
const cancelForm = () => {
  // 这里可以添加取消表单的逻辑
};
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-input v-model="searchQuery" placeholder="请输入姓名/#电话号码" style="width: 300px;" />
        <el-button type="primary" @click="handleSearch">查询</el-button>
        <el-button type="success" @click="ShowAddForm = true">添加</el-button>
        <el-button type="danger" @click="handleDelete">删除</el-button>
      </el-header>
      <el-main>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="serial" label="编号" width="80"></el-table-column>
          <el-table-column prop="name" label="会员姓名" width="150"></el-table-column>
          <el-table-column prop="id" label="ID" width="100"></el-table-column>
          <el-table-column prop="contactPhone" label="联系电话" width="150"></el-table-column>
          <el-table-column prop="point" label="积分" width="75"></el-table-column>
          <el-table-column prop="openCardTime" label="开卡时间" width="250">
          </el-table-column>

          <el-table-column prop="status" label="会员状态" width="150">
            <template #default="scope">
            </template>
          </el-table-column>
          <el-table-column label="操作" width="170">
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
        <ElDialog v-model=ShowAddForm>
            <div>

              <h2>添加</h2>
              <el-form :model="form" label-width="100px">
                <el-form-item label="会员姓名">
                  <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
                </el-form-item>
                <el-form-item label="会员ID">
                  <el-input v-model="form.id" placeholder="请输入ID"></el-input>
                </el-form-item>
                <el-form-item label="手机号">
                  <el-input v-model="form.phoneNumber" placeholder="请输入手机号"></el-input>
                </el-form-item>
                <el-form-item label="开卡时间">
                  <el-date-picker v-model="form.openDate" type="date" placeholder="选择日期"
                    value-format="yyyy-MM-dd"></el-date-picker>
                </el-form-item>
                <el-form-item label="初始积分">
                  <el-input v-model="form.initialPoints" placeholder="请输入积分"></el-input>
                </el-form-item>
              </el-form>
              <!-- <div style="margin-top: 20px">
                  <el-button type="primary" @click="submitForm">添加</el-button>
                  <el-button @click="cancelForm">取消</el-button>
                </div> -->
            </div>
        </ElDialog>
      </el-main>
      <el-footer>
        <Pagination />
      </el-footer>
    </el-container>
  </div>
</template>
