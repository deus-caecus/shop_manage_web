<script setup>
import { ref, computed, onMounted } from 'vue';
import { ElDialog, ElMessage } from 'element-plus';
import  addNewGoodsDialog  from "./Dialog/AddNewGoodsDialog.vue"
// 响应式数据
const category = ref('');
const showOnlyWhole = ref(false);
const searchQuery = ref('');
const products = ref([]);
const categories = [
  { value: '全部分类', label: '全部分类' },
  { value: '食品', label: '食品' },
  { value: '饮料', label: '饮料' },
  { value: '日用品', label: '日用品' }
];
const currentPage = ref(1);
const pageSize = ref(10);

// 计算属性
const totalItems = computed(() => products.value.length);
const totalPages = computed(() => Math.ceil(totalItems.value / pageSize.value));
const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  return products.value.slice(start, start + pageSize.value);
});

// 对话框可见性
const showAddCategory = ref(false);
const showAddNewGoods = ref(false);

// 方法
const addCategory = () => {
  // Add category logic
  console.log('添加分类');
  showAddCategory.value = true
};

const searchProducts = () => {
  // Search products logic
  console.log('搜索商品:', searchQuery.value);
  // Simulate fetching data
  products.value = [
    { name: '商品1', category: '食品', price: 100 },
    { name: '商品2', category: '饮料', price: 50 },
    { name: '商品3', category: '日用品', price: 80 }
  ];
};

const exportProducts = () => {
  // Export products logic
  console.log('导出商品');
};

const editProduct = (index) => {
  // Edit product logic
  console.log('编辑商品:', index);
};

const deleteProduct = (index) => {
  // Delete product logic
  console.log('删除商品:', index);
};

const handleSizeChange = (val) => {
  pageSize.value = val;
  console.log(`每页 ${val} 条`);
};

const handleCurrentChange = (val) => {
  currentPage.value = val;
  console.log(`当前页: ${val}`);
};

// 模拟页面加载时的初始化操作
onMounted(() => {
  searchProducts();
});
</script>
<template>
  <div class="product-management-container">
    <el-row style="margin-bottom: 20px;">
      <el-col :span="3">
        <el-button type="primary" @click="addCategory">添加分类</el-button>
      </el-col>
      <el-col :span="4">
        <el-select v-model="category" placeholder="全部分类">
          <el-option v-for="item in categories" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </el-col>
      <el-col :span="4" style = "margin-left: 20px;">
        <el-checkbox v-model="showOnlyWhole">只显示整售商品</el-checkbox>
      </el-col>
      <el-col :span="7" style = "display:flex ;align-items:center ; margin-right: 20px;">
        <el-input v-model="searchQuery"
        placeholder="请输入商品名/#商品编号/商品类别" @keyup.enter="searchProducts"  ></el-input>
        <el-button type="primary" @click="searchProducts">查询</el-button>
      </el-col>
      <el-col :span="3">
        <el-button type="primary" @click="exportProducts">导出</el-button>
      </el-col>
    </el-row>
    <ElDialog v-model="showAddCategory">

    </ElDialog>
    <el-table :data="products" style="width: 100%" border>
      <el-table-column prop="id" label="序号" width="80"></el-table-column>
      <el-table-column prop="productCode" label="商品编码" width="120"></el-table-column>
      <el-table-column prop="productName" label="商品名称" width="150"></el-table-column>
      <el-table-column prop="costPrice" label="进货价" width="100"></el-table-column>
      <el-table-column prop="retailPrice" label="零售价" width="100"></el-table-column>
      <el-table-column prop="category" label="类别" width="100"></el-table-column>
      <el-table-column prop="stock" label="库存" width="100"></el-table-column>
      <el-table-column label="操作" width="170">
        <template #default="scope">
          <el-button size="mini" @click="editProduct(scope.$index)">编辑</el-button>
          <el-button size="mini" type="danger" @click="deleteProduct(scope.$index)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <addNewGoodsDialog v-model = showAddNewGoods></addNewGoodsDialog>
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



<style scoped>
.product-management-container {
  padding: 20px;
}

.status-container {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}
</style>
