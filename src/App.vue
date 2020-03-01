<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Hoge</router-link> |
      <router-link to="/piyo">Piyo</router-link>
    </div>
    <span v-show="is_loading() == true">loading...</span>
    <router-view v-show="is_loading() == false" />
  </div>
</template>

<script>
export default {
  methods: {
    is_loading: function() {
      console.log("-------------------- App.vue is_loading");
      console.log(this.$store.state.is_loading);
      return this.$store.state.is_loading;
    }
  },
};
</script>
