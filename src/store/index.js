import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const sleep = msec => new Promise(resolve => setTimeout(resolve, msec));

const store = new Vuex.Store({
  state: {
    message: "",
    is_loading: true
  },
  mutations: {
    setMessage(state, message) {
      state.message = message;
    },
    setIsLoading(state, setIsLoading) {
      console.log('setIsLoadingで状態変化');
      console.log(setIsLoading);
      state.is_loading = setIsLoading;
    }
  },
  actions: {
    async fetch() {
      await sleep(2000);
      store.commit("setMessage", "piyopiyo");
    }
  }
});

export default store;
