<template>
    <section class="hero">
      <h1>Hey There!</h1>
      <p>Nice to meet you! I'm Sean Yager, a web developer, a comics illustrator, a 3D artist, a poet, a storyteller, but mostly I'm a well versed, certified techology nerd.</p>
      <p>Stay a while and browse my myriad of projects, or tap the navbar for more!</p>
    
      <hr class="ifMobile">
      <br class="ifDesktop">

        <CardTemplateMobile />
        <CardTemplateDesktop />
        
    </section>
</template>

<script>   
    export default {
      data() {
      return {
      }
    },
    }
</script>

<style scoped>
h1 {
  font-size:12vw;
  text-align:left;
}

p{
  font-size:6vw;
};


/* Mobile Port */
@media (min-width: 500px) {
/* h1 {
  font-size:10vw;
}

p{
  font-size:6vw;
}; */

}

/* Tablets and Up */
@media (min-width: 768px) {
  h1  {
    font-size:5vw;
    text-align:left;
  }
  
  p {
    font-weight:100;
    font-size:2.3vw;
  }
}

@media (min-width: 1024px) {
  h1 {
    font-size:3vw;
  }
  p {
    font-size:1.4vw;
    font-weight:100;
    text-align:left;
  }
}
</style>