<template>
    <nav @click="toggleNav()" class="navHeader flexRow">
      <section class="flexRow">
      <section class="title">
        <h1>SEAN YAGER</h1>
        <transition name="fade" mode="out-in">
          <h3 :key="randomTitle">{{randomTitle}}</h3>
        </transition>
      </section>

      <section class="menuButton">
          <Icon name="hamburger"/>
      </section>
      </section>

      <transition key="navigation" name="growAppear" mode="out-in">
        <section v-if="navOpen" class="navMenu">
            <section class="navHeader flexRow">
              <section class="title">
                <h1>NAVIGATION</h1>
              </section>

              <section class="menuButton">
                <Icon name="window-close"/>
              </section>
            </section>
          <ul>
            <NuxtLink to="/" exact><li>Home</li></NuxtLink>
            <NuxtLink to="/about"><li>About</li></NuxtLink>
            <NuxtLink to="projects/comics"><li>Comics</li></NuxtLink>
            <NuxtLink to="projects/books"><li>Books</li></NuxtLink>
            <NuxtLink to="projects/coding"><li>Coding</li></NuxtLink>
            <NuxtLink to="projects/podcasts"><li>Podcasts</li></NuxtLink>
            <NuxtLink to="projects/games"><li>Games</li></NuxtLink>
            <NuxtLink to="projects/photography"><li>Photography</li></NuxtLink>
            <NuxtLink to="/resume"><li>Resume</li></NuxtLink>
          </ul>
        </section>
      </transition>
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
            ":Web Dev",
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
.navHeader{
  border-bottom:1px solid black;
  background:white;
  position: sticky;
  width:100%;
  top:0;
  justify-content:space-between;
  z-index:9999;
  padding:5px 0;
  margin:0 0 10px 0;
}

.title{
  display:flex;
  justify-content:flex-start;
  align-items:center;
  margin: 0 0 0 5px;
}

.title h3 {
  min-width:150px;
}

.menuButton {
    display:flex;
    justify-content: flex-end;
    align-items: center;
    margin-right:13px;
}

h1 {
  font-size:7vw;
  margin:0 0 0 10px;
  padding:10px 0;
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
  position:absolute;
  top:0;
  left:0;
  background:white;
  box-shadow: 1px 1px 3px black;
  width:100%;
  z-index:9999;
  height:100vh;
}

.navMenu ul li {
  font-family: var(--plain-font);
  list-style: none;
  text-align:center;
  padding:10px 0;
  background:#eee;
  border-radius:4px;
  margin:15px;
  text-transform:uppercase;
  text-decoration:none;
}

.navMenu ul a.nuxt-link-exact-active li {
  background:rgb(196, 218, 219);
}

.navMenu ul a {
  text-decoration: none;
}

.navMenu a:link {
  color:rgb(0, 0, 0);
  text-decoration:none;
}

.navMenu a:visited {
  color:rgb(0, 116, 124);
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
@media (min-width: 768px) {
.title{
  margin: 0 0 0 20px;
}

.title h3 {
  min-width:200px;
}

.menuButton {
    margin-right:25px;
}

h1 {
  font-size:7vw;
}

h3 {
  font-size:3vw;
  font-weight:100;
}

.navMenu ul li {
  font-size:4vw;
  padding:20px 0;
  border-radius:8px;
}
}
</style>