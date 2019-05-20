<template>
  <div class="home">
    <b-container class="p-4">
      <!-- <b-row>
        <b-col>component usage:</b-col>
      </b-row>
      <b-row>
        <b-col>
          <hello-world msg="TEXT THAT IS REACTIVE TO SCREEN SIZE"/>
        </b-col>
      </b-row>
      <b-row>
        <b-col>stuff from content.json: {{ json.example }}</b-col>
      </b-row>-->
      <b-row>
        <b-col md="8" class="text-left">
          <b-row>
            <b-col cols="4" sm="2" md="2">
              <img class="img-fluid h-100 w-auto" src="../assets/logo.svg">
            </b-col>
            <b-col cols="8" sm="10" md="10" class="d-flex align-items-center">
              <img class="img-fluid h-100 w-auto" src="../assets/logo2.svg">
            </b-col>
          </b-row>
        </b-col>
        <b-col md="4">
          <div class="position-fixed" style="right: 5vw">FAB</div>
        </b-col>
      </b-row>

      <b-row>
        <b-col md="12" class="text-left">
          <h1>ANDY</h1>
        </b-col>
        <b-col md="12">
          <h1>hexagon</h1>
        </b-col>
        <b-col md="12" class="text-right">
          <h1>WANG</h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="text-left">ANDY</b-col>
        <b-col>HEXAGON</b-col>
        <b-col class="text-right">WANG</b-col>
      </b-row>
      <b-row>
        <b-col class="text-left">ANDY</b-col>
        <b-col>HEXAGON</b-col>
        <b-col class="text-right">WANG</b-col>
      </b-row>
      <b-row>
        <b-col class="text-left">ANDY</b-col>
        <b-col>HEXAGON</b-col>
        <b-col class="text-right">WANG</b-col>
      </b-row>
      <b-row>
        <b-col class="text-left">ANDY</b-col>
        <b-col>HEXAGON</b-col>
        <b-col class="text-right">WANG</b-col>
      </b-row>
      <b-row>
        <b-col class="text-left">ANDY</b-col>
        <b-col>HEXAGON</b-col>
        <b-col class="text-right">WANG</b-col>
      </b-row>
      <b-row>
        <b-col class="text-left">ANDY</b-col>
        <b-col>HEXAGON</b-col>
        <b-col class="text-right">WANG</b-col>
      </b-row>
      <b-row>
        <b-col class="text-left">ANDY</b-col>
        <b-col>HEXAGON</b-col>
        <b-col class="text-right">WANG</b-col>
      </b-row>
      <b-row>
        <b-col class="text-left">ANDY</b-col>
        <b-col>HEXAGON</b-col>
        <b-col class="text-right">WANG</b-col>
      </b-row>
      <b-row>
        <b-col class="text-left">ANDY</b-col>
        <b-col>HEXAGON</b-col>
        <b-col class="text-right">WANG</b-col>
      </b-row>
      <b-row>
        <b-col class="text-left">ANDY</b-col>
        <b-col>HEXAGON</b-col>
        <b-col class="text-right">WANG</b-col>
      </b-row>
      <b-row>
        <b-col class="text-left">ANDY</b-col>
        <b-col>HEXAGON</b-col>
        <b-col class="text-right">WANG</b-col>
      </b-row>
      <b-row>
        <b-col class="text-left">ANDY</b-col>
        <b-col>HEXAGON</b-col>
        <b-col class="text-right">WANG</b-col>
      </b-row>
      <b-row>
        <b-col class="text-left">ANDY</b-col>
        <b-col>HEXAGON</b-col>
        <b-col class="text-right">WANG</b-col>
      </b-row>
      <b-row>
        <b-col class="text-left">ANDY</b-col>
        <b-col>HEXAGON</b-col>
        <b-col class="text-right">WANG</b-col>
      </b-row>
      <b-row>
        <b-col class="text-left">ANDY</b-col>
        <b-col>HEXAGON</b-col>
        <b-col class="text-right">WANG</b-col>
      </b-row>
      <b-row>
        <b-col class="text-left">ANDY</b-col>
        <b-col>HEXAGON</b-col>
        <b-col class="text-right">WANG</b-col>
      </b-row>
      <b-row>
        <b-col class="text-left">ANDY</b-col>
        <b-col>HEXAGON</b-col>
        <b-col class="text-right">WANG</b-col>
      </b-row>
      <b-row>
        <b-col class="text-left">ANDY</b-col>
        <b-col>HEXAGON</b-col>
        <b-col class="text-right">WANG</b-col>
      </b-row>
      <b-row>
        <b-col class="text-left">ANDY</b-col>
        <b-col>HEXAGON</b-col>
        <b-col class="text-right">WANG</b-col>
      </b-row>
      <b-row>
        <b-col class="text-left">ANDY</b-col>
        <b-col>HEXAGON</b-col>
        <b-col class="text-right">WANG</b-col>
      </b-row>
      <b-row>
        <b-col class="text-left">ANDY</b-col>
        <b-col>HEXAGON</b-col>
        <b-col class="text-right">WANG</b-col>
      </b-row>
      <b-row>
        <b-col class="text-left">ANDY</b-col>
        <b-col>HEXAGON</b-col>
        <b-col class="text-right">WANG</b-col>
      </b-row>
      <b-row>
        <b-col class="text-left">ANDY</b-col>
        <b-col>HEXAGON</b-col>
        <b-col class="text-right">WANG</b-col>
      </b-row>
      <b-row>
        <b-col class="text-left">ANDY</b-col>
        <b-col>HEXAGON</b-col>
        <b-col class="text-right">WANG</b-col>
      </b-row>
      <b-row>
        <b-col class="text-left">ANDY</b-col>
        <b-col>HEXAGON</b-col>
        <b-col class="text-right">WANG</b-col>
      </b-row>
      <b-row>
        <b-col class="text-left">ANDY</b-col>
        <b-col>HEXAGON</b-col>
        <b-col class="text-right">WANG</b-col>
      </b-row>
      <b-row>
        <b-col class="text-left">ANDY</b-col>
        <b-col>HEXAGON</b-col>
        <b-col class="text-right">WANG</b-col>
      </b-row>
      <b-row>
        <b-col class="text-left">ANDY</b-col>
        <b-col>HEXAGON</b-col>
        <b-col class="text-right">WANG</b-col>
      </b-row>
      <b-row>
        <b-col class="text-left">ANDY</b-col>
        <b-col>HEXAGON</b-col>
        <b-col class="text-right">WANG</b-col>
      </b-row>
      <b-row>
        <b-col class="text-left">ANDY</b-col>
        <b-col>HEXAGON</b-col>
        <b-col class="text-right">WANG</b-col>
      </b-row>
      <b-row>
        <b-col class="text-left">ANDY</b-col>
        <b-col>HEXAGON</b-col>
        <b-col class="text-right">WANG</b-col>
      </b-row>
      <b-row>
        <b-col class="text-left">ANDY</b-col>
        <b-col>HEXAGON</b-col>
        <b-col class="text-right">WANG</b-col>
      </b-row>
      <b-row>
        <b-col class="text-left">ANDY</b-col>
        <b-col>HEXAGON</b-col>
        <b-col class="text-right">WANG</b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style lang="scss">
@import "../assets/main.scss";
@import "../assets/variables.scss";
.home {
  background-color: $background-highlight;
}
</style>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
var json = require("@/static/content.json");
// @ is an alias to /src

export default Vue.extend({
  name: "home",
  components: {
    HelloWorld
  },
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
