<script setup>
import { loginService } from '@/api/login';
import router from '@/router';
import { ref } from 'vue';
import { useTokenStore } from '@/stores/token.js'

//调用useTokenStore得到状态
const tokenStore = useTokenStore();
const loginData = ref({
  storeId: "",
  account: "",
  passwordHash: ""
})
const login = async () => {
  let result = await loginService(loginData.value);
  console.log("响应结果", result)
  if (result.code == 200) {
    console.log(tokenStore);
    console.log(typeof tokenStore);
    alert('登录成功!')
    router.push('/BusinessManagement/SaleChart')
    tokenStore.setToken(result.data)
  } else {
    alert('登录失败!')
  }

}

const clearLoginData = () => {
  loginData.value = {
    storeId: '',
    username: '',
    password: '',
  }
}

</script>

<template>
  <div class="container">
    <h1>商超管理系统</h1>
    <div class="form-container">
      <h2>登录</h2>
      <el-form action="/login" :model="loginData">
        <el-form-item label="店铺编号">
          <el-input v-model="loginData.storeId" />
        </el-form-item>
        <el-form-item label="用户名  ">
          <el-input v-model="loginData.account" />
        </el-form-item>
        <el-form-item label="密码    ">
          <el-input v-model="loginData.passwordHash" show-password type="password" />
        </el-form-item>
        <el-form-item label="验证码    ">
          <el-input />
        </el-form-item>
        <el-button @click="login(), clearLoginData">登录</el-button>
      </el-form>
    </div>
  </div>
</template>
<style scoped>
body {
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
  display: flex;
  background-repeat: no-repeat;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.container {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  min-width: 400px;
  max-width: 700px;
  height: 50vw;
  min-height: 475px;
  max-height: 600px;
  width: 40vw;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: absolute;
  left: 30%;
  top: 10%;

}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

h2 {
  text-align: center;
  margin-bottom: 10;
  margin-top: 0
}

.form-container {
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;

}

.form-group {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.form-group label {
  width: 100px;
  margin-right: 10px;
}

.form-group input {
  flex-grow: 1;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

/* #captcha-label{
  flex-shrink: 0;
  width:20%
} */

#captcha {
  width: 100px
}

#captcha-image {
  width: 100px;
  height: 40px;
  margin-left: 10px;
}

#captcha-refresh {
  margin-left: 10px;
  color: blue;
  cursor: pointer;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #555;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #777;
}
</style>
