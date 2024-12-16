<template>
  <div class="exchange-items-container">
    <div class="header">
      <div class="title">积分获得比例</div>
      <el-input v-model="pointsRatio" placeholder="消费一元可获积分" style="width: 200px; margin-right: 20px;"></el-input>
      <el-button type="primary" @click="updatePointsRatio">修改</el-button>
      <el-select v-model="category" placeholder="全部分类" style="width: 200px; margin-right: 20px;">
        <el-option label="全部分类" value="all"></el-option>
        <el-option label="分类1" value="category1"></el-option>
        <el-option label="分类2" value="category2"></el-option>
      </el-select>
      <el-input v-model="searchQuery" placeholder="请输入商品名称/#条形码/-拼音码"
        style="width: 300px; margin-right: 20px;"></el-input>
      <el-button type="primary" @click="searchItems">查询</el-button>
    </div>
    <el-table :data="exchangeItems" style="width: 100%">
      <el-table-column prop="id" label="序号"></el-table-column>
      <el-table-column prop="name" label="商品名称"></el-table-column>
      <el-table-column prop="code" label="商品编号"></el-table-column>
      <el-table-column prop="price" label="售价"></el-table-column>
      <el-table-column prop="points" label="所需积分"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="editItem(scope.$index)">编辑</el-button>
          <el-button type="danger" @click="deleteItem(scope.$index)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button type="primary">
      保存
    </el-button>
    <div class="exchangeableGoods">
      <div class="title">可兑换商品：</div>
      <div>
        <el-table :data="selectedItems" style="width: 100%">
          <el-table-column prop="id" label="序号"></el-table-column>
          <el-table-column prop="name" label="商品名称"></el-table-column>
          <el-table-column prop="code" label="商品编号"></el-table-column>
          <el-table-column prop="price" label="售价"></el-table-column>
          <el-table-column prop="points" label="所需积分"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button @click="removeSelectedItem(scope.$index)">移除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <el-button type="primary" @click="saveSelectedItems">保存</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pointsRatio: '',
      category: '',
      searchQuery: '',
      exchangeItems: [
        { id: 1, name: '商品1', code: '001', price: 100, points: 50 },
        { id: 2, name: '商品2', code: '002', price: 200, points: 100 },
        { id: 3, name: '商品3', code: '003', price: 150, points: 75 }
      ],
      selectedItems: []
    };
  },
  methods: {
    updatePointsRatio() {
      console.log('更新积分比例:', this.pointsRatio);
    },
    searchItems() {
      console.log('搜索商品:', this.searchQuery);
    },
    editItem(index) {
      console.log('编辑商品:', index);
    },
    deleteItem(index) {
      this.exchangeItems.splice(index, 1);
    },
    removeSelectedItem(index) {
      this.selectedItems.splice(index, 1);
    },
    saveSelectedItems() {
      console.log('保存选中的商品:', this.selectedItems);
    }
  }
};
</script>

<style scoped>
.exchange-items-container {
  padding: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.title {
  font-size: 18px;
  font-weight: bold;
}

.footer {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
