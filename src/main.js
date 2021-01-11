import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 导入MintUI模块
import MintUI from "mint-ui";
// 导入样式文件
import "mint-ui/lib/style.min.css";
// 通过Vue.use()方法将MintUI注册为插件
Vue.use(MintUI);

// 导入swiper插件
import Swiper from "swiper";
import "swiper/swiper.min.css";
// Vue.use(Swiper);


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
