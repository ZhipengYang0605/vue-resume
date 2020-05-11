<template>
  <div id="user">
      <router-view></router-view>
    <!-- 1.头部 -->
    <Header />
    <!-- 2.个人信息盒子 -->
    <div class="info-box">
        <div class="container">
            <!-- 左部分 -->
            <div class="info-l">
                <div class="left-wrap">
                    <ul class="left">
                        <li class="left-item"><a class="active" href="#">我的简历</a></li>
                        <li class="left-item"><a href="#">我的订单</a></li>
                    </ul>
                </div>
            </div>
            <!-- 右部分 -->
            <div class="info-r">
                <div class="user-info">
                    <div class="user-title">
                        会员信息
                    </div>
                    <div class="more-info">
                        <div class="more-l">
                            <img src="./../../assets/images/header/huge.jpg" alt="">
                        </div>
                        <div class="more-r">
                            <div class="info-top">
                                <span>loading</span>
                            </div>
                            <div class="info-bottom">
                                <span>普通用户</span>
                                <span>升级VIP</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="my-resume">
                    <div class="resume-cloud">
                        我的云简历
                    </div>
                    <div class="resume-bottom">
                        <span>您还没有创建简历！</span>
                        <span>立即创建</span>
                    </div>
                </div>
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
#user{
    background: #f0f3ef;
}
.info-box{
    padding: 100px 0 50px 0;
}
.info-box .container{
    display: flex;
}
.info-box .container .info-r{
    /* background: #fff; */
    flex: 10;
}
/* 左部分样式 */
.info-box .container .info-l{
    flex: 2;
    margin-right: 20px;
    height: 460px;
    background: #fff;
}
.info-box .left{
    padding-left: 0;
}
.info-box .left .left-item{
    width: 80%;
    margin: 30px auto;
    text-align: center;
}
.info-box .left li{
    list-style: none;
}
.info-box .left li a{
    text-decoration: none;
    font-size: 16px;
    color: #333;
}
.left-wrap{
    padding-top: 20px;
}

.info-box .left li .active{
    color: #409eff;
    font-weight: 700;
}
/* 右部分样式 */
.user-info{
    background: #fff;
    padding-bottom: 20px;
}
.user-title,
.resume-cloud{
    width: 100%;
    height: 51px;
    border-bottom: 1px solid #f0f3ef;
    padding-left: 20px;
    line-height: 51px;
    color: #333;
    font-size: 16px;
}
.more-info{
    width: 100%;
    padding: 20px 0 0 20px;
    color: #333;
    font-size: 16px;
    display: flex;
}
.more-l{
    height: 80px;
    width: 80px;
    border: 2px solid #fff;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.3);
    margin-right: 20px;
}
.more-l img{
    width: 120%;
}
.more-r{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.info-top{
    font-size: 22px;
    color: #333;
    font-weight: 700;
}
.info-bottom span:first-child{
    color: #666;
    color: 16px;
    display: inline-block;
    margin-right: 15px;
}
.info-bottom span:last-child{
    font-size: 12px;
    display: inline-block;
    padding: 0 15px;
    background-image: linear-gradient(270deg,#009efd,#1bbc9d);
    border-radius: 10px;
    color: #fff;
    cursor: pointer;
}

.my-resume{
    margin-top: 20px;
    background: #fff;
}
.resume-bottom{
    padding: 100px 0;
    text-align: center;
}
.resume-bottom span:first-child{
    font-size: 14px;
    color: #666;
}
.resume-bottom span:last-child{
    color: #fff;
    display: inline-block;
    padding: 10px 20px;
    background: #13d8a7;
    cursor: pointer;
    font-size: 14px;
    border-radius: 5px;
}

</style>