import Vue from 'vue'
import Router from 'vue-router'
import Arena from '@/components/Arena'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Arena',
      component: Arena
    }
  ]
})
