import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyLoad from "vue-lazyload";
import VueCookie from 'vue-cookie';
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'
// import env from './env'

Vue.use(ElementUI);

// const mock = true;
// if(mock){
//   require("./mock/api")
// }

//根据前端的跨域方式调整
axios.defaults.baseURL = '/api';
//根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL;

axios.defaults.timeout = 8000;

//接口错误拦截
axios.interceptors.response.use(function (response) {
  let res = response.data;
  let path = location.hash;
  if (res.status === 0) {
    return res.data
  } else if (res.status === 10) {
    if (path != '#/index') {
      window.location.href = '/#/login';
    }
    return Promise.reject();
  } else {
    alert(res.msg);
    return Promise.reject();
  }
})

Vue.use(VueCookie);
Vue.use(VueAxios, axios);
Vue.use(VueLazyLoad, {
  loading: "/imgs/loading-svg/loading-bars.svg"
});
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')