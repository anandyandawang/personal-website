<template>
  <div class="home" id="home">
    <b-container class="home-container" fluid>
      <b-row> <nav-bar class="mb-4"> </nav-bar> </b-row>
      <div class="home-graphic-container">
        <b-row class="home-graphic">
          <b-col md="4" align-self="start" class="text-left andy-container">
            <transition name="slide-right-fade" appear>
              <img class="img-fluid" src="../assets/ANDY.svg" />
            </transition>
          </b-col>
          <b-col md="4" align-self="center" class="my-4 hex">
            <transition name="rotate-fade" appear>
              <img class="img-fluid" src="../assets/hex.svg" />
            </transition>
          </b-col>
          <b-col md="4" align-self="end" class="text-right wang-container">
            <transition name="slide-left-fade" appear>
              <img class="img-fluid" src="../assets/WANG.svg" />
            </transition>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<style lang="scss">
@import "../assets/main.scss";
@import "../assets/variables.scss";
.home {
  height: 100vh;
  background-color: $background-highlight;

  .home-container {
    height: 100%;
    padding-top: 2%;
    padding-bottom: 2%;
    padding-left: 6%;
    padding-right: 6%;
    display: flex;
    flex-direction: column;
  }

  .home-graphic-container {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 0;
    min-height: 0;
  }

  .home-graphic {
    max-height: 100%;

    .andy-container {
      .slide-right-fade-enter {
        opacity: 0;
        transform: translateX(100px);
      }

      .slide-right-fade-enter-active {
        transition: all 1s ease;
      }

      img {
        max-height: 100px;
      }
    }

    .wang-container {
      .slide-left-fade-enter {
        opacity: 0;
        transform: translateX(-100px);
      }

      .slide-left-fade-enter-active {
        transition: all 1s ease;
      }

      img {
        max-height: 100px;
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

      img {
        max-height: 200px;
      }
    }
  }
}
</style>

<script lang="ts">
import Vue from "vue";
import NavBar from "../components/NavBar.vue";
export default Vue.extend({
  name: "home",
  components: {
    NavBar,
  },
});
</script>
