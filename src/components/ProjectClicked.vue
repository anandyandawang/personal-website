<template>
  <div>{{project.name}}</div>
</template>

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
