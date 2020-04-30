import Vue from "vue";
import VueRouter from "vue-router";

// 1.首页相关路由
import Home from './../views/home/Home.vue';
import Login from './../components/Login.vue';
import Register from './../components/Register.vue';
import PwdReset from './../components/PwdReset.vue';

// 2.个人中心相关路由
import User from './../views/user/User.vue';
import EditUserInfo from './../views/user/components/EditUserInfo.vue';
// 3.订单页面引入
import Order from './../views/order/Order.vue';
// 4.简历相关
import NoResume from "./../views/resume/NoResume.vue"
import AddResume from "./../views/resume/components/AddResume.vue"


Vue.use(VueRouter);

const routes = [
  // 首页相关路由
  {path: '/', name: 'Home', component: Home},
  {path: '/login', name: 'Login', component: Login},
  {path: '/register', name: 'Register', component: Register},
  {path: '/pwdreset', name: 'PwdReset', component: PwdReset},
  // 个人中心相关路由
  {
    path: '/user', 
    name: 'User', 
    component: User,
    children: [
      {path: 'edit', name: "EditUserInfo", component: EditUserInfo},
    ]
  },
  // 订单相关路由
  {path: '/order', name: 'Order', component: Order},
  // 简历相关
  {
    path: '/noresume', 
    name: 'NoResume', 
    component: NoResume,
    children: [
      {path: 'addresume', name: "AddResume", component: AddResume}
      // {path: '', name: "AddResume", component: AddResume}
    ]
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
