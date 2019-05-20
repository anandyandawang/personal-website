<template>
  <div>
    <home></home>
    <about></about>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Home from "./Home.vue";
import About from "./About.vue";
export default Vue.extend({
  components: {
    Home,
    About
  }
});
</script>
