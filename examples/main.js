import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import {RZFormItem, RZSideBar, RZFormQueryBar} from "../packages/index";
Vue.config.productionTip = false;

Vue.use(RZSideBar);
Vue.use(RZFormItem);
Vue.use(RZFormQueryBar);

new Vue({
  render: h => h(App),
}).$mount('#app');
