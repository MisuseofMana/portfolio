<template>
  <div id="app">
    <NavBar/>
    <HomePage/>

    <LandingPage v-if="false"/>
    <ResumePage v-if="false"/>
  </div>
</template>

<script>
import '@/assets/styles/style.css'



import NavBar from '@/components/NavBar.vue'
import HomePage from '@/components/HomePage.vue'
import LandingPage from '@/components/LandingPage.vue'
import ResumePage from '@/components/ResumePage.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    HomePage,
    LandingPage,
    ResumePage,
  }
}
</script>

<style>

#app {
    background-image: url('../src/assets/imgs/portfolio-stack.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height:100vh;
}

/* Mobile Port */
@media (min-width: 667px) {

}

/* Tablets and Up */
@media (min-width: 768px) {

}
</style>
