import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import './assets/styles/reset.css'
import './assets/styles/border.css'//1像素解决方法
import './assets/styles/iconfont/iconfont.css'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
import 'swiper/css/swiper.css'
import axios from 'axios'
import VueBetterSwiper from 'vue-better-swiper'

Vue.config.productionTip = false;
Vue.prototype.$ajax = axios; // 把对象挂载vue中
fastClick.attach(document.body);
Vue.use(VueAwesomeSwiper, /* { default options with global component } */);
Vue.use(VueBetterSwiper);

new Vue({
  el:"#app",
  router:router,
  store,
  render: h => h(App),
}).$mount('#app');
