import userComponent from "./components/usre";
import albumComponent from "./components/albums";
import photoComponent from "./components/photos";

export default [
  {
    path: "/",
    redirect: "/users",
  },

  {
    path: "/users",
    component: userComponent,
  },
  {
    path: "/albums/:userid",
    component: albumComponent,
    children: [
      { path: ":albumid/photos", component: photoComponent, name: "photos" },
    ],
  },

  {
    path: "/:notFound(.*)",
    redirect: "/users",
  },
];
