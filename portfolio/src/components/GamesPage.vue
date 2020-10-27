<template>
  <section id="artPage" class="heroWrapper">

      <h1>GAMES &amp; FUN</h1>
        
      <br>

      <section class="flexRow">
          <CardTemplate 
            title="Crickburrow Project"
            :description="[`Crickburrow is a narrative cipher game being beamed from another realm. Don't spend long in the stream friend, you'll lose yourself.`]"
            card-alt="A document discussing the Crickburrow foundation, appears to be a confidental outline."
            background="crickSplash"
            link="http://www.crickburrow.com/"
          />
          <CardTemplate 
            title="Moebius Dungeons"
            :description="[`A high fantasy hack and slash adventure where you attack monsters to gain coins, then spend your wealth on lavish equipment and enchantments.`]"
            card-alt="A ghostly sword set on a vibrant neon pink background."
            background="modunSplash"
            link="https://moebiusdungeons.com/"
          />
          <CardTemplate 
            title="D&amp;D Char/Item Generator"
            :description="[`A work in progress, creating a D&D inspired random item generator and random character generator with my friend David.`]"
            card-alt="Digitaly drawn cartoony drawing of a swordsman chopping off a goblins head while a mage woman kicks another in the face, and an elven archer shoots another with a bow."
            background="doaSplash"
          />
      </section>
  </section>
</template>

<script>
import CardTemplate from '@/components/CardTemplate.vue';

export default {
  name: 'GamesPage',
  components: {
    CardTemplate,
  },
  data() {
    return {
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
