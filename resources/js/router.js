import { createRouter, createWebHistory } from "vue-router";

import Home from './pages/home.vue';
import Projects from './pages/projects.vue';
import Error404 from './pages/Error404.vue';
import projectShow from './pages/projectShow.vue';

const router = createRouter({

    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/projects',
            name: 'projects',
            component: Projects
        },
        {
            path:'/projects/:slug',
            name:'show',
            component: projectShow
        },
        {
            path: '/:pathMatch(.*)*',
            component: Error404
        }
    ]
});

export { router };
