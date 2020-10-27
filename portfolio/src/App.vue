<template>
  <div id="app">
    <LandingPage/>
    <ArtPage v-if="true"/>
    <AudioPage v-if="true"/>
    <GamesPage v-if="true"/>
    <WebDevPage v-if="true"/>
    <ResumePage v-if="true"/>
  </div>
</template>

<script>
import '@/assets/styles/style.css'

import LandingPage from '@/components/LandingPage.vue'
import ArtPage from '@/components/ArtPage.vue'
import AudioPage from '@/components/AudioPage.vue'
import GamesPage from '@/components/GamesPage.vue'
import WebDevPage from '@/components/WebDevPage.vue'
import ResumePage from '@/components/ResumePage.vue'

export default {
  name: 'App',
  components: {
    LandingPage,
    ArtPage,
    AudioPage,
    GamesPage,
    WebDevPage,
    ResumePage,
  }
}
</script>

<style>
</style>
