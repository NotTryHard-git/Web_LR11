import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Services from '../components/Services.vue'


const routes = [
  {
    path: '/', component: Home
  },
  {
    path: '/about', component: About
  },
  {
    path: '/services', component: Services
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router