<template>
  <div id="app">
    <NavBar class="ifMobile"/>
    <DesktopNavBar class="ifDesktop"/>

      <transition name="slide" mode="out-in">
        <router-view :key="$route.fullPath"></router-view>
      </transition>

    <LandingPage v-if="false"/>
    <ResumePage v-if="false"/>
  </div>
</template>

<script>
import '@/assets/styles/style.css'
import '@/assets/styles/transitions.css'

import NavBar from '@/components/NavBar.vue'
import DesktopNavBar from '@/components/DesktopNavBar.vue'

import LandingPage from '@/components/LandingPage.vue'
import ResumePage from '@/components/ResumePage.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    DesktopNavBar,
    LandingPage,
    ResumePage,
  },
  data() {
    return {
      title: "Home",
    }
  },
}
</script>

<style>
#app {
  min-height:100vh;
}


p {
  text-align:left;
}

/* Mobile Port */
@media (min-width: 667px) {

}

/* Tablets and Up */
@media (min-width: 768px) {

}
</style>
