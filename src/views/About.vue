<template>
  <div class="about">
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
              <h3>I'm&nbsp;a&nbsp;developer.</h3>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <p>paragraph goes here. paragraph goes here. paragraph goes here. paragraph goes here. paragraph goes here. paragraph goes here. paragraph goes here. paragraph goes here.</p>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <p>paragraph goes here. paragraph goes here. paragraph goes here. paragraph goes here. paragraph goes here.</p>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <p>paragraph goes here. paragraph goes here. paragraph goes here. paragraph goes here.</p>
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

