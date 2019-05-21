<template>
  <div class="projects">
    <b-container fluid>
      <b-row>
        <b-col class="mb-4 text-left">
          <b-row class="mb-4">
            <b-col>
              <h2>PROJECTS</h2>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row>
        <b-col v-for="project in json" :key="project.name" md="6" class="text-right img-tint">
          <img class="img-fluid project-card" :src="project.imagePath">
          {{project.name}}
          {{project.type}}
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style lang="scss">
@import "../assets/main.scss";
@import "../assets/variables.scss";
.projects {
  background-color: $background;
  padding-top: 18%;
  padding-bottom: 18%;
  padding-left: 7%;
  padding-right: 7%;
}

.project-card {
  min-width: 200px;
}
</style>

<script lang="ts">
import Vue from "vue";
var json = require("@/static/content.json");
export default Vue.extend({
  name: "projects",
  data() {
    return {
      json: {}
    };
  },
  mounted() {
    this.json = json;
    console.log(json);
  }
});
</script>

