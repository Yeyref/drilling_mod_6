import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/opiniones/:name',
    name: 'opiniones',
    component: () => import(/* webpackChunkName: "opiniones" */ '../views/OpinionsView.vue')
  },

  {
    path: '/admin/:name',
    name: 'admin',
    component: () => import(/* webpackChunkName: "admin" */ '../views/AdminView.vue'),

  },

  {
    path: '*',
    name: 'error',
    component: () => import(/* webpackChunkName: "error" */ '../views/ErrorView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
