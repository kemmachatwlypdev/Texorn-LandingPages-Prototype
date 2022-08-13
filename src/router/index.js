import Vue from 'vue'
import Router from 'vue-router'
import Blogs from '../components/Blog/BlogComponent.vue'
import Home from '../view/homeComponent.vue'

Vue.use(Router)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home 
    },
    {
        path: '/blogs',
        name: 'blogs',
        component: Blogs
    },
]

const router = new Router({
    mode: 'history', 
    routes, // short for `routes: routes`
  })

export default router