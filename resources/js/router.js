import { createRouter, createWebHistory } from "vue-router";

import Home from './pages/home.vue';
import Test from './pages/Test.vue';
import Error404 from './pages/Error404.vue';

const router = createRouter({

    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/test',
            name: 'test',
            component: Test
        },
    ]
});

export { router };
