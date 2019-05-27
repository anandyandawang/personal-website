<template>
  <div class="about" id="about">
    <b-container fluid>
      <b-row>
        <b-col class="mb-4 text-left">
          <b-row class="mb-4">
            <b-col>
              <h2>ABOUT&nbsp;ME</h2>
            </b-col>
          </b-row>
          <b-row class="mb-3">
            <b-col>
              <h3>Developer.&nbsp;Wanderer.</h3>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <p>Hi there! I'm a second year student studying Computer Science at the University of Waterloo. I have a keen interest in bringing responsive web applications to life in the browser with HTML, CSS, and JavaScript.</p>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <p>On my spare time, I love to take long walks and jogs around my neighbourhood as well as on community trails. I am also just beginning to dip my feet into learning visual art.</p>
            </b-col>
          </b-row>
        </b-col>
        <b-col class="text-right">
          <img class="img-fluid portrait" src="../assets/portrait.jpg">
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style lang="scss">
@import "../assets/main.scss";
@import "../assets/variables.scss";
.about {
  background-color: $background;
  padding-top: 18%;
  padding-bottom: 18%;
  padding-left: 14%;
  padding-right: 14%;

  .portrait {
    opacity: 0.5;
    min-width: 200px;
  }
}
</style>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "about"
});
</script>

