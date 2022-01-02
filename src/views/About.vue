<template>
  <div class="about" id="about">
    <b-container class="about-container" fluid>
      <b-row><nav-bar class="mb-4"></nav-bar></b-row>
      <b-row class="about-content">
        <b-col md="8" class="mb-4 text-left">
          <b-row>
            <b-col>
              <h2>ABOUT</h2>
            </b-col>
          </b-row>
          <b-row class="mb-3">
            <b-col>
              <h3>{{ json.about.subtitle }}</h3>
            </b-col>
          </b-row>
          <b-row v-for="paragraph in json.about.paragraphs" :key="paragraph">
            <b-col>
              <p>
                {{ paragraph.content }}
              </p>
            </b-col>
          </b-row>
          <b-row class="my-3">
            <b-col>
              <a
                href="https://linkedin.com/in/anandyandawang/"
                target="_blank"
                class="mr-3"
              >
                <img class="img-fluid" src="../assets/linkedin.svg" />
              </a>
              <a href="https://github.com/anandyandawang" target="_blank">
                <img class="img-fluid" src="../assets/github.svg" />
              </a>
            </b-col>
          </b-row>
        </b-col>
        <b-col md="4" class="text-right">
          <img class="img-fluid portrait" src="../assets/portrait.jpg" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style lang="scss">
@import "../assets/main.scss";
@import "../assets/variables.scss";
.about {
  min-height: 100vh;
  background-color: $background;

  .about-container {
    height: 100%;
    padding-top: 2%;
    padding-bottom: 2%;
    padding-left: 6%;
    padding-right: 6%;
  }

  .about-content {
    padding-top: 2%;
    padding-bottom: 2%;
    padding-left: 8%;
    padding-right: 8%;
  }

  .portrait {
    opacity: 0.8;
    min-width: 200px;
  }
}
</style>

<script lang="ts">
import Vue from "vue";
import NavBar from "../components/NavBar.vue";
var json = require("@/static/about.json");
export default Vue.extend({
  name: "about",
  components: {
    NavBar,
  },
  data() {
    return {
      json: {},
    };
  },
  mounted() {
    this.json = json;
  },
});
</script>
