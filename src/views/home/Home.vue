<template>
  <div id="home">
    <!-- 1.头部 -->
    <Header />
    <!-- 2.banner部分----登录未注册展示 -->
    <div class="banner">
      <div class="banner-img">
        <img src="./../../assets/images/home/banner.png" alt="">
      </div>
      <div class="banner-btn" @click="goLogin">在线制作简历</div>
    </div>
    <!-- 3.footer部分 -->
    <Footer style="margin-top: 200px;"/>
  </div>
</template>

<script>
import Header from "./../../components/header/Header";
import Footer from "./../../components/Footer";
export default {
  methods:{
    // 点击跳转到登录页面
    goLogin(){
      this.$router.push("/login");
    }
  },
  components: {
    Header,
    Footer
  },
};
</script>

<style scoped>
  #home{
    overflow: hidden;
  }
  .banner{
    margin-top: 90px;
    text-align: center;
    position: relative;
  }
  .banner .banner-btn{
    position: absolute;
    top: 400px;
    left: 50%;
    transform: translateX(-50%);
    width: 358px;
    height: 76px;
    line-height: 76px;
    background: #13D8a7;
    font-size: 30px;
    color: #fff;
    font-weight: 700;
    border: none;
    border-radius: 20px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
    cursor: pointer;
  }
</style>
