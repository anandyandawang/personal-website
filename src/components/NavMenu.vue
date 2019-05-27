<template>
  <transition name="expand">
    <div class="nav-menu">
      <b-container>
        <b-row>
          <b-col>
            <b-row>
              <b-col @click="scrollToSection('home')">
                <h2>home</h2>
              </b-col>
            </b-row>
            <b-row>
              <b-col @click="scrollToSection('about')">
                <h2>about</h2>
              </b-col>
            </b-row>
            <b-row>
              <b-col @click="scrollToSection('projects')">
                <h2>projects</h2>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </transition>
</template>

<style lang="scss">
@import "../assets/main.scss";
@import "../assets/variables.scss";
.nav-menu {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1; // index of fab is higher than the menu, so that the button for toggling remains consistent
  width: 100vw;
  height: 100vh;
  background: rgba($background-highlight, 1);
}

.expand-enter,
.expand-leave-to {
  transform: scale(0);
}

.expand-enter-active {
  transition: transform 0.3s ease;
  transform-origin: top right;
}

.expand-leave-active {
  transition: transform 0.3s ease;
  transform-origin: top right;
}
</style>


<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "nav-menu",
  methods: {
    scrollToSection(section: string) {
      let sectionElement = document.getElementById(section);
      if (sectionElement != null) {
        let sectionElementPos = sectionElement.offsetTop;
        window.scrollTo(0, sectionElementPos);
      } else {
        console.log(
          "The element associated with the menu item is null / could not be found."
        );
      }
      this.$emit("menu-item-clicked"); // emit event to tell the home vue to close the menu
    }
  }
});
</script>
