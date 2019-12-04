import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/accueil.vue'
import questionnaire from './views/questionnaire.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    { 
      path: '/questionnaire',
      name: 'questionnaire',
      component: questionnaire
    }
  ]
})
