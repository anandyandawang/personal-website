<template>
  <div class="projects" id="projects">
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
        <b-col
          v-for="project in json"
          :key="project.name"
          md="6"
          class="mb-5 text-left project-pic-container"
        >
          <div v-b-modal="'project-modal' + project.name">
            <div class="px-5">
              <img class="img-fluid project-pic" :src="project.imagePath">
            </div>
            <div class="project-caption">
              <h3>{{project.name}}</h3>
              <p>{{project.type}}</p>
            </div>
          </div>

          <b-modal
            :id="'project-modal' + project.name"
            size="lg"
            hide-header="true"
            hide-footer="true"
          >
            <project-clicked :project="project"></project-clicked>
            <div class="px-5 mb-3">
              <b-button variant="primary" @click="hideModal('project-modal' + project.name)">Close</b-button>
            </div>
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
  background-color: $background;
  padding-top: 18%;
  padding-bottom: 18%;
  padding-left: 7%;
  padding-right: 7%;

  .project-pic-container {
    display: flex;
    justify-content: flex-end;
    align-items: start;
    flex-direction: column;
  }

  .project-pic {
    min-width: 300px;
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
var json = require("@/static/content.json");
export default Vue.extend({
  name: "projects",
  components: {
    ProjectClicked
  },
  data() {
    return {
      json: {}
    };
  },
  mounted() {
    this.json = json;
    console.log(json);
  },
  methods: {
    hideModal(id: any) {
      this.$root.$emit("bv::hide::modal", id);
    }
  }
});
</script>

