import { createApp } from "vue";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/scss/main.scss";
import router from "./router";
import App from "./App.vue";
import "normalize.css";

createApp(App).use(store).use(router).mount("#app");
