<template>
  <div id="app">
    <NavBar/>

    <div id="background">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>

    <LandingPage v-if="false"/>
    <ResumePage v-if="false"/>
  </div>
</template>

<script>
import '@/assets/styles/style.css'
import '@/assets/styles/transitions.css'

import NavBar from '@/components/NavBar.vue'
import LandingPage from '@/components/LandingPage.vue'
import ResumePage from '@/components/ResumePage.vue'

export default {
  name: 'App',
  components: {
    NavBar,
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
#background {
  width:100vw;
  min-height:calc(100vh - 46px);
  background-image: url('../src/assets/imgs/portfolio-stack-mobile.png');
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  padding:1px 0 1px 0;
}

/* Mobile Port */
@media (min-width: 667px) {

}

/* Tablets and Up */
@media (min-width: 768px) {

}
</style>
