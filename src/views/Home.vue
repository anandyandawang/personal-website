<template>
  <div class="home" id="home">
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
          <div class="position-fixed fab" @click="toggleMenu()">
            <img class="img-fluid" v-if="!showMenu" src="../assets/fab.svg">
            <img class="img-fluid" v-else src="../assets/fab-close.svg">
          </div>
          <!-- this is Menu.vue. overlays a full-screen nav menu that is fixed positioned -->
          <nav-menu v-if="showMenu == true" v-on:menu-item-clicked="toggleMenu()"></nav-menu>
        </b-col>
      </b-row>

      <b-row class="home-graphic">
        <b-col md="4" class="text-left andy-container">
          <transition name="slide-right-fade" appear>
            <img class="img-fluid" src="../assets/ANDY.svg">
          </transition>
        </b-col>
        <b-col md="4" class="my-5 hex">
          <transition name="rotate-fade" appear>
            <img class="img-fluid" src="../assets/hex.svg">
          </transition>
        </b-col>
        <b-col md="4" class="text-right wang-container">
          <transition name="slide-left-fade" appear>
            <img class="img-fluid" src="../assets/WANG.svg">
          </transition>
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

  .home-graphic {
    margin-top: 10%;
    margin-bottom: 10%;
  }

  .fab {
    right: 6vw;
    z-index: 2;
  }

  .andy-container {
    .slide-right-fade-enter {
      opacity: 0;
      transform: translateX(100px);
    }

    .slide-right-fade-enter-active {
      transition: all 1s ease;
    }
  }

  .wang-container {
    display: flex;
    justify-content: flex-end;
    flex-direction: column;

    .slide-left-fade-enter {
      opacity: 0;
      transform: translateX(-100px);
    }

    .slide-left-fade-enter-active {
      transition: all 1s ease;
    }
  }

  .hex {
    .rotate-fade-enter {
      opacity: 0;
      transform: rotate(360deg);
    }

    .rotate-fade-enter-active {
      transition: all 1s ease;
    }
  }
}
</style>

<script lang="ts">
import Vue from "vue";
import NavMenu from "@/components/NavMenu.vue";

export default Vue.extend({
  name: "home",
  components: {
    NavMenu
  },
  data() {
    let showMenu = false;

    return {
      showMenu
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
      // also toggle the overflow attribute of the body
      // this makes sure that when the menu is open, the background can't be scrolled
      let bodyOverflowAttr = getComputedStyle(document.body, null).overflow;
      if (bodyOverflowAttr != "hidden") {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "visible";
      }
    }
  }
});
</script>
