import { createRouter, createWebHistory } from 'vue-router'
import Todo  from '../views/Todo.vue'
import Weather from '@/components/Weather.vue'
import Dashboard from '../components/Dashboard.vue'
import Profile from '../components/Profile.vue'
import AddProject from '../views/AddProject.vue'
import EditProject from '../views/EditProject.vue'
const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/weather',
    name: 'weather',
    component: Weather
  },
   
  {
    path: '/todo',
    name: 'todo',
    component: Todo
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/add',
    name: 'AddProject',
    component: AddProject
  },
{
  path:'/todos/:id',
  name:'EditProject',
  component:EditProject,

  props:true

 
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
