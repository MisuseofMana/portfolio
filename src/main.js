import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import Toasted from 'vue-toasted';

import Links from './plugins/links.js'





Vue.use(Toasted);
Vue.use(VueRouter);

import Home from './components/HomePage.vue'
import About from './components/AboutPage.vue'
import Project from './components/ProjectTemplate.vue'
import Resume from './components/ResumePage.vue'
import NotFoundComponent from './components/NotFoundComponent.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/comics', component: Project, props: { content:Links.comics} },
  { path: '/books', component: Project, props: { content:Links.books} },
  { path: '/coding', component: Project, props: { content:Links.coding} },
  { path: '/podcasts', component: Project, props: { content:Links.podcasts} },
  { path: '/games', component: Project, props: { content:Links.games} },
  { path: '/photography', component: Project, props: { content:Links.photography} },
  { path: '/resume', component: Resume },
  { path: '*', component: NotFoundComponent }
]

const router = new VueRouter({
  // mode: 'history',
  routes // short for `routes: routes`
})

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
