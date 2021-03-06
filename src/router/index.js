import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/tabbar',
    name: 'tabbar',
    component: () => import('../test/Tabbar.vue'),
  },
  {
    path: '/navbar',
    name: 'navbar',
    component: () => import('../test/Navbar.vue'),
  },
  {
    path: '/van-register',
    name: 'van-register',
    component: () => import('../test/vantregiste.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue'),
  },
  {
    path: '/header',
    name: 'header',
    component: () => import('../test/Header.vue'),
  },
  {
    path: '/field',
    name: 'field',
    component: () => import('../test/Field.vue'),
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router