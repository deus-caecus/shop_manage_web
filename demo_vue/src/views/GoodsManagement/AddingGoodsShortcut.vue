<template>
  <div class="quick-add-product-container">
    <el-form :model="form" ref="formRef" label-width="80px" class="quick-add-form">
      <el-form-item label="商品条码" prop="barcode">
        <el-input v-model="form.barcode" placeholder="请输入商品条码"></el-input>
      </el-form-item>
      <el-form-item label="商品名称" prop="name">
        <el-input v-model="form.name" placeholder="请输入商品名称"></el-input>
      </el-form-item>
      <el-form-item label="进货价" prop="costPrice">
        <el-input v-model="form.costPrice" placeholder="请输入进货价"></el-input>
      </el-form-item>
      <el-form-item label="销售价" prop="salePrice">
        <el-input v-model="form.salePrice" placeholder="请输入销售价"></el-input>
      </el-form-item>
      <el-form-item label="入库数量" prop="quantity">
        <el-input v-model="form.quantity" placeholder="请输入入库数量"></el-input>
      </el-form-item>
      <el-form-item label="分类" prop="category">
        <el-select v-model="form.category" placeholder="请选择分类">
          <el-option v-for="item in categories" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="addProduct">添加</el-button>
        <el-button @click="resetForm">重置</el-button>
        <el-button style="display:flex;justify-content:flex-end;">保存</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="products" style="width: 100%" border>
      <el-table-column prop="barcode" label="商品条码"></el-table-column>
      <el-table-column prop="name" label="商品名称"></el-table-column>
      <el-table-column prop="costPrice" label="进货价"></el-table-column>
      <el-table-column prop="salePrice" label="销售价"></el-table-column>
      <el-table-column prop="quantity" label="入库数量"></el-table-column>
      <el-table-column prop="category" label="分类"></el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button size="mini" @click="deleteProduct(scope.$index)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div class="status-container">
      <span>未保存：{{ pendingItems }}行</span>
      <span>已保存：{{ savedItems }}行</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        barcode: '',
        name: '',
        costPrice: '',
        salePrice: '',
        quantity: '',
        category: ''
      },
      products: [],
      categories: [
        { value: '食品', label: '食品' },
        { value: '饮料', label: '饮料' },
        { value: '日用品', label: '日用品' }
      ],
      pendingItems: 0,
      savedItems: 0
    };
  },
  methods: {
    addProduct() {
      if (this.form.barcode && this.form.name && this.form.costPrice && this.form.salePrice && this.form.quantity && this.form.category) {
        this.products.push({ ...this.form });
        this.pendingItems++;
        this.resetForm();
      } else {
        this.$message.error('请填写所有必填项');
      }
    },
    resetForm() {
      this.form = {
        barcode: '',
        name: '',
        costPrice: '',
        salePrice: '',
        quantity: '',
        category: ''
      };
    },
    deleteProduct(index) {
      this.products.splice(index, 1);
      this.pendingItems--;
    }
  }
};
</script>

<style scoped>
.quick-add-product-container {
  padding: 20px;
}

.quick-add-form {
  margin-bottom: 20px;
}

.status-container {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
</style>
