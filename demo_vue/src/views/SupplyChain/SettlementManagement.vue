<script setup>
import { ref } from 'vue'
const value = ref('')

const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]

const payment_status = [
  {
    value: 'payed',
    label: 'payed'
  },
  {
    value: 'unpaid',
    label: 'unpaid'
  }
]

</script>

<script>
import { ElTable, ElTableColumn, ElTag, ElUpload, ElButton } from 'element-plus';

export default {
  components: {
    ElTable,
    ElTableColumn,
    ElTag,
    ElUpload,
    ElButton,
  },
  data() {
    return {
      tableData: [
        {
          orderNumber: '1111111',
          supplier: '2222222',
          orderTime: '2023-3-12',
          cargoVolume: 'xxx',
          totalPrice: '114514.00元',
          settlementStatus: '未支付',
        },
        // 更多数据...
      ],
    };
  },
  methods: {
    handleSuccess(response, file, fileList) {
      console.log('Upload success:', response, file, fileList);
    },
    beforeUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },
  },
};
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <div class="block">
          <el-date-picker v-model="value2" type="daterange" unlink-panels range-separator="To"
            start-placeholder="Start date" end-placeholder="End date" :shortcuts="shortcuts" :size="size" />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <el-select v-model="value" placeholder="Select" style="width: 240px">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
            </el-select>

          <el-input v-model="input" style="width: 240px" placeholder="Please input" />
          <el-button type="primary">查询</el-button>


        </div>
      </el-header>
      <el-main>
        <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="selected" label="勾选框">
      <el-checkbox />
    </el-table-column>
    <el-table-column prop="orderNumber" label="货流单号" width="180"></el-table-column>
    <el-table-column prop="supplier" label="供货商" width="180"></el-table-column>
    <el-table-column prop="orderTime" label="下单时间" width="180"></el-table-column>
    <el-table-column prop="cargoVolume" label="货流量" width="180"></el-table-column>
    <el-table-column prop="totalPrice" label="总价" width="180"></el-table-column>
    <el-table-column prop="settlementStatus" label="结算状态" width="180">
      <template #default="scope">
        <el-select v-model="value" placeholder="Select" style="width: 120px">
      <el-option
        v-for="item in payment_status"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
        <!-- <el-checkbox-group v-model="scope.row.settlementStatus">
          <el-checkbox label="已支付" />
          <el-checkbox label="未支付" />
        </el-checkbox-group> -->
      </template>
    </el-table-column>
    <el-table-column label="支付凭证" width="180">
      <template #default="scope">
        <el-upload
          action="/upload"
          :show-file-list="false"
          :on-success="handleSuccess"
          :before-upload="beforeUpload"
        >

        </el-upload>
      </template>
    </el-table-column>
  </el-table>
      </el-main>
      <el-footer>
        <el-button round>添加</el-button>
        <el-button round>保存</el-button>
        <el-button  round>删除</el-button>
      </el-footer>
    </el-container>
  </div>
</template>
<style>

</style>
