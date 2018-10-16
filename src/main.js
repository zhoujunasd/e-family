import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import $axios from './axios';
Vue.prototype.$axios = $axios;

Vue.config.productionTip = false;

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(Mint);

// import { Message } from './components/message/main.js'
// Vue.prototype.$message = Message;

Vue.use(VueAwesomeSwiper, /* { default global options } */)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
