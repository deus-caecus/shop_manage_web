<script setup>

</script>
<style>
.homecontainer {
  height: 100%;
}
</style>

<template>
  <el-container class="homecontainer" width="2000px">
    <el-header>商超管理系统</el-header>
    <el-container height="100%">
      <el-aside width="200px" class="aside">
        <el-menu active-text-color="#ffd04b" background-color="#2C2C2C" class="el-menu-vertical-demo" default-active="2"
          text-color="#fff" @open="handleOpen" @close="handleClose">
          <el-sub-menu index="1">
            <template #title>
              <el-icon>
                <location />
              </el-icon>
              <span>Navigator One</span>
            </template>
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
            <el-menu-item index="1-3">item three</el-menu-item>
            <el-menu-item index="1-4">item four</el-menu-item>
          </el-sub-menu>
          <el-menu-item index="2">
            <el-icon><icon-menu /></el-icon>
            <span>Navigator Two</span>
          </el-menu-item>
          <el-menu-item index="3">
            <el-icon>
              <document />
            </el-icon>
            <span>Navigator Three</span>
          </el-menu-item>
          <el-menu-item index="4">
            <el-icon>
              <setting />
            </el-icon>
            <span>Navigator Four</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main class="el-main">Main</el-main>
    </el-container>
  </el-container>

</template>
