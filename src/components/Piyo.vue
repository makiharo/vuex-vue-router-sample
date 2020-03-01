<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
import store from "@/store";

export default {
  data() {
    return {
      message: this.$store.state.auth.message
    };
  },

  created() {
    console.log("------------ created");
  },

  // ------------------------------------
  // route侵入前の処理
  // ------------------------------------
  // beforeRouteEnterではthisが使えない
  // なのでthis.$store.dispatch("auth/fetch");が利用できない
  // 「import store from "@/store";」してstoreに直接アクセスする
  async beforeRouteEnter(to, from, next) {
    await store.dispatch("auth/fetch");
    console.log("------------ created 前に処理をかける");
    next();
  }
};
</script>
