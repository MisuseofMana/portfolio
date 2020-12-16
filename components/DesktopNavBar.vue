<template>
  <nav @click="toggleNav()" class="navigation navHeader flexRow">
    <section class="innerNavigation">
      <section class="flexRowAround title">
        <section>
          <h1>SEAN YAGER</h1>
          <transition name="fade" mode="out-in">
              <h3 class="titleQuip" :key="randomTitle">{{randomTitle}}</h3>
          </transition>
        </section>

          <SocialMedia/>
      </section>

      <ul class="flexRowWrap navMenu">
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
            "A Storyteller",
            "A Comics Artist",
            "A Designer",
            "A Web Developer",
            "A Maker",
            "A Poet",
            "A Friend"
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
  border-bottom:solid 2px black;
  margin-bottom:20px;
}

.innerNavigation {
  padding:20px;
  max-width:1450px;
}

.navHeader {
  background:white;
}

.title {
  text-align:left;
  margin-bottom:10px;
}

.titleQuip {
  min-width:200px;
}

.navMenu li {
  padding:10px;
  border-radius:10px;
  background:#eee;
}

.navMenu a {
  margin:10px 20px;
}

ul {
  list-style:none;
  text-indent:0;
}

ul a.nuxt-link-exact-active li {
  background-color:var(--primary-color);
  border-radius:10px;
  color:white;
}

ul a {
  text-decoration: none;
  transition: all .3s ease-in-out;
  border-radius:10px;
}

ul a:hover {
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