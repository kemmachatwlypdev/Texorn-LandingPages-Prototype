import Vue from 'vue'
import Router from 'vue-router'
import Blogs from '../components/Blog/BlogComponent.vue'
import Home from '../view/homeComponent.vue'
import BlogsItem from '../components/Blog/BlogItem/BlogItem.vue'
import InputForms from '../components/DemoApp/InputForms/InputForms.vue'

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
        component: Blogs,
        // children: [
        //     {
        //         path: '/blogsitem',
        //         name: 'blogsitem',
        //         component: BlogsItem
        //     }
        // ]
    },
    {
        path: '/blogsitem/:id',
        name: 'blogsitem',
        component: BlogsItem,
    },
    {
        path: '/inputforms',
        name: 'inputforms',
        component: InputForms,
    }

]

const router = new Router({
    mode: 'history', 
    routes, // short for `routes: routes`
  })

export default router