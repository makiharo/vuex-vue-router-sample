const sleep = msec => new Promise(resolve => setTimeout(resolve, msec));

const vuexModules = {
  namespaced: true,
  state: {
    message: "",
    isLoading: true
  },
  mutations: {
    setMessage(state, message) {
      state.message = message;
    },
    setIsLoading(state, setIsLoading) {
      console.log("setIsLoadingで状態変化");
      console.log(setIsLoading);
      state.isLoading = setIsLoading;
    }
  },
  actions: {
    async fetch({ commit }) {
      await sleep(2000);
      commit("setMessage", "piyopiyo");
    }
  }
};

export default vuexModules;
