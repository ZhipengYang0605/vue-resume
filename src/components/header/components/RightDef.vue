<template>
  <div id="rightdef">
    <span class="navbar-text">
      <router-link to="/login" class="login">登录</router-link>
      <i>/</i>
      <router-link to="/register" class="register">注册</router-link>
    </span>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar-text {
  display: inline-block;
  padding: 5px 10px;
  border: 1px solid #13d8a7;
  border-radius: 14px;
}
.navbar-text a,
.navbar-text i {
  font-size: 14px;
  text-decoration: none;
  color: #13d8a7;
}
</style>