<template>
  <div class="nav-bar">
    <b-container>
      <b-row>
        <b-col cols="1">
          <b-row>
            <router-link to="/">
              <img class="img-fluid logo" src="../assets/logo.svg"
            /></router-link>
          </b-row>
        </b-col>
        <!-- <b-col cols="2" class="d-flex align-items-center">
          <div class="position-fixed fab" @click="toggleMenu()">
            <img class="img-fluid" v-if="!showMenu" src="../assets/fab.svg" />
            <img class="img-fluid" v-else src="../assets/fab-close.svg" />
          </div>
          <transition name="expand">
            <nav-menu
              v-if="showMenu == true"
              v-on:menu-item-clicked="toggleMenu()"
              @close-menu="closeMenu()"
            ></nav-menu>
          </transition>
        </b-col> -->
        <b-col
          cols="9"
          offset="2"
          sm="6"
          offset-sm="5"
          md="4"
          offset-md="7"
          lg="3"
          offset-lg="8"
          align-self="center"
        >
          <b-row>
            <b-col cols="4">
              <router-link to="/" class="nav-item">home</router-link>
            </b-col>
            <b-col cols="4">
              <router-link to="/about" class="nav-item">about</router-link>
            </b-col>
            <b-col cols="4">
              <router-link to="/projects" class="nav-item"
                >projects</router-link
              >
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style lang="scss">
@import "../assets/main.scss";
@import "../assets/variables.scss";
.nav-bar {
  width: 100%;
  height: 100%;

  .logo {
    height: 50px;
  }

  .fab {
    right: 6vw;
    z-index: 2;
    transition: 0.3s;

    &:hover {
      opacity: 0.65;
    }
  }

  .expand-enter,
  .expand-leave-to {
    transform: scale(0);
  }

  .expand-enter-active,
  .expand-leave-active {
    transition: transform 0.3s ease;
    transform-origin: top right;
  }

  .nav-item {
    font-size: 20px;
  }
}
</style>

<script lang="ts">
import Vue from "vue";
import NavMenu from "./NavMenu.vue";
export default Vue.extend({
  name: "nav-bar",
  components: {
    NavMenu,
  },
  data() {
    let showMenu = false;

    return {
      showMenu,
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
    },
    closeMenu() {
      this.showMenu = false;
      document.body.style.overflow = "hidden";
    },
  },
});
</script>
