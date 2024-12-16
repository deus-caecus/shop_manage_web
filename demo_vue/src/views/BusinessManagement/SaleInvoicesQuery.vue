<script setup>
import { ref, computed } from 'vue';
import { ElDialog, ElMessage } from 'element-plus';

// 定义响应式变量
const receiptNumber = ref('');
const receiptType = ref('全部单据');
const receiptTypes = [
  { value: '全部单据', label: '全部单据' },
  { value: '销售单', label: '销售单' },
  { value: '退货单', label: '退货单' }
];
const receipts = ref([]);
const currentPage = ref(1);
const pageSize = ref(10);
const showAddForm = ref(false)
const InvoiceInfo = ref({

})
const productSold = ref({

})
const showAddProductSold = ref(false)
const dateSelect = ref([new Date(), new Date()])
// 计算属性
const totalItems = computed(() => receipts.value.length);
const totalPages = computed(() => Math.ceil(totalItems.value / pageSize.value));

// 模拟搜索单据的方法
const searchReceipts = () => {
  // Simulate fetching receipts based on search criteria
  receipts.value = [
    { receiptNumber: '123456', date: '2024-03-15', cashier: '张三', itemCount: 5, actualAmount: 500 },
    { receiptNumber: '789012', date: '2024-03-15', cashier: '李四', itemCount: 3, actualAmount: 300 },
    { receiptNumber: '345678', date: '2024-03-15', cashier: '王五', itemCount: 4, actualAmount: 400 }
  ];
  currentPage.value = 1; // Reset to the first page after searching
};

// 模拟导出单据的方法
const exportReceipts = () => {
  console.log('导出单据');
};

// 模拟编辑单据的方法
const editReceipt = (index) => {
  console.log('编辑单据:', index);
};

// 模拟删除单据的方法
const deleteReceipt = (index) => {
  console.log('删除单据:', index);
};

// 分页大小改变时触发
const handleSizeChange = (val) => {
  pageSize.value = val;
  currentPage.value = 1;
  searchReceipts();
};

// 当前页码改变时触发
const handleCurrentChange = (val) => {
  currentPage.value = val;
};
</script>

<template>
  <div>
    <el-row style="margin-bottom: 20px;">
      <el-col :span="8">
        <el-date-picker v-model="dateSelect" type="daterange" unlink-panels range-separator="至" start-placeholder="开始日期"
          end-placeholder="结束日期" />


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
      <el-table-column label="操作" width="170">
        <template #default="scope">
          <el-button size="mini" @click="editReceipt(scope.$index)">编辑</el-button>
          <el-button size="mini" type="danger" @click="deleteReceipt(scope.$index)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button style="margin-bottom:10px" @click="showAddForm = true" type="primary">添加</el-button>
    <el-pagination :current-page="currentPage" :page-sizes="[10, 20, 30, 50]" :page-size="pageSize" :total="totalItems"
      layout="total, sizes, prev, pager, next, jumper" @size-change="handleSizeChange"
      @current-change="handleCurrentChange"></el-pagination>

    <div class="status-container">
      <span>第{{ currentPage }}页 共{{ totalPages }}页</span>
    </div>
  </div>

  <el-dialog v-model=showAddForm>
    <div class="table-container">
      <h1>商品目录</h1>
      <el-table :data="products" style="width: 100%">
        <el-table-column prop="name" label="商品名称" width="180"></el-table-column>
        <el-table-column prop="quantity" label="商品数量" width="180"></el-table-column>
        <el-table-column prop="price" label="单价" width="180"></el-table-column>
        <el-table-column label="操作" width="100">
          <template #default="scope">
            <el-button size="mini" @click="deleteProduct(scope.$index)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="form-container">
      <ElDialog v-model=showAddProductSold>
        <h1 style = "font-size: large;margin-bottom: 30px;">添加商品售货信息</h1>
        <el-form :model="productSold" >
        <el-form-item label="商品条码">
          <el-input v-model="productSold.name" placeholder="请输入商品条码"></el-input>
        </el-form-item>
        <el-form-item label="商品名称">

        </el-form-item>
        <el-form-item label="销售数量">
          <el-input v-model="productSold.price" placeholder="请输入销售数量"></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary">保存</el-button>
      <el-button>取消</el-button>
      </ElDialog>

      <div class="buttons">
        <el-button type="primary" @click="showAddProductSold = true">添加</el-button>
        <el-button @click="cancelForm">取消</el-button>
      </div>
    </div>

    <el-form :model="InvoiceInfo" :rules="rules" ref="formRef" label-width="100px">
      <el-form-item label="商品总数" prop="productQuantity">

      </el-form-item>
      <el-form-item label="收银员" prop="cashier">
        <el-input v-model="InvoiceInfo.cashier"></el-input>
      </el-form-item>
      <el-form-item label="总额" prop="total">
        <el-input v-model="InvoiceInfo.total" disabled></el-input>
      </el-form-item>
      <el-form-item label="日期" prop="date">
        <el-date-picker v-model="InvoiceInfo.date" type="date" placeholder="选择日期"></el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleAdd">保存</el-button>
        <el-button @click="showAddForm = false">取消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>




<style scoped>
.status-container {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}
</style>
