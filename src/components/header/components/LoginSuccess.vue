<template>
  <div id="loginsuccess">
    <span class="navbar-text">
      <!-- 我的订单 -->
      <router-link to="/order" class="order">
        <i>加入会员</i>
      </router-link>
      <!-- 用户名/头像 -->
      <router-link to="/user" tag="a" class="user">
        <span></span>
        <img src="./../../../assets/images/header/huge.jpg" />
      </router-link>
      <!-- 退出登录 -->
      <router-link to="/" class="login-out">
        <i>退出登录</i>
      </router-link>
    </span>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar-text{
  display: inline-block;
  /* width: 100px; */
}
.navbar-text a.login-out,
.navbar-text a.order {
    font-size: 14px;
    color: #13D8a7;
    text-decoration: none;
    cursor: pointer;
}
.navbar-text .user img{
  margin: 0 10px;
  width: 40px;
  display: inline-block;
  border: 1px solid #13D8a7;
  border-radius: 50%;
  overflow: hidden;
  padding: 2px;
  cursor: pointer;
}
</style>