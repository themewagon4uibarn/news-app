import { createRouter,createWebHistory, createWebHashHistory } from "vue-router";
import PageViewer from "./components/PageViewer.vue";
import CreatePage from "./components/CreatePage.vue";


const appRouter = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/:index?', component: PageViewer},
        {path: '/create', component: CreatePage}
    ]
});

export default appRouter;