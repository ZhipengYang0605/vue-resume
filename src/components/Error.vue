<template>
    <div id="e404">
        <!-- 头部 -->
        <Header />
        <!-- 404中间内容 -->
        <div class="error-content">
            <div class="container">
                <!-- <h4>您访问的页面不存在</h4> -->
                <div class="img_404">
                    <img src="./../assets/images/other/404.gif" alt="">
                </div>
            </div>
        </div>
        <!-- 脚部 -->
        <Footer />
    </div>
</template>
<script>
import Header from './header/Header'
import Footer from './Footer'
export default {
    components: {
        Header,
        Footer
    }
}
</script>
<style scoped>
    .error-content{
        margin: 100px 0 30px 0;
    }
    .container .img_404{
        /* background: red; */
        height: 482px;
        width: 100%;
    }
    .container .img_404 img{
        width: 100%;
        height: 100%;
    }
</style>