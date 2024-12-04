<script setup>

</script>

<template>
  <main>

    <div class="common-layout">
      <el-container>
        <el-header>商超管理系统</el-header>
        <el-container>
          <el-aside width="200px">
            <el-row class="tac">
              <el-col >
                <h5 class="mb-2">Default colors</h5>
                <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                  <el-sub-menu index="1">
                    <template #title>
                      <el-icon>
                        <location />
                      </el-icon>
                      <span>营业管理</span>
                    </template>
                    <el-menu-item-group title="Group One">
                      <el-menu-item index="1-1">item one</el-menu-item>
                      <el-menu-item index="1-2">item two</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="Group Two">
                      <el-menu-item index="1-3">item three</el-menu-item>
                    </el-menu-item-group>
                    <el-sub-menu index="1-4">
                      <template #title>item four</template>
                      <el-menu-item index="1-4-1">item one</el-menu-item>
                    </el-sub-menu>
                  </el-sub-menu>
                  <el-menu-item index="2">
                    <el-icon><icon-menu /></el-icon>
                    <span>商品管理</span>
                  </el-menu-item>
                  <el-menu-item index="3">
                    <el-icon>
                      <document />
                    </el-icon>
                    <span>库存管理</span>
                  </el-menu-item>
                  <el-menu-item index="4">
                    <el-icon>
                      <setting />
                    </el-icon>
                    <span>会员管理</span>
                  </el-menu-item>
                  <el-menu-item index="5">
                    <el-icon>
                      <setting />
                    </el-icon>
                    <span>员工管理</span>
                  </el-menu-item>
                  <el-menu-item index="6">
                    <el-icon>
                      <setting />
                    </el-icon>
                    <span>店铺设置</span>
                  </el-menu-item>
                  <el-menu-item index="7">
                    <el-icon>
                      <setting />
                    </el-icon>
                    <span>其他产品设置</span>
                  </el-menu-item>
                  <el-menu-item index="8">
                    <el-icon>
                      <setting />
                    </el-icon>
                    <span>供应链</span>
                  </el-menu-item>
                </el-menu>
              </el-col>
            </el-row>
          </el-aside>
          <el-main>Main</el-main>
        </el-container>
      </el-container>
    </div>

  </main>
</template>
