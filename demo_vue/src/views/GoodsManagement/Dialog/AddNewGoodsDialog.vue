<script setup>
import { ref } from 'vue';
import { ElMessage } from 'element-plus';

const dialogVisible = ref(false);
const form = ref({
  retailCode: '',
  retailName: '',
  purchasePrice: '',
  retailPrice: '',
  category: '',
  stock: '',
  wholesaleCode: '',
  wholesaleName: '',
  conversionRate: '',
  wholesalePrice: '',
  wholesaleUnit: '',
  pinyinCode: '',
  brand: '',
  origin: '',
  supplier: '',
  shelfLife: '',
  stockWarning: ''
});

const openDialog = () => {
  dialogVisible.value = true;
};

const saveForm = () => {
  // 检查表单数据
  if (!form.value.retailCode || !form.value.retailName || !form.value.purchasePrice || !form.value.retailPrice || !form.value.category || !form.value.stock) {
    ElMessage.error('请填写必填项');
    return;
  }

  // 保存表单数据
  ElMessage.success('保存成功');
  dialogVisible.value = false;
};
</script>

<style scoped>
/* 样式代码 */
</style>
<template>
  <div>
    <el-button @click="openDialog" type = "primary">添加商品信息</el-button>
    <el-dialog v-model="dialogVisible" title="商品信息">
      <el-form :model="form" label-width="100px">
        <el-form-item label="零售信息（*为必填）">
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="*编码：" prop="retailCode">
                <el-input v-model="form.retailCode" placeholder="请输入"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="*商品零售名称：" prop="retailName">
                <el-input v-model="form.retailName" placeholder="请输入"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="*进价：" prop="purchasePrice">
                <el-input v-model="form.purchasePrice" placeholder="请输入"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="*零售价：" prop="retailPrice">
                <el-input v-model="form.retailPrice" placeholder="请输入"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="类别：" prop="category">
                <el-select v-model="form.category" placeholder="请选择">
                  <el-option label="副食" value="副食"></el-option>
                  <el-option label="饮料" value="饮料"></el-option>
                  <el-option label="日用品" value="日用品"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="*库存：" prop="stock">
                <el-input v-model="form.stock" placeholder="请输入"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item label="整售信息（信息完整才有效）">
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="编码：" prop="wholesaleCode">
                <el-input v-model="form.wholesaleCode" placeholder="请输入"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="商品整售名称：" prop="wholesaleName">
                <el-input v-model="form.wholesaleName" placeholder="请输入"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="整零换算数：" prop="conversionRate">
                <el-input v-model="form.conversionRate" placeholder="请输入"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="整售价：" prop="wholesalePrice">
                <el-input v-model="form.wholesalePrice" placeholder="请输入"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="整售单位：" prop="wholesaleUnit">
                <el-select v-model="form.wholesaleUnit" placeholder="请选择">
                  <el-option label="斤" value="斤"></el-option>
                  <el-option label="公斤" value="公斤"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item label="扩展信息（信息完整才有效）">
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="拼音码：" prop="pinyinCode">
                <el-input v-model="form.pinyinCode" placeholder="请输入"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="商品品牌：" prop="brand">
                <el-input v-model="form.brand" placeholder="请输入"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="商品产地：" prop="origin">
                <el-input v-model="form.origin" placeholder="请输入"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="默认供货商：" prop="supplier">
                <el-input v-model="form.supplier" placeholder="请输入"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="保质期（天）：" prop="shelfLife">
                <el-input v-model="form.shelfLife" placeholder="请输入"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="库存预警值：" prop="stockWarning">
                <el-input v-model="form.stockWarning" placeholder="请输入"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="saveForm">保存</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
