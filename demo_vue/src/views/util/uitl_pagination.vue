
<template>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalItems"
      ></el-pagination>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
      totalItems: 100, // 总共的项目数量
      pageSize: 10, // 每页显示的项目数量
      totalPages: Math.ceil(this.totalItems / this.pageSize) // 总页数
    };
  },
  methods: {
    handleCurrentChange(page) {
      this.currentPage = page;
      console.log('Current page:', page);
    }
  }
};
</script>

<style scoped>
.pagination-container {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.page-info {
  font-size: 16px;
  color: #606266;
}
</style>
