<template>
  <transition name="expand">
    <div class="nav-menu">
      <b-container>
        <b-row>
          <b-col>
            <b-row>
              <b-col @click="scrollToSection('home')">
                <div class="menu-item">home</div>
              </b-col>
            </b-row>
            <b-row>
              <b-col @click="scrollToSection('about')">
                <div class="menu-item">about</div>
              </b-col>
            </b-row>
            <b-row>
              <b-col @click="scrollToSection('projects')">
                <div class="menu-item">projects</div>
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
  text-align: left;
  display: flex;
  align-items: center;
  padding-top: 10%;
  padding-bottom: 10%;

  padding-left: 18%;
  padding-right: 18%;

  @media (max-width: $screen-sm) {
    padding-left: 14%;
    padding-right: 14%;
  }

  @media (max-width: $screen-xs) {
    padding-left: 10%;
    padding-right: 10%;
  }

  .menu-item {
    font-size: 100px !important;
    font-family: "Poiret One", sans-serif !important;
    letter-spacing: 24px;

    @media (max-width: $screen-sm) {
      font-size: 84px !important;
      letter-spacing: 20px;
    }

    @media (max-width: $screen-xs) {
      font-size: 64px !important;
      letter-spacing: 14px;
    }
  }
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
    // the section param must be one of the id's for the section that we want to scroll to
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
