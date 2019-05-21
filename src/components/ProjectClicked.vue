<template>
  <div class="project-clicked">{{project.name}}</div>
</template>

<style lang="scss">
@import "../assets/main.scss";
@import "../assets/variables.scss";
.project-clicked {
  background-color: $background;
  padding-top: 5%;
  padding-bottom: 5%;
  padding-left: 2%;
  padding-right: 2%;
}
</style>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "project-clicked",
  props: {
    project: {
      type: Object,
      required: true
    }
  }
});
</script>
