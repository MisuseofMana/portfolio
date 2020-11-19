<template>
    <section class="hero">
      <h1>Hey There!</h1>
      <p>Nice to meet you! I'm Sean Yager, a web developer, a comics illustrator, a 3D artist, a poet, a storyteller, but mostly I'm a well versed, certified techology nerd.</p>
      <p>Stay a while and browse my myriad of projects, or tap the navbar for more!</p>
    
      <hr>

      <section class="carousel">
        
        <CardTemplate/>
        
      </section>
    </section>
</template>

<script>
    import CardTemplate from '@/components/CardTemplate.vue'
    
    export default {
      data() {
      return {
      }
    },
    components: {
      CardTemplate,
    },
    }
</script>

<style scoped>
h1 {
  font-size:12vw;
}

p{
  font-size:4vw;
};


/* Mobile Port */
@media (min-width: 500px) {
h1 {
  font-size:10vw;
}

p{
  font-size:1vw;
};

}

/* Tablets and Up */
@media (min-width: 768px) {}
</style>