
<script>
import { ElButton, ElUpload } from 'element-plus';

export default {
  components: {
    ElButton,
    ElUpload,
  },
  data() {
    return {
      images: [],
      fileList: [],
    };
  },
  methods: {
    handleSuccess(response, file, fileList) {
      console.log('Upload success:', response, file, fileList);
      this.images.push(file.url);
      this.fileList = [];
    },
    beforeUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isPNG = file.type === 'image/png';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG && !isPNG) {
        this.$message.error('只能上传jpg/png文件!');
      }
      if (!isLt2M) {
        this.$message.error('上传文件大小不能超过2MB!');
      }
      return isJPG || isPNG && isLt2M;
    },
    handleChange(file, fileList) {
      console.log('File changed:', file, fileList);
    },
    handleRemove(file, fileList) {
      console.log('File removed:', file, fileList);
    },
    removeImage(index) {
      this.images.splice(index, 1);
    },
  },
};
</script>


<template>
<div class="image-container">
  <div v-for="(image, index) in images" :key="index" class="image-item">
    <img :src="image" alt="Image" class="image-preview" />
    <el-button type="text" @click="removeImage(index)">删除</el-button>
  </div>
  <div class="add-image">
    <el-upload
      class="upload-demo"
      action="/upload"
      :on-success="handleSuccess"
      :before-upload="beforeUpload"
      :on-remove="handleRemove"
      :on-change="handleChange"
      :file-list="fileList"
      list-type="picture"
      :auto-upload="false"
    >
      <el-button slot="trigger" type="primary" icon="el-icon-plus">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </div>
</div>
</template>
<style>
.image-container {
  display: flex;
  flex-direction:row; /* 让子元素垂直排列 */
}

.image-item,
.add-image {
  margin-bottom: 10px; /* 可选：为元素之间添加间距 */
  display: flex;
  align-items: center; /* 垂直居中对齐 */
}

.image-preview {
  max-width: 100%; /* 确保图片不会超出容器宽度 */
  height: auto; /* 保持图片的宽高比 */
}

/* 如果需要，可以为 .add-image 添加额外样式 */
.add-image {
  justify-content: center; /* 水平居中对齐 */
}
</style>
