import { createRouter, createWebHistory } from 'vue-router';

import TheHome from './pages/TheHome.vue';
import GetStarted from './pages/GetStarted.vue';
import AboutUs from './pages/AboutUs.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: TheHome },
    { path: '/get-started', component: GetStarted },
    { path: '/about-us', component: AboutUs },
  ],
});

export default router;
