<template>
  <section id="artPage" class="heroWrapper">

      <h1>ART, COMICS &amp; BOOKS</h1>
        
      <br>

      <section class="flexRow">
          <CardTemplate 
            title="Misuse of Mana" 
            :description="['An ancient webcomic from long ago, discontinued for now, but boasts a world full of magic, friendship, and world threatening forces.']"
            card-alt="Digitally drawn cartoon style drawing of a swordsman chopping off a goblins head while a mage woman kicks another in the face, and an elven archer shoots another with a bow."
            background="mofmSplash"
            link="https://tapas.io/episode/793285"
          />
          <CardTemplate 
            title="Psychic Psychic Cowboy" 
            :description="['A tale about a double psychic cowboy.', 'Coming Soon']"
            card-alt="A desert scene depicting the rising sun, which is distorted and giving off rainbow colors."
            background="ppcSplash"
          />
          <CardTemplate 
            title="Dungeons Of Amara" 
            :description="['Through the eyes of an Amaran bard comes this tome of poetry and illustrations depicting the baddies, merchants, and adventurers found in dark dungeons, deep caves, and bustling towns.']"
            card-alt="Digitaly drawn cartoony drawing of a swordsman chopping off a goblins head while a mage woman kicks another in the face, and an elven archer shoots another with a bow."
            background="doaSplash"
            link="https://gum.co/CsdPh"
          />
          <CardTemplate 
            title="Ire" 
            :description="['A short comic illustrating a poem about overcoming ones own inner conflict.']"
            card-alt="Digitaly drawn cartoony drawing of a swordsman chopping off a goblins head while a mage woman kicks another in the face, and an elven archer shoots another with a bow."
            background="ireSplash"
            link="https://gum.co/gXbKmf"
          />
      </section>
  </section>
</template>

<script>
import CardTemplate from '@/components/CardTemplate.vue';

export default {
  name: 'ArtPage',
  components: {
    CardTemplate,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
