<template>
  <section id="webDevPage" class="heroWrapper">

      <h1>WEB DEVELOPMENT</h1>
        
      <br>

      <section class="flexRow">
          <CardTemplate 
            title="My GitHub" 
            :description="[`My hobby GitHub, accessible to the public for forking, collaborating, and making connections.`]"
            card-alt="An image depicting code for a web browser rpg game and the github logo, Octocat, a half octopus, half cat creature."
            background="gitSplash"
            link="https://github.com/MisuseofMana"
          />
      </section>
  </section>
</template>

<script>
import CardTemplate from '@/components/CardTemplate.vue';

export default {
  name: 'WebDevPage',
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
h1 {
  font-size:12vw;
}

/* Mobile Port */
@media (min-width: 667px) {}

/* Tablets and Up */
@media (min-width: 768px) {}
</style>
