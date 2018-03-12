import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import addUser from '@/components/addUser'
import viewUser from '@/components/viewUser'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Hello
    },
    {
      path: '/add-user',
      component: addUser
    },
    {
      path: '/view-user',
      component: viewUser
    }

  ]
})
