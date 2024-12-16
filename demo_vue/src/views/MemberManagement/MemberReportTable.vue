
<script setup>
import { ref, reactive } from 'vue';
import { ElInput, ElButton, ElTable, ElTableColumn, ElDialog} from 'element-plus';

// 表单值
const searchQuery = ref('');

// 充值记录数据
const rechargeRecords = reactive([
  {
    id: 1,
    memberId: '153xxxxxxx',
    memberName: '许xx',
    cashier: '冉xx',
    amount: 100.00,
    store: '小吉便利店',
    time: '2024-03-15',
    checked: false
  }
]);

// 添加表单显示状态
const showAddForm = ref(false);

// 新增记录表单数据
const newMemberReport = reactive({
  memberId: '',
  memberName: '',
  cashier: '',
  amount: null,
  store: '',
  time: ''
});

// 方法
const searchItems = () => {
  console.log('搜索会员:', searchQuery.value);
  // 实现搜索逻辑
};

const editItem = (index) => {
  console.log('编辑记录:', index);
  // 实现编辑逻辑
};

const deleteItem = (index) => {
  rechargeRecords.splice(index, 1);
};

const addRecord = () => {
  if (newMemberReport.memberId && newMemberReport.memberName && newMemberReport.cashier && newMemberReport.amount !== null && newMemberReport.store && newMemberReport.time) {
    const newItem = {
      id: rechargeRecords.length + 1,
      ...newMemberReport,
      checked: false
    };
    rechargeRecords.push(newItem);
    // 清空表单
    Object.assign(newMemberReport, {
      memberId: '',
      memberName: '',
      cashier: '',
      amount: null,
      store: '',
      time: ''
    });
    showAddForm.value = false;
  } else {
    console.warn('请填写所有必填字段');
  }
};

const deleteSelectedItems = () => {
  rechargeRecords.splice(0, rechargeRecords.length, ...rechargeRecords.filter(item => !item.checked));
};


</script>

<style scoped>
.recharge-records {
  max-width: 800px;
  margin: 0 auto;
}
</style>
<template>
  <div class="member-recharge-container">
    <el-input v-model="searchQuery" placeholder="请输入会员姓名/ID" style="width: 200px; margin-right: 20px;"></el-input>
    <el-button type="primary" @click="searchItems">查询</el-button>
    <el-button type="primary" @click="showAddForm = true">添加</el-button>
    <el-button type="danger" @click="deleteSelectedItems">删除</el-button>
    <el-table :data="rechargeRecords" style="width: 100%">
      <el-table-column prop="id" label="序号"></el-table-column>
      <el-table-column prop="memberId" label="ID"></el-table-column>
      <el-table-column prop="memberName" label="会员姓名"></el-table-column>
      <el-table-column prop="cashier" label="收银员"></el-table-column>
      <el-table-column prop="amount" label="充值金额"></el-table-column>
      <el-table-column prop="store" label="充值店铺"></el-table-column>
      <el-table-column prop="time" label="充值时间"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-checkbox ></el-checkbox>
          <el-button >编辑</el-button>
          <el-button type="danger" >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-footer>

    </el-footer>
  </div>
  <ElDialog v-model = showAddForm>
    <el-form :model="newMemberReport" label-width="120px">
      <el-form-item label="会员ID:">
        <el-input v-model="newMemberReport.memberId" placeholder="请输入会员ID"></el-input>
      </el-form-item>
      <el-form-item label="收银员:">
        <el-input v-model="newMemberReport.cashier" placeholder="请输入收银员姓名"></el-input>
      </el-form-item>
      <el-form-item label="充值金额:">
        <el-input v-model="newMemberReport.amount" placeholder="请输入充值金额"></el-input>
      </el-form-item>
      <el-form-item label="充值店铺:">
        <el-input v-model="newMemberReport.store" placeholder="请输入充值店铺"></el-input>
      </el-form-item>
      <el-form-item label="日期:">
        <el-date-picker v-model="newMemberReport.date" type="date" placeholder="选择日期" value-format="yyyy-MM-dd"></el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="saveRecharge">保存</el-button>
        <el-button @click="showAddForm = false">取消</el-button>
      </el-form-item>
    </el-form>
  </ElDialog>
</template>

<style scoped>
.member-recharge-container {
  padding: 20px;
}

.pagination-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
}

.page-info {
  font-size: 16px;
  color: #606266;
}

.footer {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}
</style>
