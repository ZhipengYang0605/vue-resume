<template>
    <div id="order">
        <Header />
        <div class="content">
            <div class="container">
                <!-- 会员类型 -->
                <div class="order-type">
                    <div class="title">
                        <span>请选择会员类型</span>
                    </div>
                    <div class="order-box">
                        <div class="order-item active">
                            <span>临时VIP</span>
                            <span>12.9 &nbsp; <i>元</i></span>
                            <router-link tag="span" to="/pay">立即开通</router-link>
                        </div>

                        <div class="order-item">
                            <span>临时VIP</span>
                            <span>12.9 &nbsp; <i>元</i></span>
                            <span>立即开通</span>
                        </div>

                        <div class="order-item">
                            <span>临时VIP</span>
                            <span>12.9 &nbsp; <i>元</i></span>
                            <span>立即开通</span>
                        </div>

                        <div class="order-item">
                            <span>临时VIP</span>
                            <span>12.9 &nbsp; <i>元</i></span>
                            <span>立即开通</span>
                        </div>
                    </div>
                </div>
                <!-- 支付方式 -->
                <div class="pay-type"></div>
            </div>
            
        </div>
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
}
</script>

<style scoped>
#order{
    background: #f0f3ef;
}
.content{
    padding: 100px 0 120px 0;
}
.order-type .title span{
    color: #858585;
    display: inline-block;
    padding-bottom: 10px;
}
.order-box{
    display: flex;
    width: 100%;
    justify-content: space-between;
}
.order-box .order-item{
    width: 23%;
    height: 186px;
    border: 1px solid #ccc;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}
.order-box .active{
    border: 1px solid #13d8a7;
}
.order-box .order-item:hover{
    border: 1px solid #13d8a7;
}
.order-box .order-item span{
    display: inline-block;
}
.order-box .order-item span:first-child{
    color: #333;
    font-size: 24px;
    font-weight: 700;
}
.order-box .order-item span:nth-child(2){
    font-size: 26px;
    color: #13d8a7;
}
.order-box .order-item span:nth-child(2) i{
    font-size: 17px;
    color: #333;
    font-style: normal;
}
.order-box .order-item span:nth-child(3){
    padding: 10px 20px;
    background: #13d8a7;
    color: #fff;
    font-size: 14px;
    border-radius: 20px;
    cursor: pointer;
}
</style>