import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 1.完整引入ElementUI
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

// 2.引入jQuery&Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery"; 
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/js/bootstrap.min.js";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
