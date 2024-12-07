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
        Main
      </el-main>
      <el-footer>
        Footer
      </el-footer>
    </el-container>
  </div>
</template>
<style>

</style>
