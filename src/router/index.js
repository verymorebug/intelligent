import Vue from 'vue'
import VueRouter from 'vue-router'

const Home   = () => import("@/views/Home");
const Result = () => import("@/views/Result")

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/home',

  },
  {
    path: '/home',
    component:Home,
  },
  {
    path:'/result',
    component:Result,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
