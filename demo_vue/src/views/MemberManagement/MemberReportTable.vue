<script setup>
</script>
<script>

export default {
  data() {
    return {
      searchQuery: '',
      rechargeRecords: [
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
      ],
    };
  },
  methods: {
    searchItems() {
      console.log('搜索会员:', this.searchQuery);
    },
    editItem(index) {
      console.log('编辑记录:', index);
    },
    deleteItem(index) {
      this.rechargeRecords.splice(index, 1);
    },
    addRecord() {
      console.log('添加记录');
    },
    deleteSelectedItems() {
      this.rechargeRecords = this.rechargeRecords.filter(item => !item.checked);
    }
  },
};
</script>
<template>
  <div class="member-recharge-container">
    <el-input v-model="searchQuery" placeholder="请输入会员姓名/ID" style="width: 200px; margin-right: 20px;"></el-input>
    <el-button type="primary" @click="searchItems">查询</el-button>
    <el-button type="primary" @click="addRecord">添加</el-button>
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
