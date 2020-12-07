<template>
  <nav @click="toggleNav()" class="navigation navHeader flexRow">
    <section class="innerNavigation">
      <section class="flexRow title">
        <h1>SEAN YAGER</h1>
        <transition name="fade" mode="out-in">
            <h3 class="titleQuip" :key="randomTitle">{{randomTitle}}</h3>
          </transition>

          <SocialMedia/>
      </section>

      <ul class="flexRow navHeader">
        <router-link to="/" exact><li>Home</li></router-link>
        <router-link to="/about"><li>About</li></router-link>
        <router-link to="/comics"><li>Comics</li></router-link>
        <router-link to="/books"><li>Books</li></router-link>
        <router-link to="/coding"><li>Coding</li></router-link>
        <router-link to="/podcasts"><li>Podcasts</li></router-link>
        <router-link to="/games"><li>Games</li></router-link>
        <router-link to="/photography"><li>Photography</li></router-link>
        <router-link to="/resume"><li>Resume</li></router-link>
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
  justify-content:flex-start;
  align-items:center;
  text-align:left;
  margin:0 0 20px 0px;
  padding:10px 0 0 0;
}

.title h1 {
  padding:0 0 0 20px;
  font-size:4vw;
}

.titleQuip {
  min-width:200px;
}

.socialMedia {
  margin-left:auto;
}

.socialMedia a {
  margin:0 20px 0 0;
}

.socialMedia a:hover > img {
  box-shadow:0px 0px 10px 2px rgb(0, 116, 124);
}

h3 {
  font-size:2vw;
  margin:0 0 0 10px;

  font-weight:100;
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
  font-size:1.2vw;
  padding:10px;
  font-weight:600;
  border-radius:8px;
}

ul a.router-link-exact-active li {
  background:#eee;
}

ul a.router-link-exact-active li:before {
  content:">> "
}

ul a {
  text-decoration: none;
}

a:link {
  color:rgb(0, 0, 0);
  text-decoration:none;
}

a:visited {
  color:rgb(0, 116, 124);
  text-decoration:none;
}
</style>