<script setup>
import SaleChartView from './SaleChartView.vue';

</script>
<style scoped>
.homecontainer {
  height: 1000px;
}

.aside {
  background-color: #2C2C2C;
  width: 199px;
}

.e-menu {
  width: 200px;

}

.el-header {
  background-color: #3b3b3e;
  display: flex;
  justify-content: space-between;
  padding-left: 50;
  align-items: center;
  color: #fff;
  font-size: 20px;
}
</style>

<template>
  <el-container class="homecontainer">
    <el-header class="el-header">
      商超后台管理系统
      <span>
        <el-text class="mx-1" type="info">欢迎登录!:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</el-text>
        <el-text class="mx-1" type="info">admin&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</el-text>
        <el-button type="danger" round>退出</el-button>
      </span>
    </el-header>
    <el-container height="100%">
      <el-aside class="aside">
        <el-menu active-text-color="#ffd04b" background-color="#2C2C2C" class="el-menu-vertical-demo e-menu"
          text-color="#fff" @open="handleOpen" @close="handleClose" default-active="1-1">
          <el-sub-menu index="1" class="e-menu">
            <template #title>
              <el-icon>
                <WalletFilled />
              </el-icon>
              <span>营业管理</span>
            </template>
            <el-menu-item index="1-1">营业报表</el-menu-item>
            <el-menu-item index="1-2">商品销售统计</el-menu-item>
            <el-menu-item index="1-3">销售单据查询</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="2" class="e-menu">
            <template #title>
              <el-icon>
                <Handbag />
              </el-icon>
              <span>商品管理</span>
            </template>
            <el-menu-item index="2-1">快速添加商品</el-menu-item>
            <el-menu-item index="2-2">商品资料管理</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="3" class="e-menu">
            <template #title>
              <el-icon>
                <House />
              </el-icon>
              <span>库存管理</span>
            </template>
            <el-menu-item index="3-1">库存盘点</el-menu-item>
            <el-menu-item index="3-2">入库单据查询</el-menu-item>
            <el-menu-item index="3-3">商品入库</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="4" class="e-menu">
            <template #title>
              <el-icon>
                <Coin />
              </el-icon>
              <span>会员管理</span>
            </template>
            <el-menu-item index="4-1">会员资料</el-menu-item>
            <el-menu-item index="4-2">积分兑换设置</el-menu-item>
            <el-menu-item index="4-3">会员报表</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="5" class="e-menu">
            <template #title>
              <el-icon>
                <UserFilled />
              </el-icon>
              <span>员工管理</span>
            </template>
            <el-menu-item index="5-1">员工信息管理</el-menu-item>
            <el-menu-item index="5-2">职位权限管理</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="6" class="e-menu">
            <template #title>
              <el-icon>
                <Shop />
              </el-icon>
              <span>店铺设置</span>
            </template>
            <el-menu-item index="6-1">店铺管理</el-menu-item>
            <el-menu-item index="6-2">货架管理</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="7" class="e-menu">
            <template #title>
              <el-icon>
                <Opportunity />
              </el-icon>
              <span>其他产品设置</span>
            </template>
            <el-menu-item index="7-1">广告设置</el-menu-item>

          </el-sub-menu>
          <el-sub-menu index="8" class="e-menu">
            <template #title>
              <el-icon>
                <PhoneFilled />
              </el-icon>
              <span>供应链</span>
            </template>
            <el-menu-item index="8-1">结算管理</el-menu-item>
            <el-menu-item index="8-2">供应商管理</el-menu-item>

          </el-sub-menu>
        </el-menu>
      </el-aside>
      <el-main class="el-main">
        <SaleChartView />
      </el-main>
    </el-container>
  </el-container>

</template>
