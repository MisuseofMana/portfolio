<template>
    <nav @click="toggleNav()" class="navBar flexRow">
      <section class="title">
        <h1>SEAN YAGER</h1>
        <transition name="fade" mode="out-in">
          <h3 :key="randomTitle">{{randomTitle}}</h3>
        </transition>
      </section>

      <section class="menuButton">
          <v-icon name="hamburger"></v-icon>
      </section>

      <section v-if="navOpen" class="navMenu">
        <ul>
          <router-link to="/"><li>Home</li></router-link>
          <router-link to="/about"><li>About</li></router-link>
          <router-link to="/comics"><li>Comics</li></router-link>
          <router-link to="/books"><li>Books</li></router-link>
          <router-link to="/coding"><li>Coding</li></router-link>
          <router-link to="/podcasts"><li>Podcasts</li></router-link>
          <router-link to="/games"><li>Games</li></router-link>
          <router-link to="/photography"><li>Photography</li></router-link>
        </ul>
      </section>
    </nav>
</template>

<script>
    export default {
      data() {
        return {
          navOpen: false,
          randomNumber: 0,
          titles: [
            ":Storyteller",
            ":Comics Artist",
            ":Designer",
            ":Web Developer",
            ":Maker",
            ":Poet",
            ":Friend"
          ]
        }
      },
        methods: {
          toggleNav() {
            this.navOpen = !this.navOpen
          },
          newTitle() {
            if(this.randomNumber === this.titles.length-1) this.randomNumber = 0;
            else this.randomNumber++;
          }
        },
        computed: {
          randomTitle: function() {
            return this.titles[this.randomNumber]
          }
        },
        created: function() {
          this.randomNumber = Math.floor(Math.random() * Math.floor(this.titles.length-1));
        },
        mounted: function() {
          window.setInterval(() => {
            this.newTitle()
          }, 5000)
        }
    }
</script>

<style scoped>
.navBar{
  border-bottom:1px solid black;
  background:white;
  position:relative;
  justify-content:space-between;
  z-index:9999;
}

.title{
  display:flex;
  justify-content:flex-start;
  align-items:center;
}

.title h1{
  margin: 0 0 0 10px;
  grid-area: title;
}

.menuButton {
    grid-area: hamburg;
    display:flex;
    align-items: center;
    justify-content: flex-end;
    margin-right:13px;
}

h1 {
  font-size:8vw;
}

h3 {
  font-size:4vw;
  margin:0 0 0 10px;
}

p {
  margin:0 10px 0 0;
  padding:0;
}

.navMenu {
  background:white;
  box-shadow: 1px 1px 3px black;
  width:100%;
}

.navMenu ul li {
  font-family: var(--plain-font);
  list-style: none;
  text-align:center;
  padding:10px 0;
  background:#ccc;
  margin:15px;
  text-transform:uppercase;
  text-decoration:none;
}

.navMenu ul a.router-link-exact-active li {
  background:rgb(211, 162, 208);
}

.navMenu ul a {
  text-decoration: none;
}

.navMenu a:link {
  color:rgb(0, 0, 0);
  text-decoration:none;
}

.navMenu a:visited {
  color:rgb(128, 0, 117);
  text-decoration:none;
}

.navMenu ul li:before {
  content:": ";
}

.navMenu ul li:after {
  content:" :";
}



/* Mobile Port */
@media (min-width: 500px) {

}

/* Tablets and Up */
@media (min-width: 768px) {}
</style>