<template>
  <nav @click="toggleNav()">
      <section class="navHeader">
          <section class="flexRowBetween" key="header" >
            <section class="title">
              <h1>SEAN YAGER</h1>
              <transition name="fade" mode="out-in">
                <h2 class="thinFont" :key="randomTitle">{{randomTitle}}</h2>
              </transition>
            </section>
            <Icon name="caret-square-down"/>
          </section>
      </section>

      <transition name="growAppear" mode="out-in">
        <section v-if="navOpen" key="navigation" class="menuContainer" >
          <section class="flexRowBetween">
              <section class="title">
                <h1>NAVIGATION</h1>
              </section>
              <Icon name="window-close"/>
            </section>

          <section class="flexColumn">
            <NuxtLink to="/" exact><p>Home</p></NuxtLink>
            <NuxtLink to="/about"><p>About</p></NuxtLink>
            <NuxtLink to="projects/comics"><p>Comics</p></NuxtLink>
            <NuxtLink to="projects/books"><p>Books</p></NuxtLink>
            <NuxtLink to="projects/coding"><p>Coding</p></NuxtLink>
            <NuxtLink to="projects/podcasts"><p>Podcasts</p></NuxtLink>
            <NuxtLink to="projects/games"><p>Games</p></NuxtLink>
            <NuxtLink to="projects/photography"><p>Photography</p></NuxtLink>
            <NuxtLink to="/resume"><p>Resume</p></NuxtLink>
          </section>
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
nav {
  padding:0 20px;
  background-color:white;
  border-bottom:2px solid black;
  position: sticky;
  top:0;
  z-index:0;
}

.navHeader {
  
}

.navHeaderOpen{
  background-color:rgba(255,255,255);
  position: sticky;
  width: 100vw;
  top:0;
  left:0;
  z-index:9999;
  padding:0px 20px;
}

.title {
  display:flex;
  justify-content:flex-start;
  align-items:center;
}

.title h2 {
  margin-left:20px;
}

.menuContainer {
  position:absolute;
  top:0;
  left:0;
  width:100vw;

  background:white;
}

.menuContainer ul a.nuxt-link-exact-active li {
  background:rgb(196, 218, 219);
}

.menuContainer a:link {
  color:rgb(0, 0, 0);
}

.menuContainer a:visited {
  color: var(--primary-color);
}

.menuContainer ul li:before {
  content:": ";
}
.menuContainer ul li:after {
  content:" :";
}
</style>