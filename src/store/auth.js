const sleep = msec => new Promise(resolve => setTimeout(resolve, msec));

const vuexModules = {
  namespaced: true,
  state: {
    message: "",
    isLoading: true,
    isRouteWaiting: true
  },
  mutations: {
    setMessage(state, message) {
      state.message = message;
    },
    setIsLoading(state, isLoading) {
      console.log("setIsLoadingで状態変化");
      console.log(isLoading);
      state.isLoading = isLoading;
    },
    setRouteWaiting(state, isRouteWaiting) {
      state.isRouteWaiting = isRouteWaiting;
    },
  },
  actions: {
    async fetch({ commit }) {
      await sleep(2000);
      commit("setMessage", "piyopiyo");
    }
  }
};

export default vuexModules;
