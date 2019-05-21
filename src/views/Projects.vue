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
        <b-col v-for="project in json" :key="project.name" md="6" class="mb-5 text-left">
          <img class="px-5 img-fluid project-pic" :src="project.imagePath">
          <div class="project-caption">
            <h3>{{project.name}}</h3>
            <p>{{project.type}}</p>
          </div>
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

.project-pic {
  min-width: 200px;
}

.project-caption {
  position: absolute;
  bottom: 0;
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

