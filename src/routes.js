import AddTask from "./components/AddTask.vue";
import ShowTask from "./components/ShowTask.vue";
import {createRouter, createWebHistory} from 'vue-router';
import Navigation from "./components/Navigation.vue";
import UpdateTask from "./components/UpdateTask.vue";

const routes = [
    {
        name:'Navigation',
        component:Navigation,
        path:'/'
    },
    {
        name:'AddTask',
        component:AddTask,
        path:'/add-task'
    },
    {
        name:'ShowTask',
        component:ShowTask,
        path:'/show-task'
    },
    {
        name:'UpdateTask',
        component:UpdateTask,
        path:'/update-task/:id'
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes,
})
export default router