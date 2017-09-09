

require("./vendor");

require('../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss')

import Vue from 'vue'
import router from "./router/router";
import {store} from "./store/modules";
import MyPlugins from "./plugins/plugins";

import App from './App'

Vue.config.productionTip = false
Vue.use(MyPlugins);


/* eslint-disable no-new */
new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app")
