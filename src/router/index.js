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

router.beforeEach((to, from, next) => {
  store.commit("setIsLoading", true);
  next();
});

router.afterEach(() => {
  console.log("----- afterEach");
  store.commit("setIsLoading", false);
});

export default router;
