import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";

Vue.config.productionTip = false;

const createApp = async () => {
  // async functionとしているので
  // ここに初期化用の非同期のAPIを仕込むことが可能
  // await store.dispatch('auth/currentUser')

  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount("#app");
};

createApp();
