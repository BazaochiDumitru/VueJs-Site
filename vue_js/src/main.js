import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import router from './router/index';
import store from "@/store/store";
import CartOperations from "./CartOperations";

Vue.config.productionTip = false;
Vue.prototype.$cart = new CartOperations();
Vue.use(VueRouter);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
