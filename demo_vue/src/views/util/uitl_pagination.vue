
<template>
  <div class="pagination-container">
    <el-pagination
      background
      layout="prev, pager, next, jumper"
      :total="totalItems"
      :current-page.prop="currentPage"
      @current-change="handleCurrentChange"
    >
      <template #prev>
        <span>首页</span>
      </template>
      <template #next>
        <span>尾页</span>
      </template>
      <template #prev-text>
        <span>&lt;&lt;上一页</span>
      </template>
      <template #next-text>
        <span>下一页&gt;&gt;</span>
      </template>
    </el-pagination>
    <div class="page-info">
      第{{ currentPage }}页 共{{ totalPages }}页
    </div>
  </div>
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
