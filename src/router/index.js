import { createRouter, createWebHistory } from 'vue-router'

import * as Public from '@/views/public'
import * as Admin from '@/views/admin'

import Login from '@/views/admin/auth/Login.vue'
import Signup from '@/views/admin/auth/signup.vue'
import { authGuard } from '@/_helpers/auth-guard'


const routes = [

  {
    path: '/',
    name: 'public',
    component: Public.PublicLayout,
    children: [
      { path: '/', name: 'home', component: Public.HomeView },
      { path: '/about', name: 'about', component: Public.AboutView},
      { path: '/menu', name: 'menu', component: Public.Menu },
    ]
  },


  {
  path: '/admin',
    name: 'admin',
    component: Admin.adminLayout,

    // si requireAuth: true alors les éléments seront renvoyé vers un beforeEach plus bas
    children: [
      { path: 'dashboard', name: 'Dashboard', component: Admin.Dashboard, meta: {requireAuth: true }},
      { path: 'user/index', name: 'userIndex', component: Admin.userIndex, meta: {requireAuth: true } },
      { path: 'user/add', name: 'userAdd', component: Admin.userAdd, meta: {requireAuth: true } },
      { path: 'user/edit', name: 'userEdit', component: Admin.userEdit, meta: {requireAuth: true } },

      { path: 'content', name: 'homeEdit', component: Admin.homeEdit},


      // \d = expression régulière (que les chiffres)
      { path: 'user/edit/:id(\\d+)', name: 'userEdit', component: Admin.userEdit, props: true, meta: {requireAuth: true }},

      { path: 'products/index', name: 'productIndex', component: Admin.productIndex },
      { path: 'products/add', name: 'productAdd', component: Admin.productAdd },
      { path: 'products/edit/:id(\\d+)', name: 'productEdit', component: Admin.productEdit, props: true },
      { path: '/:patchMatch(.*)*', redirect: '/admin/dashboard'}
    ]
    },
    { path: '/signup', name: 'signup', component: Signup},
      { path: '/login', name: 'login', component: Login},

    
  // route introuvable, renvoit vers la page '/'
  {
    path: '/:patchMatch(.*)*', redirect: '/',
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


// Verouillage de la partie admin en faisant appel à authGuard
router.beforeEach((to, from, next) => {
  if(to.meta.requireAuth){
  authGuard()
  }
  next()
})


export default router
