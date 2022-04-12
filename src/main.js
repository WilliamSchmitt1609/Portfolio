import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Projects from "./components/Projects.vue";



const app = createApp(App);


app.component("ProjectsList", Projects);
app.use(router);
app.mount("#app");
