<template>
  <div id="noresume">
    <!-- 1.Header -->
    <Header />
    <!-- 2.内容 -->
    <!-- <Template /> -->
    <div class="content">
      <div class="container">
        <div class="notice">
          <h1>- 您还没有任何简历 -</h1>
          <h4>点击下方按钮创建简历</h4>
        </div>
        <div class="toadd">
          <div class="banner-btn" @click="goAdd">制作简历</div>
        </div>
      </div>
    </div>
    <!-- 3.Footer -->
    <Footer style="margin-top: 50px;"/>
    <!-- 4.addresume出口 -->
    <router-view></router-view>
  </div>
</template>
<script>
import Header from "./../../components/header/Header";
import Footer from "./../../components/Footer";
// import Template from "./components/Template";
export default {
  components: {
    Header,
    Footer,
    // Template
  },
  methods: {
    goAdd(){
      alert("click!");
      this.$router.push('/template');
    }
  }
};
</script>
<style scoped>
.content{
  margin-bottom: 378px;
}
.content .notice {
  margin-top: 150px;
  width: 100%;
  text-align: center;
  font-family: "Courier New", Courier, monospace;
  font-weight: normal;
}
.content .notice h4 {
  color: #13d8a7;
}
.toadd{
  text-align: center;
}
/* 按钮样式 */
.toadd .banner-btn{
    position: absolute;
    top: 250px;
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