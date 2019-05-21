<template>
  <div class="project-clicked">
    <b-container class="p-4" fluid>
      <b-row>
        <b-col class="mb-4 text-left">
          <b-row>
            <b-col>
              <h2>{{project.name}}</h2>
            </b-col>
          </b-row>
          <b-row class="mb-3">
            <b-col>
              <h3>{{project.type}}</h3>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <p>{{project.desc}}</p>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <p>Checkout the GitHub repo here: {{project.github}}</p>
            </b-col>
          </b-row>
        </b-col>
        <b-col class="text-right">
          <img class="img-fluid project-image" :src="project.imagePath">
        </b-col>
      </b-row>
    </b-container>
  </div>
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

  .project-image {
    min-width: 200px;
  }
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
