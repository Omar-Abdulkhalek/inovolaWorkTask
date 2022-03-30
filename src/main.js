import { createApp } from "vue";
import App from "./App.vue";
import { createStore } from "vuex";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { createRouter, createWebHistory } from "vue-router";
import Actions from "./actions";
import Routing from "./routing.js";

const routes = Routing;

const router = createRouter({
  history: createWebHistory(),

  routes,
});

const store = createStore({
  state() {
    return {};
  },
  mutations: {},
  getters: {},

  actions: Actions,
});
const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
