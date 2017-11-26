import Vue from 'vue'
import Router from 'vue-router'
import Categories from '@/components/Categories'
import Users from '@/components/Users'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/categories',
      name: 'categories',
      component: Categories
    },
      {
        path: '/',
        name: 'Users',
        component: Users
      }

  ]
})
