<template>
    <nav @click="toggleNav()" class="navBar autoGrid">
      <section class="title">
        <h1>SEAN YAGER</h1>
        <h3>A Storyteller</h3>
      </section>

      <section class="menu">
          <p><v-icon name="hamburger"></v-icon></p>
      </section>

      <section v-if="navOpen">
        <ul>
          <li></li>
        </ul>
      </section>
    </nav>
</template>

<script>
    export default {
      data() {
        return {
          navOpen: false,
        }
      },
        methods: {
          toggleNav() {
          }
        }
    }
</script>

<style scoped>
.navBar{
  border-bottom:1px solid black;
  grid-template-areas: 
  'title title title title hamburg'
  ;
  height:45px;
  background:white;
}

.title{
  display:flex;
  justify-content:flex-start;
  align-items:center;
}

.title h1{
  margin: 0 0 0 10px;
  line-height: 49px;
  grid-area: title;
}

.menu {
    grid-area: hamburg;
    display:flex;
    align-items: center;
    justify-content: flex-end;
}

h1 {
  font-size:9vw;
}

h3 {
  font-size:4vw;
  margin:0 0 0 10px;
}

p {
  margin:0 10px 0 0;
  padding:0;
}



/* Mobile Port */
@media (min-width: 667px) {}

/* Tablets and Up */
@media (min-width: 768px) {}
</style>