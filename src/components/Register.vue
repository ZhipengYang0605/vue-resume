<template>
  <div id="register">
    <el-card class="box-card">
      <!-- title -->
      <div slot="header" class="clearfix">
        <span>注册</span>
      </div>

      <!-- content -->
      <div class="text item">
        <form action="/">
          <div class="input-item">
            <span>
              <i></i>
            </span>
            <input type="text" placeholder="请输入账号" class="user_name" />
          </div>
          <div class="input-item">
            <span>
              <i></i>
            </span>
            <input type="text" placeholder="请输入名称" class="user_name" />
          </div>
          <div class="input-item">
            <span>
              <i></i>
            </span>
            <input type="password" placeholder="请输入用户密码" class="user_pwd" />
          </div>
         
         <div class="input-item">
            <span>
              <i></i>
            </span>
            <input type="password" placeholder="请再次输入用户密码" class="user_pwd_twice" />
          </div>
        
        <div class="input-item">
            <span>
              <i></i>
            </span>
            <input type="text" placeholder="请填写正确的邮箱" class="email" />
          </div>

          <div class="val-code">
            <input type="text" placeholder="请输入验证码" />
            <button class="val-btn">获取验证码</button>
          </div>
          <div class="input-item">
            <input type="submit" value="注册" class="register" />
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
.box-card {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99999999;
  border: 1px solid #ccc;
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
  padding-left: 20px;
}
input {
  height: 40px;
  border-radius: 4px;
  border: 1px solid #ccc;
  outline-color: #13d8a7;
  color: #13d8a7;
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
.val-code button {
  display: inline-block;
  height: 38px;
  border: 1px solid #13d8a7;
  width: 160px;
  border-radius: 4px;
  color: #13d8a7;
  outline: none;
}
.register {
  background: #13d8a7;
  color: #fff;
  border: 1px solid #13d8a7;
}
</style>