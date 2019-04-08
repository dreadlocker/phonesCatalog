import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  data() {
    return {
      phoneID: 2
    }
  },
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/store',
      name: 'store',
      component: () => import('./views/Store.vue') // lazyloading
    },
    {
      path: '/sortedByLikes',
      name: 'sortedByLikes',
      component: () => import('./views/SortedByLikes.vue')
    },
    {
      path: '/contactUs',
      name: 'contactUs',
      component: () => import('./views/ContactUs.vue')
    },
    {
      path: '/phone/:id',
      name: 'phone',
      component: () => import('./views/SinglePhone.vue')
    },
    {
      path: '/404',
      name: 'error',
      component: () => import('./views/WrongPath.vue')
    },
    {
      path: '*',
      name: 'toErrorPage',
      redirect: '/404'
    }
  ]
})

export default router;