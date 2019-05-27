<template>
  <transition>
    <div class="nav-menu">
      <b-container>
        <b-row>
          <b-col>
            <b-row>home</b-row>
            <b-row>about</b-row>
            <b-row>projects</b-row>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </transition>
</template>

<style lang="scss">
@import "../assets/variables.scss";
.nav-menu {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1; // index of fab is higher than the menu, so that the button for toggling remains consistent
  width: 100vw;
  height: 100vh;
  background: rgba($background-highlight, 0.8);
}
</style>


<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "nav-menu"
});
</script>
