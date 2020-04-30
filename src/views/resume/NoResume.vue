<template>
  <div id="noresume">
    <!-- 1.Header -->
    <Header />
    <!-- 2.模板 -->
    <div class="content">
      <div class="container">
        <div class="notice">
          <h1>- 您还没有任何简历 -</h1>
          <h4> 我们提供以下模板创建简历 </h4>
        </div>
        <!-- 学生模板列表 -->
        <div class="tpl-list">
           <!-- 模板title -->
          <div class="tpl-title">
            <span>模板一</span>学生模板
          </div>

          <div class="tpl-item">
            <!-- 模板缩略图1 -->
            <div class="tpl-img">
              <router-link to="/noresume/addresume">进入编辑</router-link>
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

        <!-- 程序员模板列表 -->
        <div class="tpl-list">
           <!-- 模板title -->
          <div class="tpl-title">
            <span>模板二</span>程序员模板
          </div>

          <div class="tpl-item">
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
            <!-- 模板缩略图1 -->
            <div class="tpl-img">
              <a>进入编辑</a>
              <img src="./../../assets/images/resume/tpl-img.png" />
            </div>

          </div>

        </div>

        <!-- 有工作经验模板列表 -->
        <div class="tpl-list">
           <!-- 模板title -->
          <div class="tpl-title">
            <span>模板三</span>有工作经验模板
          </div>

          <div class="tpl-item">
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
            <!-- 模板缩略图1 -->
            <div class="tpl-img">
              <a>进入编辑</a>
              <img src="./../../assets/images/resume/tpl-img.png" />
            </div>

          </div>

        </div>

        <!-- 通用模板列表 -->
        <div class="tpl-list">
           <!-- 模板title -->
          <div class="tpl-title">
            <span>模板四</span>通用模板
          </div>

          <div class="tpl-item">
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
            <!-- 模板缩略图1 -->
            <div class="tpl-img">
              <a>进入编辑</a>
              <img src="./../../assets/images/resume/tpl-img.png" />
            </div>

          </div>

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
export default {
  components: {
    Header,
    Footer
  }
};
</script>
<style scoped>
.content .notice {
  margin-top: 150px;
  width: 100%;
  text-align: center;
  font-family: "Courier New", Courier, monospace;
  font-weight: normal;
}
.content .notice h4{
    color: #13D8a7;
}

.content .tpl-title {
    font-size: 14px;
    color: #666;
    margin: 40px 0 10px 0;
}
.content .tpl-title span{
    display: inline-block;
    margin-right: 10px;
    font-size: 25px;
    color: #000;
}

.tpl-list{
  padding: 0 35px;
}
.tpl-item {
  display: flex;
  /* justify-content: space-between; */
  flex-wrap: wrap;

}
.content .tpl-item .tpl-img{
    position: relative;
    width: 238px;
    height: 338px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    margin: 20px 10px;
}

.content .tpl-item .tpl-img a{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    z-index: 2;
}
.content .tpl-item .tpl-img img{
    width: 100%;
    height: 100%;
}
.content .tpl-item .tpl-img a:hover{
    opacity: 1;
    height: 36px;
    width: 150px;
    background: linear-gradient(90deg,#13d8a7 3%,#00c2ef);;
    text-align: center;
    line-height: 36px;
    color: #fff;
    border-radius: 20px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    /* transform: scale(.8); */
    /* transition: all .2s ease-out 0s; */
}
</style>