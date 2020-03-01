import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/index";
import Hoge from "../components/Hoge";
import Piyo from "../components/Piyo";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "hoge",
    component: Hoge,
    meta: { requiresAut: true }
  },
  {
    path: "/piyo",
    name: "piyo",
    component: Piyo
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// ここでthis.$storeは使えないので
// import store from "../store/index";をして
// vuexのstoreを利用する
// ここをayncすること共通処理は噛ますことができる
router.beforeEach(async (to, from, next) => {
  // 非同期処理の開始のお知らせ
  store.commit("auth/setRouteWaiting", true);
  // 非同期処理
  await store.dispatch("auth/fetch");
  // 非同期処理終了のお知らせ
  store.commit("auth/setRouteWaiting", false);

  // piyoのbeforeRouteEnter用の非同期処理中フラグ
  store.commit("auth/setIsLoading", true);
  next();
});

router.afterEach(() => {
  console.log("----- afterEach");
  store.commit("auth/setIsLoading", false);
});

export default router;
