<template>
  <div class="product-management-container">
    <el-row>
      <el-col :span="6">
        <el-date-picker
          v-model="startDate"
          type="date"
          placeholder="选择开始日期"
          format="yyyy-MM-dd"
          value-format="yyyy-MM-dd"
        ></el-date-picker>
      </el-col>
      <el-col :span="6">
        <span>至</span>
        <el-date-picker
          v-model="endDate"
          type="date"
          placeholder="选择结束日期"
          format="yyyy-MM-dd"
          value-format="yyyy-MM-dd"
        ></el-date-picker>
      </el-col>
      <el-col :span="6">
        <el-input v-model="searchQuery" placeholder="请输入商品名称/条码"></el-input>
        <el-button type="primary" @click="searchProducts">查询</el-button>
      </el-col>
      <el-col :span="6">
        <el-button type="primary" @click="exportProducts">导出</el-button>
      </el-col>
    </el-row>

    <el-table :data="products" style="width: 100%" border>
      <el-table-column prop="barcode" label="商品条码" width="120"></el-table-column>
      <el-table-column prop="productName" label="商品名称" width="150"></el-table-column>
      <el-table-column prop="currentStock" label="现有库存" width="100"></el-table-column>
      <el-table-column prop="salesQuantity" label="销售数量" width="100"></el-table-column>
      <el-table-column prop="costPrice" label="商品进价（元）" width="120"></el-table-column>
      <el-table-column prop="salePrice" label="商品售价（元）" width="120"></el-table-column>
      <el-table-column prop="profit" label="毛利（元）" width="100"></el-table-column>
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
      searchQuery: '',
      products: [],
      currentPage: 1,
      pageSize: 10,
      totalItems: 0,
      totalPages: 0
    };
  },
  methods: {
    searchProducts() {
      // Simulate fetching products based on search criteria
      this.products = [
        { barcode: '123456', productName: '商品A', currentStock: 100, salesQuantity: 50, costPrice: 50, salePrice: 100, profit: 2500 },
        { barcode: '789012', productName: '商品B', currentStock: 200, salesQuantity: 100, costPrice: 60, salePrice: 120, profit: 6000 },
        { barcode: '345678', productName: '商品C', currentStock: 150, salesQuantity: 75, costPrice: 70, salePrice: 140, profit: 5250 }
      ];
      this.totalItems = this.products.length;
      this.totalPages = Math.ceil(this.totalItems / this.pageSize);
    },
    exportProducts() {
      // Simulate exporting products
      console.log('导出商品');
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.currentPage = 1;
      this.searchProducts();
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    }
  }
};
</script>

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
