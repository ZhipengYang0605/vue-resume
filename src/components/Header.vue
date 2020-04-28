<template>
  <div id="header">
    <div class="container">
      <!-- 导航栏开始 -->
      <nav class="navbar navbar-expand-lg">
        <a class="navbar-brand" href="#">个人简历网</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon">点</span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">首页</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">待开发1</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">待开发2</a>
            </li>
          </ul>
          <!-- 登录注册部分 -->
          <span class="navbar-text">
            <router-link to="/login" class="login">登录</router-link>
            <i>/</i>
            <a href="#" class="register">注册</a>
          </span>
        </div>
      </nav>
      <!-- 导航栏结束 -->
    </div>
    <!-- login -->
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#header {
  width: 100%;
  background: #fff;
  box-shadow: 8px 5px 5px rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  z-index: 9999;
}
/* 导航栏部分 */
#header .navbar{
  background: #fff;
  box-sizing: border-box;
}
.navbar a{
  color: #222;
  font-weight: 700;
}
.navbar .navbar-brand{
  color:#13D8a7;
}
.active a{
  color:#13D8a7;
  border-bottom: 2px solid #13D8a7;
}
.nav-item{
  padding: 0 15px;
}
.nav-item a:hover{
  color: #13D8a7;
}

/* 登录/注册部分 */
.navbar-text{
  display: inline-block;
  padding: 5px 10px;
  border: 1px solid #13D8a7;
  border-radius: 14px;
}
.navbar-text a,
.navbar-text i{
  font-size: 14px;
  text-decoration: none;
  color: #13D8a7;
}
</style>
