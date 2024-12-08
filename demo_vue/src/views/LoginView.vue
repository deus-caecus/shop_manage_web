<script setup>
const loginData = {
  username: "",
  password: ""
}

</script>

<template>
  <div class="container">
    <h1>商超管理系统</h1>
    <div class="form-container">
      <h2>登录</h2>
      <form action="/login" method="post">
        <div class="form-group">
          <label for="store-id">店铺编号：</label>
          <input type="text" id="store-id" name="store-id" placeholder="请输入店铺编号">
        </div>
        <div class="form-group">
          <label for="username">账号：</label>
          <input type="text" id="username" name="username" placeholder="请输入账号">
        </div>
        <div class="form-group">
          <label for="password">密码：</label>
          <input type="password" id="password" name="password" placeholder="请输入密码">
        </div>
        <div class="form-group">
          <label for="captcha" id="captcha-label">验证码：</label>
          <input type="text" id="captcha" name="captcha" placeholder="请输入验证码">
          <img alt="验证码" id="captcha-image">

        </div>
        <div class="form-group">
          <a href="#" id="captcha-refresh">看不清？换一张</a>
        </div>
        <button type="submit">登录</button>
      </form>
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
