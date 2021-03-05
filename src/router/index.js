import Vue from 'vue'
import VueRouter from 'vue-router'
import * as pages from '../pages'

Vue.use(VueRouter)

export default ({ store }) => {
  const router = new VueRouter({
    mode: 'history',
    routes: []
  })

  router.addRoutes([
    {
      path: '/',
      name: 'WelcomePage',
      component: pages.WelcomePage
    },
    {
      path: '/movie/:id',
      name: 'MoviePage',
      component: pages.MoviePage
    }
  ])
  return router
}
