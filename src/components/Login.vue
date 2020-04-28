<template>
  <div id="login">
    <el-card class="box-card">
      <!-- title -->
      <div slot="header" class="clearfix">
        <span>登录</span>
      </div>

      <!-- content -->
      <div class="text item">
        <form action="">
          <div class="input-item">
            <span>
              <i></i>
            </span>
            <input type="text" placeholder="请输入用户名" class="user_name" />
          </div>
          <div class="input-item">
            <span>
              <i></i>
            </span>
            <input
              type="password"
              placeholder="请输入用户密码"
              class="user_pwd"
            />
          </div>

          <div class="val-code">
            <input type="text" placeholder="请输入验证码" />
            <img class="val-img" src="" alt="" />
          </div>
          <div class="input-item">
            <input type="submit" value="登录" class="login" />
          </div>
          <div class="login-foot">
            <div class="pwd_ret">
              <a href="#">忘记密码?</a>
            </div>
            <div class="to-login">
              <a href="#">去注册</a>
              <i></i>
            </div>
          </div>
        </form>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#login{
    background: red;
}
/* box-card整体样式 */
.box-card{
    position: fixed;
    top: 50%;
    left:50%;
    transform: translate(-50%, -50%);
    z-index: 99999999;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.clearfix {
  text-align: center;
  font-weight: 700;
}
.box-card {
  width: 400px;
}

/* 自己写的样式 */
.input-item input {
  width: 100%;
  height: 40px;
  padding-left: 20px;
}
input {
  border-radius: 4px;
  border: 1px solid #ccc;
  outline-color: #13d8a7;
}
.val-code input {
  padding-left: 10px;
}
.val-code {
  display: flex;
  justify-content: space-between;
}
.val-code,
.input-item {
  padding: 10px 0;
  box-sizing: border-box;
}
.val-code img {
  display: inline-block;
  height: 23px;
  border: 1px solid #13d8a7;
  width: 160px;
  border-radius: 4px;
}
.login {
  background: #13d8a7;
  color: #fff;
  border: 1px solid #13d8a7;
}

/* login-foot */
.login-foot{
    display: flex;
    justify-content: space-around;
}
.login-foot a{
    color: #222;
    text-decoration: none;
}
.login-foot a:hover{
    color: #13d8a7;
}
</style>
