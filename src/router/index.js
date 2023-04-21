import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Movie from "../views/Movie.vue";
import MovieDetail from "../views/MovieDetail.vue";
import NotFoundView from "../views/NotFoundView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        title: "Home Page",
      },
    },
    {
      path: "/movie",
      name: "movie",
      component: Movie,
      meta: {
        title: "Movie",
      },
    },
    {
      path: "/moviedetai/:id",
      name: "moviedetail",
      component: MovieDetail,
      props: true,
      meta: {
        title: "Detail Movie",
      },
    },
    {
      path: "/:catchAll(.*)", // Rute untuk menangani permintaan yang tidak ditemukan
      name: "NotFoundView",
      component: NotFoundView,
    },
  ],
});

export default router;
