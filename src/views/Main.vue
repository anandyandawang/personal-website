<template>
  <div>
    <home></home>
    <about></about>
    <projects></projects>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Home from "./Home.vue";
import About from "./About.vue";
import Projects from "./Projects.vue";
export default Vue.extend({
  components: {
    Home,
    About,
    Projects,
  },
});
</script>
