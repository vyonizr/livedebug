import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import UserGallery from './views/UserGallery'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/collection',
      name: 'collection',
      component: () => import('./views/Collection.vue')
    },
    {
      path: '/favorite',
      name: 'favorite',
      component: () => import('./views/Favorite.vue')
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: ':behanceId',
          name: 'User Gallery',
          component: UserGallery
        }
      ]
    }
  ]
})
