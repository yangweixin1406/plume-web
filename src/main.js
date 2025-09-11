import Vue from 'vue';
import App from './App';
import router from '@/router/index';
import store from './store';
import Element from 'element-ui';
import './styles/common.scss';
import Vconsole from 'vconsole';
import scroll from 'vue-seamless-scroll';

new Vconsole()

// 加载Vue拓展
Vue.use(router);
Vue.use(Element);
Vue.use(scroll);

Vue.config.productionTip = false;
// let vConsole = new Vconsole()
// Vue.use(vConsole)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');