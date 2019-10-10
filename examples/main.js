import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import {RZFormItem, RZSideBar} from "../packages/index";
Vue.config.productionTip = false;

Vue.use(RZSideBar);
Vue.use(RZFormItem);

new Vue({
  render: h => h(App),
}).$mount('#app');
