import { createRouter, createWebHistory } from 'vue-router'
import Home from "../components/Home.vue"
import About from "../components/About.vue"



const routes = [
    {
        path: '/',
        name: 'Home',
        // meta: {layout: 'main'},
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // meta: {layout: 'main'},
        component: About
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
