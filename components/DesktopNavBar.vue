<template>
  <nav @click="toggleNav()" class="navigation navHeader flexRow">
    <section class="innerNavigation">
      <section class="flexRowBetween title">
        <section class="flexRowStart">
          <h1>SEAN YAGER</h1>
          <transition name="fade" mode="out-in">
              <h3 class="titleQuip" :key="randomTitle">{{randomTitle}}</h3>
          </transition>
        </section>

          <SocialMedia/>
      </section>

      <ul class="flexRow navHeader">
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
  </nav>
</template>

<script>
  import SocialMedia from './SocialMedia.vue';

    export default {
      components: {
        SocialMedia,
      },
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
.navigation {
  margin: 0 0 15px 0;
  padding:0px 0 15px 0;
  border-bottom:solid 2px black
}

.innerNavigation {
  width:90%;
  max-width:1450px;
  margin:0 auto;
}

.navHeader {
  background:white;
  z-index:9999;
}

.title {
  text-align:left;
  margin:0 0 20px 0px;
  padding:10px 0 0 0;
}

.titleQuip {
  min-width:200px;
}


p {
  margin:0 10px 0 0;
  padding:0;
}

.navMenu {
  background:white;
  box-shadow: 1px 1px 3px black;
  width:100%;
  z-index:9999;
}

ul {
  text-indent:0px;
  display:flex;
  margin:0;
}

ul li {
  font-family: var(--plain-font);
  list-style: none;
  text-align:center;
  text-transform:uppercase;
  text-decoration:none;
  border-radius:8px;
}

ul a.nuxt-link-exact-active li {
  background-color:var(--primary-color);
  color:white;
}

ul a.nuxt-link-exact-active li:before {
  content:">> "
}

ul a {
  text-decoration: none;
  transition: all .3s ease-in-out;
}

ul a:hover {
  border-radius:8px;
  background-color:var(--primary-color);
  color:white;
  transition: all .3s ease-in-out;
}

a:link {
  color:rgb(0, 0, 0);
  text-decoration:none;
}

a:visited {
  color:var(--primary-color);
  text-decoration:none;
}
</style>