import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

/*引入下面兩行*/
import {
  Menu, Submenu,
  MenuItem,Button
} from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import utils from "@/utils/utils"
import http from "@/api"


Vue.config.productionTip = false;
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(Button)
Vue.use(utils)
Vue.use(http)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
