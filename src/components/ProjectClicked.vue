<template>
  <div class="project-clicked">
    <b-container class="p-4" fluid>
      <b-row>
        <b-col lg="7" class="mb-4 text-left">
          <b-row>
            <b-col>
              <h2>{{ project.name }}</h2>
            </b-col>
          </b-row>
          <b-row class="mb-3">
            <b-col>
              <h3>{{ project.type }}</h3>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <p v-for="desc in project.desc" v-bind:key="desc">
                {{ desc }}
              </p>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <a
                v-if="project.github != null"
                :href="project.github"
                target="_blank"
                class="mr-3"
              >
                <img class="img-fluid" src="../assets/github.svg" />
              </a>
              <a
                v-if="project.gplay != null"
                :href="project.gplay"
                target="_blank"
              >
                <img class="img-fluid" src="../assets/google-play.svg" />
              </a>
            </b-col>
          </b-row>
        </b-col>
        <b-col lg="5" class="text-right">
          <a :href="project.imagePath" target="_blank">
            <img class="img-fluid project-image" :src="project.imagePath" />
          </a>
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
      required: true,
    },
  },
});
</script>
