<template>
  <div class="stock-in-container">
    <div class="header">
      <span>入库时间：{{ currentDate }}</span>
      <el-select v-model="category" placeholder="全部分类">
        <el-option v-for="item in categories" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
      <el-input v-model="searchQuery" placeholder="请输入商品名称/#条形码/-拼音码" style="width: 300px; margin-right: 20px;"></el-input>
      <el-button type="primary" @click="searchItems">查询</el-button>
    </div>

    <el-table :data="products" style="width: 100%">
      <el-table-column prop="productId" label="商品编号"></el-table-column>
      <el-table-column prop="productName" label="商品名称"></el-table-column>
      <el-table-column prop="costPrice" label="进价"></el-table-column>
      <el-table-column prop="salePrice" label="售价"></el-table-column>
      <el-table-column prop="stock" label="库存"></el-table-column>
      <el-table-column prop="inStockQuantity" label="入库数量"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="saveItem(scope.$index)">保存</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div class="supplier-selection" >
      <span>选择供应商：</span>
      <el-select v-model="selectedSupplier" placeholder="请选择供应商">
        <el-option v-for="supplier in suppliers" :key="supplier.value" :label="supplier.label" :value="supplier.value"></el-option>
      </el-select>
      <el-button type="primary" @click="saveItems">保存</el-button>
      <span style="margin-left: 20px;">当前已选中{{ selectedItems.length }}项</span>
    </div>

    <div class="pagination-container">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalItems"
      ></el-pagination>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      currentDate: '2024-03-15',
      category: '',
      searchQuery: '',
      products: [
        {
          productId: '0111111',
          productName: '百事可乐',
          costPrice: 1.4,
          salePrice: 3,
          stock: 0,
          inStockQuantity: 0
        }
      ],
      totalItems: 1,
      currentPage: 1,
      pageSize: 10,
      categories: [
        { value: '全部分类', label: '全部分类' },
        { value: '饮料', label: '饮料' },
        { value: '食品', label: '食品' }
      ],
      suppliers: [
        { value: '城北市场', label: '城北市场' },
        { value: '南郊市场', label: '南郊市场' }
      ],
      selectedSupplier: '',
      selectedItems: []
    };
  },
  methods: {
    searchItems() {
      console.log('搜索商品:', this.searchQuery);
    },
    saveItem(index) {
      console.log('保存商品:', index);
    },
    saveItems() {
      console.log('保存入库:', this.selectedItems);
    },
    handleSizeChange(val) {
      this.pageSize = val;
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      console.log(`当前页: ${val}`);
    }
  }
};
</script>

<style scoped>
.stock-in-container {
  padding: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.supplier-selection {
  display: flex;
  align-items: center;
  margin-top: 70px;
  margin-bottom: 20px;
}

.pagination-container {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}
</style>
