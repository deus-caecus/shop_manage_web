<script setup>
import { ref, reactive } from 'vue';
import router from '@/router'
// 定义响应式数据
const queryForm = reactive({
  documentNo: '',
  dateRange: [],
  supplier: ''
});

const stockInRecords = ref([
  {
    documentNo: 'IN20240001',
    date: '2024-01-01',
    supplier: '供应商A',
    totalAmount: 5000.00,
    status: '已入库'
  }
]);

const suppliers = ref([
  { value: 'supplierA', label: '供应商A' },
  { value: 'supplierB', label: '供应商B' },
  { value: 'supplierC', label: '供应商C' }
]);

const totalItems = ref(1);
const currentPage = ref(1);
const pageSize = ref(10);

// 定义方法
const jumpToWarehousingGoods = ()=>
{
  router.push("/StockManagement/WarehousingGoods")
}

const handleQuery = () => {
  console.log('查询条件:', queryForm);
  // 这里应该调用 API 查询数据，并更新 stockInRecords 数据
};

const viewDetails = (row) => {
  console.log('查看详情:', row);
  // 可以跳转到详情页面或弹出详情对话框
};

const handlePageChange = (page) => {
  currentPage.value = page;
  console.log('切换到第', page, '页');
  // 根据新的页码重新获取数据
};
</script>
<template>
  <div class="stock-in-query-container">
    <el-form :inline="true" :model="queryForm" class="demo-form-inline">
      <el-form-item label="单据编号">
        <el-input v-model="queryForm.documentNo" placeholder="请输入单据编号"></el-input>
      </el-form-item>
      <el-form-item label="日期范围">
        <el-date-picker
          v-model="queryForm.dateRange"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          value-format="YYYY-MM-DD"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="供应商" style="width: 200px;">
        <el-select v-model="queryForm.supplier" placeholder="请选择供应商">
          <el-option v-for="item in suppliers" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleQuery">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="jumpToWarehousingGoods">添加入库单</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="stockInRecords" style="width: 100%" border>
      <el-table-column prop="documentNo" label="单据编号"></el-table-column>
      <el-table-column prop="date" label="日期"></el-table-column>
      <el-table-column prop="supplier" label="供应商"></el-table-column>
      <el-table-column prop="totalAmount" label="总金额"></el-table-column>
      <el-table-column prop="status" label="状态"></el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button size="mini" @click="viewDetails(scope.row)">查看详情</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div class="pagination-container">
      <el-pagination
        background
        layout="prev, pager, next, jumper"
        :total="totalItems"
        :current-page.prop="currentPage"
        @current-change="handlePageChange"
      >
      </el-pagination>
    </div>
  </div>
</template>

<style scoped>
.stock-in-query-container {
  padding: 20px;
}

.pagination-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>
