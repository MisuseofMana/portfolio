import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Icon from 'vue-awesome/components/Icon'
import Toasted from 'vue-toasted';

import 'vue-awesome/icons/keyboard'
import 'vue-awesome/icons/file-code'
import 'vue-awesome/icons/laptop-code'
import 'vue-awesome/icons/filter'
import 'vue-awesome/icons/cubes'
import 'vue-awesome/icons/code-branch'
import 'vue-awesome/icons/fire-alt'
import 'vue-awesome/icons/database'
import 'vue-awesome/icons/camera'
import 'vue-awesome/icons/bezier-curve'
import 'vue-awesome/icons/edit'
import 'vue-awesome/icons/film'
import 'vue-awesome/icons/microphone'
import 'vue-awesome/icons/code'
import 'vue-awesome/icons/people-carry'
import 'vue-awesome/icons/hamburger'
import 'vue-awesome/icons/arrow-circle-left'
import 'vue-awesome/icons/arrow-circle-right'
import 'vue-awesome/icons/link'

Vue.component('v-icon', Icon);

Vue.use(Toasted);
Vue.use(VueRouter);

import Home from './components/HomePage.vue'
import About from './components/AboutPage.vue'
import Comics from './components/ComicsPage.vue'
import Books from './components/BooksPage.vue'
import Coding from './components/CodingPage.vue'
import Podcasts from './components/PodcastsPage.vue'
import Games from './components/GamesPage.vue'
import Photos from './components/PhotosPage.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/comics', component: Comics },
  { path: '/books', component: Books },
  { path: '/coding', component: Coding },
  { path: '/podcasts', component: Podcasts },
  { path: '/games', component: Games },
  { path: '/photography', component: Photos },

]

const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
