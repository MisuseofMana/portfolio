<template>
	<nav>
		<section class="flexRowBetween innerNavHeader" key="header" @click="toggleNav()">
			<section class="title">
			<h1>Sean Yager</h1>
			<transition name="fade" mode="out-in">
				<h2 class="thinFont" :key="randomTitle">{{randomTitle}}</h2>
			</transition>
			</section>
			<Icon name="bars"/>
		</section>

		<transition name="growAppear" mode="out-in">
			<section v-if="navOpen" key="navigation" class="menu" @click="toggleNav()">
				<section class="innerMenuContainer">
					<section class="flexRowBetween menuHeader">
						<section class="title">
							<h1>NAVIGATION</h1>
						</section>
						<Icon name="window-close"/>
						</section>

					<section class="flexColumn menuLinks">
						<NuxtLink class="flexRowCenter" to="/" exact><Icon name="home"/> Home</NuxtLink>
						<NuxtLink class="flexRowCenter" to="/about"><Icon name="address-card"/> About</NuxtLink>
						<NuxtLink class="flexRowCenter" to="projects/comics"><Icon name="book-open"/> Comics</NuxtLink>
						<NuxtLink class="flexRowCenter" to="projects/books"><Icon name="book"/> Books</NuxtLink>
						<NuxtLink class="flexRowCenter" to="projects/coding"><Icon name="code"/> Coding</NuxtLink>
						<NuxtLink class="flexRowCenter" to="projects/podcasts"><Icon name="microphone"/> Podcasts</NuxtLink>
						<NuxtLink class="flexRowCenter" to="projects/photography"><Icon name="camera-retro"/> Photography</NuxtLink>
						<NuxtLink class="flexRowCenter" to="/resume"><Icon name="envelope-open-text"/> Resume</NuxtLink>
					</section>
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
            ":Artist",
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
  background-color:white;
  border-bottom:2px solid black;
  position: sticky;
  top:0;
  z-index:0;
  width:100vw;
  margin-bottom:10px;
}

.innerNavHeader {
    padding:10px;
}

.innerMenuContainer {
    padding:0 10px;
    height:100vh;
}

.title {
  display:flex;
  justify-content:flex-start;
  align-items:center;
  height:50px;
}

.title h1 {
  margin:0;
  line-height:50px;
}

.title h2 {
  margin:0 0 0 10px;
  line-height:50px;
}

.menu {
  position:fixed;
  top:0;
  left:0;
  width:100vw;
  background:white;
  z-index:9999;
  padding:10px 0;
}

.menuHeader {
  border-bottom:2px solid black;
  margin-bottom:10px;
}

.menuLinks a:link {
  background:#eee;
  width:75%;
  text-align:center;
  margin:5px 0;
  padding:15px;
  font-family:var(--h1-font);
  font-weight:700;
  border-radius:20px;
  color:var(--primary-color);
}

.menuLinks a:visited {
  color:var(--visited-links);
}

.menuLinks a.nuxt-link-exact-active {
  background: var(--primary-color);
  color:white;
}

.menuLinks a .fa-icon {
	margin-right:5px;
	width: auto;
	height: 4vw; 
	max-width: 100%;
	max-height: 100%;
}
</style>