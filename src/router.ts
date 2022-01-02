import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Projects from "./views/Projects.vue";

Vue.use(Router);

const DEFAULT_TITLE = 'Andy Wang';

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About,
      meta: {
        title: DEFAULT_TITLE + "- About"
      }
    },
    {
      path: "/projects",
      name: "projects",
      component: Projects,
      meta: {
        title: DEFAULT_TITLE + "- Projects"
      }
    }
  ]
});

router.afterEach((to, from) => {
    Vue.nextTick(() => {
        document.title = to.meta && to.meta.title || DEFAULT_TITLE;
    });
});

export default router;
