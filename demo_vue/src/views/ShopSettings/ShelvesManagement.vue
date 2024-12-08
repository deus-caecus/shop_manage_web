<template>
  <div class="container">
    <el-collapse v-model="activeNames">
      <el-collapse-item title="A区" name="1">
        <div class="content">
          <div>货区：A1</div>
          <div>货区：A2</div>
          <div>货区：A3</div>
        </div>
      </el-collapse-item>
      <el-collapse-item title="B区" name="2">
        <div class="content">
          <div>货区：B1</div>
          <div>货区：B2</div>
          <div>货区：B3</div>
        </div>
      </el-collapse-item>
      <el-collapse-item title="C区" name="3">
        <div class="content">
          <div>货区：C1</div>
          <div>货区：C2</div>
          <div>货区：C3</div>
        </div>
      </el-collapse-item>
    </el-collapse>
    <el-button type="primary" @click="addNewArea">添加新区域</el-button>
  </div>
</template>

<script>
import { ElCollapse, ElCollapseItem, ElButton } from 'element-plus';

export default {
  components: {
    ElCollapse,
    ElCollapseItem,
    ElButton,
  },
  data() {
    return {
      activeNames: ['1'],
      areas: [
        { name: '1', title: 'A区' },
        { name: '2', title: 'B区' },
        { name: '3', title: 'C区' },
      ],
    };
  },
  methods: {
    addNewArea() {
      const newName = (this.areas.length + 1).toString();
      this.areas.push({ name: newName, title: `新区域${newName}` });
      this.activeNames.push(newName);
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
}

.content {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.el-collapse {
  border: 10px solid #ddd;
  border-radius: 4px;
  margin-bottom: 20px;
}

.el-collapse-item__header {
  background-color: #ddd;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.el-collapse-item__content {
  padding: 10px;
}
</style>
