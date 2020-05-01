<template>
    <div id="template">
        <!-- 1.Header -->
        <Header />
        <!-- 2.模板 -->
        <div class="content">
            <div class="container">
                <div class="myresume">
                    <div class="notice">
                      <h1>- Welcome -</h1>
                      <h4>我的简历</h4>
                    </div>
                    <!-- 我的简历列表 -->
                    <div class="tpl-list">
                      <div class="tpl-item">
                        <!-- 模板缩略图1 -->
                        <div class="tpl-img">
                            <div class="btn-box">
                                <router-link class="view" to="/addresume">查看当前简历</router-link>
                                <router-link class="edit" to="/addresume">编辑当前简历</router-link>
                                <router-link class="del" to="/addresume">删除当前简历</router-link>
                            </div>
                          
                          <img src="./../../assets/images/resume/tpl-img.png" />
                        </div>
                        <!-- 模板缩略图1 -->
                        <div class="tpl-img">
                          <a>进入编辑</a>
                          <img src="./../../assets/images/resume/tpl-img.png" />
                        </div>
                        <!-- 模板缩略图1 -->
                        <div class="tpl-img">
                          <a>进入编辑</a>
                          <img src="./../../assets/images/resume/tpl-img.png" />
                        </div>
                        <!-- 模板缩略图1 -->
                        <div class="tpl-img">
                          <a>进入编辑</a>
                          <img src="./../../assets/images/resume/tpl-img.png" />
                        </div>
                      </div>
                    </div>
                </div>
                <!-- 去创建新的简历/仅对会员和管理员开放 -->
                <div class="goTemplate">
                    <div class="notice">
                      <h1>- VIP -</h1>
                      <h4>发现更多可能</h4>
                    </div>
                    <div class="toadd">
                      <div class="banner-btn" @click="goAdd">创建更多简历</div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 3.Footer -->
        <Footer />
    </div>
</template>
<script>
import Header from "./../../components/header/Header";
import Footer from "./../../components/Footer";
export default {
    methods: {
        goAdd(){
            this.$router.push("/template");
        }
    },
    components: {
        Header,
        Footer
    }
}
</script>
<style scoped>
.myresume .notice,
.goTemplate .notice{
  margin-top: 150px;
  width: 100%;
  text-align: center;
  font-family: "Courier New", Courier, monospace;
  font-weight: normal;
}
.goTemplate .notice{
    margin-top: 50px;
}
.myresume .notice h4,
.goTemplate .notice h4{
  color: #13d8a7;
}

.myresume .tpl-title {
  font-size: 14px;
  color: #666;
  margin: 40px 0 10px 0;
}
.myresume .tpl-title span {
  display: inline-block;
  margin-right: 10px;
  font-size: 25px;
  color: #000;
}
/* ------------------------------------------- */
.tpl-list {
  padding: 0 35px;
  background: lightgray;
  border-radius: 10px;
}
.tpl-item {
  display: flex;
  /* justify-content: space-between; */
  flex-wrap: wrap;
}
.content{
    margin-bottom: 150px;
}
.content .tpl-item .tpl-img {
  position: relative;
  width: 238px;
  height: 338px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  margin: 20px 10px;
}

.content .tpl-item .tpl-img a {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  z-index: 2;
}
.content .tpl-item .tpl-img img {
  width: 100%;
  height: 100%;
}
.content .tpl-item .tpl-img a:hover {
  opacity: 1;
  height: 36px;
  width: 150px;
  background: linear-gradient(90deg, #13d8a7 3%, #00c2ef);
  text-align: center;
  line-height: 36px;
  color: #fff;
  border-radius: 20px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
}

/* 创建更多简历 */
.toadd{
  text-align: center;
  position: relative;
}
.goTemplate .banner-btn{
    position: absolute;
    top: 20px;
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