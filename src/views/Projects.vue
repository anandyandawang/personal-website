<template>
  <div class="projects" id="projects">
    <b-container class="projects-container" fluid>
      <b-row>
        <nav-bar class="mb-4"></nav-bar>
      </b-row>
      <b-row class="projects-content">
        <b-col class="mb-4 text-left">
          <b-row class="mb-4">
            <b-col>
              <h2>PROJECTS</h2>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row>
        <b-col
          v-for="project in json"
          :key="project.name"
          md="6"
          class="mb-5 text-left project-pic-container"
        >
          <div v-b-modal="project.name">
            <div class="px-5">
              <img class="img-fluid project-pic" :src="project.imagePath" />
            </div>
            <div class="project-caption">
              <h3>{{ project.name }}</h3>
              <p>{{ project.type }}</p>
            </div>
          </div>

          <b-modal
            :id="project.name"
            size="lg"
            v-bind:hide-header="true"
            v-bind:hide-footer="true"
            body-class="p-0"
          >
            <project-clicked :project="project"></project-clicked>
          </b-modal>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style lang="scss">
@import "../assets/main.scss";
@import "../assets/variables.scss";
.projects {
  min-height: 100vh;
  background-color: $background;

  .projects-container {
    height: 100%;
    padding-top: 2%;
    padding-bottom: 2%;
    padding-left: 6%;
    padding-right: 6%;
  }

  .projects-content {
    padding-top: 2%;
    padding-bottom: 2%;
    padding-left: 8%;
    padding-right: 8%;
  }

  .project-pic-container {
    display: flex;
    justify-content: flex-end;
    align-items: start;
    flex-direction: column;
  }

  .project-pic {
    min-width: 200px;
    max-height: 300px;
    object-fit: contain;
    opacity: 0.5;
    transition: 0.2s;

    &:hover {
      opacity: 1;
      transform: scale(1.3);
    }
  }

  .project-caption {
    position: absolute;
    bottom: 0;
  }

  .modal-body {
    background: $background;
  }
}
</style>

<script lang="ts">
import Vue from "vue";
import ProjectClicked from "@/components/ProjectClicked.vue";
import NavBar from "@/components/NavBar.vue";
var json = require("@/static/content.json");
export default Vue.extend({
  name: "projects",
  components: {
    ProjectClicked,
    NavBar,
  },
  data() {
    return {
      json: {},
    };
  },
  mounted() {
    this.json = json;
    console.log(json);
  },
  methods: {
    hideModal(id: any) {
      this.$root.$emit("bv::hide::modal", id);
    },
  },
});
</script>
