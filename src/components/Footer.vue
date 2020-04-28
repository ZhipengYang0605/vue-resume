<template>
    <div id="footer">
        <div class="container">
            <ul class="footer-wrap">
                <li><a href="#">首页</a></li>
                <li><a href="#">关于我们</a></li>
                <li><a href="#">常见问题</a></li>
                <li><a href="#">联系我们</a></li>
                <li><a href="#">服务协议</a></li>
                <li><a href="#">隐私申明</a></li>
            </ul>
            <p class="copyright">Copyright © 2020 深圳富士康科技集团</p>
            <p class="link">友情链接：xxx</p>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    #footer{
        font-size: 13px;
        color: #fff;
        background: #39394D;
        padding: 40px 0;
        text-align: center;
    }
    .footer-wrap{
        display: flex;
    }
    .footer-wrap li{
        flex: 1;
        list-style: none;
    }
    .footer-wrap li a{
        color: #fff;
        text-decoration: none;
    }
    #footer p{
        color: #ccc;
    }
    .copyright{
        margin-top: 40px;
    }
</style>