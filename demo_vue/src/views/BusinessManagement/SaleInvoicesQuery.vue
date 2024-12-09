<template>
  <div>
    <el-row style="margin-bottom: 20px;">
      <el-col :span="8">
          <el-date-picker v-model="value2" type="daterange" unlink-panels range-separator="至"
            start-placeholder="开始日期" end-placeholder="结束日期" :shortcuts="shortcuts" :size="size" />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

      </el-col>
      <el-col :span="5">
        <el-select v-model="receiptType" placeholder="全部单据">
          <el-option v-for="item in receiptTypes" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </el-col>
      <el-col :span="6" style=" display: flex; align-items: center;margin-left: 10px;">
        <el-input v-model="receiptNumber" placeholder="请输入流水单号"></el-input>
        <el-button type="primary" @click="searchReceipts">查询</el-button>
      </el-col>
      <el-col :span="3" style="margin-left: 10px;">
        <el-button type="primary" @click="exportReceipts">导出</el-button>
      </el-col>
    </el-row>

    <el-table :data="receipts" style="width: 100%" border>
      <el-table-column prop="receiptNumber" label="流水号" width="120"></el-table-column>
      <el-table-column prop="date" label="日期" width="120"></el-table-column>
      <el-table-column prop="cashier" label="收银员" width="120"></el-table-column>
      <el-table-column prop="itemCount" label="商品种类数" width="120"></el-table-column>
      <el-table-column prop="actualAmount" label="实收额" width="120"></el-table-column>
      <el-table-column label="操作" width="120">
        <template #default="scope">
          <el-button size="mini" @click="editReceipt(scope.$index)">编辑</el-button>
          <el-button size="mini" type="danger" @click="deleteReceipt(scope.$index)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      :current-page="currentPage"
      :page-sizes="[10, 20, 30, 50]"
      :page-size="pageSize"
      :total="totalItems"
      layout="total, sizes, prev, pager, next, jumper"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    ></el-pagination>

    <div class="status-container">
      <span>第{{ currentPage }}页 共{{ totalPages }}页</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      startDate: '',
      endDate: '',
      receiptNumber: '',
      receiptType: '',
      receiptTypes: [
        { value: '全部单据', label: '全部单据' },
        { value: '销售单', label: '销售单' },
        { value: '退货单', label: '退货单' }
      ],
      receipts: [],
      currentPage: 1,
      pageSize: 10,
      totalItems: 0,
      totalPages: 0
    };
  },
  methods: {
    searchReceipts() {
      // Simulate fetching receipts based on search criteria
      this.receipts = [
        { receiptNumber: '123456', date: '2024-03-15', cashier: '张三', itemCount: 5, actualAmount: 500 },
        { receiptNumber: '789012', date: '2024-03-15', cashier: '李四', itemCount: 3, actualAmount: 300 },
        { receiptNumber: '345678', date: '2024-03-15', cashier: '王五', itemCount: 4, actualAmount: 400 }
      ];
      this.totalItems = this.receipts.length;
      this.totalPages = Math.ceil(this.totalItems / this.pageSize);
    },
    exportReceipts() {
      // Simulate exporting receipts
      console.log('导出单据');
    },
    editReceipt(index) {
      // Simulate editing receipt
      console.log('编辑单据:', index);
    },
    deleteReceipt(index) {
      // Simulate deleting receipt
      console.log('删除单据:', index);
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.currentPage = 1;
      this.searchReceipts();
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    }
  }
};
</script>

<style scoped>

.status-container {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}
</style>
