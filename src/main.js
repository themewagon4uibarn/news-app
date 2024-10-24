import { createApp } from "vue";
import App from './App.vue';
import "bootstrap/dist/css/bootstrap.min.css";

import Router from './routes';


const vueApp = createApp(App);

vueApp.use(Router);
vueApp.mount("#app");