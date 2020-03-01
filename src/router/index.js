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
  // metaでauth処理するかどうかを判断できる
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // some()メソッドは、
    // recordで、to.matchedの配列を各要素として扱う
    // routeの設定のmetaで「requiresAut: true」のように定義されていて
    // trueとなる要素があれば、trueを返す
    //
    // some()を利用する理由は、
    // 上位のパスにrequire sAuth: trueを指定されていれば
    // 全ての子ルートは認証確認の対象となる。
  }

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
