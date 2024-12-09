
<script setup>
import {ref} from 'vue'
import Pagination from '@/views/util/uitl_pagination.vue'
const value = ref('')

const member_status = [
  {
    value: 'normal',
    label: '正常'
  },
  {
    value: 'disabled',
    label: '禁用'
  }
]
</script>
<script >
import { ElTable, ElTableColumn, ElTag, ElCheckbox, ElButton } from 'element-plus';


export default {
  components: {
    ElTable,
    ElTableColumn,
    ElTag,
    ElCheckbox,
    ElButton,
    Pagination
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
      <el-header>
        <el-input v-model="searchQuery" placeholder="请输入姓名/#电话号码" style="width: 300px;" />
        <el-button type="primary" @click="handleSearch">查询</el-button>
        <el-button type="success" @click="handleAdd">添加</el-button>
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
          <div class="block">

            <el-date-picker
              v-model="value3"
              type="datetime"
              placeholder="Select date and time"
              :default-time="defaultTime"
            />
          </div>
        </el-table-column>

        <el-table-column prop="status" label="会员状态" width="150">
          <template #default="scope">
            <el-select v-model="value" placeholder="选择" style="width: 100px">
              <el-option
                v-for="item in member_status"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
        </el-select>

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
        <Pagination/>
      </el-footer>
    </el-container>
  </div>
</template>

