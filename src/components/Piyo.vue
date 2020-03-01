<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
import store from "../store/index"

export default {
  data () {
    return {
      message: this.$store.state.message
    }
  },

  created() {
      console.log('------------ created');
  },

  async beforeRouteEnter(to, from, next) {
    await store.dispatch("fetch");
    console.log("------------ created 前だよー");
    next();
  }
}
</script>