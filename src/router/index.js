import Vue from 'vue'
import Router from 'vue-router'
import MainScreen from '@/components/MainScreen'
import DevScreen from '@/components/DevScreen'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainScreen',
      component: MainScreen
    },
    {
      path: '/dev',
      name: 'DevScreen',
      component: DevScreen
    }
  ]
})
