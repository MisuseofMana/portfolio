<template>
  <section id="AudioPage" class="heroWrapper">

      <h1>AUDIO &amp; ENTERTAINMENT</h1>
        
      <br>

      <section class="flexRow">
          <CardTemplate 
            title="This Is Nothing" 
            :description="[`Don't worry about this. It's nothing. It's nonsense.`, `It's uncategorizable.`]"
            card-alt='A textured image resembling dark blue fur, the words "This is Nothing" are seen above the fur.'
            background="nothingSplash"
            link="https://soundcloud.com/shibbone"
          />
          <CardTemplate 
            title="Welcome To Amara" 
            :description="[`A sword and sorcery high production dramatic retelling of a play by post Dungeon World campaign. It's a realm with carefully crafted lore to uncover, featuring a growing cast of diverse characters of fast friends, malignant baddies and beasts alike.`]"
            card-alt="Digitaly drawn cartoony drawing of a swordsman chopping off a goblins head while a mage woman kicks another in the face, and an elven archer shoots another with a bow."
            background="wtaSplash"
            link="https://www.welcometoamara.com/"
          />
      </section>
  </section>
</template>

<script>
import CardTemplate from '@/components/CardTemplate.vue';

export default {
  name: 'AudioPage',
  components: {
    CardTemplate,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
