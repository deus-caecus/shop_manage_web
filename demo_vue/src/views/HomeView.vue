<script setup>
//

//
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
          text-color="#fff" @open="handleOpen" @close="handleClose" default-active="/BusinessManagement/SaleChart"
          :router="true">
          <el-sub-menu index="1" class="e-menu">
            <template #title>
              <el-icon>
                <WalletFilled />
              </el-icon>
              <span>营业管理</span>
            </template>
            <el-menu-item index="/BusinessManagement/SaleChart">营业报表</el-menu-item>
            <el-menu-item index="/BusinessManagement/GoodsSaleStatistic">商品销售统计</el-menu-item>
            <el-menu-item index="/BusinessManagement/SaleInvoicesQuery">销售单据查询</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="2" class="e-menu">
            <template #title>
              <el-icon>
                <Handbag />
              </el-icon>
              <span>商品管理</span>
            </template>
            <el-menu-item index="/GoodsManagement/AddingGoodsShortcut">快速添加商品</el-menu-item>
            <el-menu-item index="/GoodsManagement/GoodsDataManagement">商品资料管理</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="3" class="e-menu">
            <template #title>
              <el-icon>
                <House />
              </el-icon>
              <span>库存管理</span>
            </template>
            <el-menu-item index="/StockManagement/StockInventory">库存盘点</el-menu-item>
            <el-menu-item index="/StockManagement/WarehousingInvoicesQuery">入库单据查询</el-menu-item>
            <el-menu-item index="/StockManagement/WarehousingGoods">商品入库</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="4" class="e-menu">
            <template #title>
              <el-icon>
                <Coin />
              </el-icon>
              <span>会员管理</span>
            </template>
            <el-menu-item index="/MemberManagement/MemberData">会员资料</el-menu-item>
            <el-menu-item index="/MemberManagement/PointExchangeSettings">积分兑换设置</el-menu-item>
            <el-menu-item index="/MemberManagement/MemberReportTable">会员报表</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="5" class="e-menu">
            <template #title>
              <el-icon>
                <UserFilled />
              </el-icon>
              <span>员工管理</span>
            </template>
            <el-menu-item index="/StaffManagement/StaffInformationManagement">员工信息管理</el-menu-item>
            <el-menu-item index="/StaffManagement/PositionPermissionManagement">职位权限管理</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="6" class="e-menu">
            <template #title>
              <el-icon>
                <Shop />
              </el-icon>
              <span>店铺设置</span>
            </template>
            <el-menu-item index="/ShopSettings/ShopManagement">店铺管理</el-menu-item>
            <el-menu-item index="/ShopSettings/ShelvesManagement">货架管理</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="7" class="e-menu">
            <template #title>
              <el-icon>
                <Opportunity />
              </el-icon>
              <span>其他产品设置</span>
            </template>
            <el-menu-item index="/OtherProductSettings/AdvertisementSettings">广告设置</el-menu-item>

          </el-sub-menu>
          <el-sub-menu class="e-menu">
            <template #title>
              <el-icon>
                <PhoneFilled />
              </el-icon>
              <span>供应链</span>
            </template>
            <el-menu-item index="/SupplyChain/SettlementManagement">结算管理</el-menu-item>
            <el-menu-item index="/SupplyChain/SupplierManagement">供应商管理</el-menu-item>

          </el-sub-menu>
        </el-menu>
      </el-aside>
      <el-main class="el-main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>

</template>
<style></style>
