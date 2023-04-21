import { createApp } from "vue";
import { createPinia } from "pinia";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

// Meta Konfigurasi untuk title
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  } else {
    document.title = "Pages Not Found";
  }
  next();
});

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
