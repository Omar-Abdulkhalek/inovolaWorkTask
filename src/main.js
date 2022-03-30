import { createApp } from "vue";
import App from "./App.vue";
import { createStore } from "vuex";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { createRouter, createWebHistory } from "vue-router";
import axios from "axios";
import userComp from "./components/usre";
import albumComp from './components/albums'
import photoComp from './components/photos'

const routes = [
  {
    path: "/",
    redirect: "/users",
  },

  {
    path: "/users",
    component: userComp,
  },
  {
    path: "/albums/:userid",
    component: albumComp , children:[{path :':albumid/photos' , component : photoComp , name:"photos"}]
  },

  {
    path: "/:notFound(.*)",
    redirect: "/users",
  },
];

const router = createRouter({
  history: createWebHistory(),
  
  routes,
});

const store = createStore({
  state() {
    return {
      users: [],
    };
  },
  mutations: {
    
  },
  getters: {
      sendUsers(state){//method to send data to user component
        return state.users
      }
  },
  actions: {
    getAllUsers(context) { //method to get all users from api users
      
      return axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(function (response) {
       
            context.state.users = response
            
               
        });
    },

    
  },
});
const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
