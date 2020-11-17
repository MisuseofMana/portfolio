<template>
    <section class="hero">
      <h1>Hey There!</h1>
      <p>Nice to meet you! I'm Sean Yager, a web developer, a comics artist, a 3d modeler, a poet, a storyteller, but mostly I'm a certified, well versed, certified techology nerd.</p>
      <p>Feel free to stay a while and browse my myriad of projects below.</p>
    
      <hr>

      <section class="carousel">
        
        <CardTemplate
          :links="links"
        />
        
      </section>
    </section>
</template>

<script>
    import CardTemplate from '@/components/CardTemplate.vue'
    
    export default {
      data() {
      return {
        links:[
          {
            title:"Welcome To Amara",
            description:["A sword and sorcery high production dramatic podcast of a play by post Dungeon World campaign. It's a realm with carefully crafted lore to uncover, featuring a growing cast of diverse characters of fast friends, malignant baddies and beasts alike."],
            cardAlt:"Digitaly drawn cartoony drawing of a swordsman chopping off a goblins head while a mage woman kicks another in the face, and an elven archer shoots another with a bow.",
            background:"wtaSplash",
            link:"https://www.welcometoamara.com/",
          },
          {
            title:"This Is Nothing",
            description:[`Don't worry about this. It's nothing. It's nonsense.`, `It's uncategorizable.`],
            cardAlt:'A textured image resembling dark blue fur, the words "This is Nothing" are seen above the fur.',
            background:"nothingSplash",
            link:"https://soundcloud.com/shibbone"
          },
          {
            title:"Crickburrow Project",
            description:[`Crickburrow is a narrative cipher game being beamed from another realm. Don't spend long in the stream friend, you'll lose yourself.`],
            cardAlt:"A document discussing the Crickburrow foundation, appears to be a confidental outline.",
            background:"crickSplash",
            link:"http://www.crickburrow.com/"
          },
          {
            title:"Moebius Dungeons",
            description:[`A high fantasy hack and slash adventure where you attack monsters to gain coins, then spend your wealth on lavish equipment and enchantments.`],
            cardAlt:"A ghostly sword set on a vibrant neon pink background.",
            background:"modunSplash",
            link:"https://moebiusdungeons.com/"
          },
          {
            title:"D&D Char/Item Generator",
            description:[`A work in progress, creating a D&D inspired random item generator and random character generator with my friend David.`],
            cardAlt:"Digitaly drawn cartoony drawing of a swordsman chopping off a goblins head while a mage woman kicks another in the face, and an elven archer shoots another with a bow.",
            background:"doaSplash"
          },
          {
            title:"Misuse of Mana",
            description:['An ancient webcomic from long ago, discontinued for now, but boasts a world full of magic, friendship, and world threatening forces.'],
            cardAlt:"Digitally drawn cartoon style drawing of a swordsman chopping off a goblins head while a mage woman kicks another in the face, and an elven archer shoots another with a bow.",
            background:"mofmSplash",
            link:"https://tapas.io/episode/793285",
          },
          {
            title:"Psychic Psychic Cowboy",
            description:['A tale about a double psychic cowboy.', 'Coming Soon'],
            cardAlt:"A desert scene depicting the rising sun, which is distorted and giving off rainbow colors.",
            background:"ppcSplash",
          },
          {
            title:"Dungeons Of Amara",
            description:['Through the eyes of an Amaran bard comes this tome of poetry and illustrations depicting the baddies, merchants, and adventurers found in dark dungeons, deep caves, and bustling towns.'],
            cardAlt:"Digitaly drawn cartoony drawing of a swordsman chopping off a goblins head while a mage woman kicks another in the face, and an elven archer shoots another with a bow.",
            background:"doaSplash",
            link:"https://gum.co/CsdPh",
          },
          {
            title:"Ire",
            description:['A short comic illustrating a poem about overcoming ones own inner conflict.'],
            cardalt:"Digitaly drawn cartoony drawing of a swordsman chopping off a goblins head while a mage woman kicks another in the face, and an elven archer shoots another with a bow.",
            background:"ireSplash",
            link:"https://gum.co/gXbKmf",
          },
          {
            title:"My GitHub",
            description:[`My hobby GitHub, accessible to the public for forking, collaborating, and making connections.`],
            cardAlt:"An image depicting code for a web browser rpg game and the github logo, Octocat, a half octopus, half cat creature.",
            background:"gitSplash",
            link:"https://github.com/MisuseofMana",
          }

        ],
      }
    },
    components: {
      CardTemplate,
    },
    }
</script>

<style scoped>
h1 {
  font-size:6vw;
}

.hero {
  padding:10px;
  height:80vh;
  width:80vw;
  text-align:center;
  background:white;
  box-shadow: 1px 1px 4px black;
  margin:5vh auto;
}

/* Mobile Port */
@media (min-width: 667px) {}

/* Tablets and Up */
@media (min-width: 768px) {}
</style>