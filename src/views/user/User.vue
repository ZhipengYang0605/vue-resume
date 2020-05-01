<template>
  <div id="user">
      <router-view></router-view>
    <!-- 1.头部 -->
    <Header />
    <!-- 2.个人信息盒子 -->
    <div class="info-box">
        <div class="info-banner">
            <div class="container">
                <div class="user-img">
                    <img src="./../../assets/images/header/huge.jpg" />
                </div>
                <div class="user-name">
                  <span>穷开心520</span>
                </div>
                <div class="edit-info">
                  <router-link to="/user/edit">编辑我的资料</router-link>
                </div>
            </div>
        </div>
        <div class="info-img">
            <div class="container">
                <img src="./../../assets/images/user/user-img.png" alt="">
            </div>
            
        </div>
    </div>

    <!-- 尾部 -->
    <Footer />
  </div>
</template>

<script>
import Header from "./../../components/header/Header";
import Footer from "./../../components/Footer";
export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style scoped>
.info-box{
    margin-bottom: 250px;
}
.info-banner{
    padding: 100px 0 60px 0;
    background: linear-gradient(90deg,#13d8a7 3%,#00c2ef);
}
.user-img{
    width: 88px;
    height: 88px;
    margin: 0 auto;
    padding-top: 29px;
}
.user-img img{
    width: 80px;
    border: 4px solid rgba(250, 250, 250, 0.6);
    border-radius: 50%;
    overflow: hidden;
}
.user-name{
    height: 21px;
    margin: 20px 0 6px 0;
    font-size: 20px;
    color: #fff;
    text-align: center;
}
.edit-info {
    height: 20px;
    text-align: center;
}
.edit-info a{
    color: #fff;
    font-size: 14px;
    text-decoration: none;
}
.info-img{
    padding: 25px 0;
}
.info-img .container img{
    width: 100%;
}
</style>