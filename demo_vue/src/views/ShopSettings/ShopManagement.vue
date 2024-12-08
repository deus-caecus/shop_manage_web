<template>
  <div class="container">
    <el-form :model="storeForm" label-width="120px">
      <el-form-item label="店铺编号：">
        <el-input v-model="storeForm.storeId" placeholder="请输入店铺编号"></el-input>
      </el-form-item>
      <el-form-item label="店铺名称：">
        <el-input v-model="storeForm.storeName" placeholder="请输入店铺名称"></el-input>
      </el-form-item>
      <el-form-item label="联系人：">
        <el-input v-model="storeForm.contactName" placeholder="请输入联系人"></el-input>
      </el-form-item>
      <el-form-item label="联系人手机：">
        <el-input v-model="storeForm.contactPhone" placeholder="请输入联系人手机"></el-input>
      </el-form-item>
      <el-form-item label="店铺地址：">
        <el-input v-model="storeForm.address" placeholder="请输入店铺地址"></el-input>
      </el-form-item>
      <el-form-item label="店铺图片：">
        <div class="image-container">
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
          <img v-if="storeForm.image" :src="storeForm.image" alt="Store Image" class="image-preview" />
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { ElForm, ElFormItem, ElInput, ElButton, ElUpload } from 'element-plus';

export default {
  components: {
    ElForm,
    ElFormItem,
    ElInput,
    ElButton,
    ElUpload,
  },
  data() {
    return {
      storeForm: {
        storeId: '20001',
        storeName: '小杏便利店',
        contactName: '熊大',
        contactPhone: '153xxxxxxx',
        address: '北京',
        image: '',
      },
      fileList: [],
    };
  },
  methods: {
    handleSuccess(response, file, fileList) {
      console.log('Upload success:', response, file, fileList);
      this.storeForm.image = file.url;
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
      this.storeForm.image = '';
    },
  },
};
</script>

<style scoped>
.container {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.image-container {
  display: flex;
  align-items: center;
  gap: 20px;
}

.image-preview {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
