<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Hoge</router-link> |
      <router-link to="/piyo">Piyo</router-link>
    </div>
    <span v-show="isLoading == true">loading...</span><br>
    <span v-show="isRouteWaiting == true">beforeEachの非同期処理を待ちます</span><br>
    <router-view v-show="isLoading == false" />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    // 1引数に名前空間を指定してやると、auth/isLoadingのstateを指定できる
    // component内でisLoadingがプロパティとして利用可能になる
    ...mapState("auth", ["isLoading", "isRouteWaiting"])
    // ------------------------------------
    // mapStateなしでの標準的な書き方は以下
    // ------------------------------------
    /*
    isLoading() {
      store/indexのstateは「this.$store.state.isloading」でアクセスできる
      store/authだとネストされて「this.$store.state.isloading」でアクセスできる
      return this.$store.state.auth.isloading
    }
    */
  },
  async created() {
    console.log("------------ App.vue created");
  }
};
</script>
