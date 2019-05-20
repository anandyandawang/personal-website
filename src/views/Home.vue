<template>
  <div class="home">
    <b-container class="p-4" fluid>
      <b-row>
        <b-col md="8" class="mb-4 text-left">
          <b-row>
            <b-col cols="4" sm="2" md="2">
              <img class="img-fluid" src="../assets/logo.svg">
            </b-col>
            <b-col cols="8" sm="10" md="10" class="d-flex align-items-center">
              <img class="img-fluid" src="../assets/logo2.svg">
            </b-col>
          </b-row>
        </b-col>
        <b-col md="4" class="mb-4 d-flex align-items-center">
          <div class="position-fixed fab">
            <img class="img-fluid" src="../assets/fab.svg">
          </div>
        </b-col>
      </b-row>

      <b-row class="home-graphic">
        <b-col md="4" class="text-left">
          <img class="img-fluid" src="../assets/ANDY.svg">
        </b-col>
        <b-col md="4" class="my-5">
          <img class="img-fluid" src="../assets/hex.svg">
        </b-col>
        <b-col md="4" class="text-right wang-container">
          <img class="img-fluid" src="../assets/WANG.svg">
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style lang="scss">
@import "../assets/main.scss";
@import "../assets/variables.scss";
.home {
  min-height: 100vh;
  background-color: $background-highlight;
  padding-left: 6%;
  padding-right: 6%;
}
.home-graphic {
  margin-top: 10%;
  margin-bottom: 10%;
}
.fab {
  right: 6vw;
}
.wang-container {
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
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
