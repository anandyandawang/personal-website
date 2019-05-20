<template>
  <div class="about">
    <b-container class="p-4" fluid>
      <b-row>
        <b-col>
          <b-row>
            <b-col>TITLE</b-col>
          </b-row>
          <b-row>
            <b-col>subtit</b-col>
          </b-row>
          <b-row>
            <b-col>p1</b-col>
          </b-row>
          <b-row>
            <b-col>p2</b-col>
          </b-row>
          <b-row>
            <b-col>p3</b-col>
          </b-row>
        </b-col>
        <b-col>IMAGE</b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style lang="scss">
@import "../assets/main.scss";
@import "../assets/variables.scss";
.about {
  background-color: $background;
  padding-left: 10%;
  padding-right: 10%;
}
</style>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "about"
});
</script>

