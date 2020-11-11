<template>
  <section class="heroWrapper">
        <section class=" reveal imageOriginSet">
            <img class="overlay" src="@/assets/imgs/12.png" alt="">
            <img class="overlay" src="@/assets/imgs/13.png" alt="">
            <img class="overlay" src="@/assets/imgs/9.png" alt="">
            <img class="overlay" src="@/assets/imgs/10.png" alt="">
            <img class="overlay" src="@/assets/imgs/2.png" alt="">
            <img class="overlay" src="@/assets/imgs/7.png" alt="">
            <img class="overlay" src="@/assets/imgs/3.png" alt="">
            <img class="overlay" src="@/assets/imgs/18.png" alt="">
            <img class="overlay" src="@/assets/imgs/4.png" alt="">
            <img class="overlay" src="@/assets/imgs/5.png" alt="">
            <img class="overlay" src="@/assets/imgs/6.png" alt="">
            <img class="overlay" src="@/assets/imgs/1.png" alt="">
            <img class="overlay" src="@/assets/imgs/8.png" alt="">
            <img class="overlay" src="@/assets/imgs/11.png" alt="">
            <img class="overlay" src="@/assets/imgs/16.png" alt="">
            <img class="overlay" src="@/assets/imgs/17.png" alt="">
            <img class="overlay" src="@/assets/imgs/14.png" alt="">
            <img class="overlay" src="@/assets/imgs/15.png" alt="">
            <img class="overlay" src="@/assets/imgs/19.png" alt="">
            <img class="overlay" src="@/assets/imgs/20.png" alt="">
        </section>
        
        <section id="name">
            <h1 class='reveal'>SEAN A. YAGER</h1>
            <h2 class='reveal'>Web Dev | Cartoonist | Storyteller </h2>
        </section>

        <section>
            <p class="reveal">
                Sean, (a.k.a Shin), (a.k.a @MisuseofMana), is a cartoonist and comic illustrator located in Austin, TX. By day he codes, creates, and maintains a myriad of websites for various clients. By night he summons creatures, camaraderie, and conflicts to enrich his comic universe, the realm of Amara.
            </p>

            <p class="reveal">
                He grew up in the Indiana cornfields swinging tree branch swords and imagining backyard adventures. Sean attended IUPUI and Herron School of Art for several years before deciding that college debt wasn't for him. He now works freelance for himself on the side while taking on coding jobs to pay the bills.
            </p>
        </section>

        <section class="socialMedia reveal">
            <a href="https://github.com/MisuseofMana"><img src="@/assets/imgs/icons/github.png" alt=""></a>
            <a href="https://www.instagram.com/misuseofmana/"><img src="@/assets/imgs/icons/instagram.png" alt=""></a>
            <a href="https://twitter.com/MisuseOfMana"><img src="@/assets/imgs/icons/twitter.png" alt=""></a>
            <a href="https://www.linkedin.com/in/seanyager/"><img src="@/assets/imgs/icons/linkedin.png" alt=""></a>
            <a href="mailto:seanyagerart@gmail.com"><img src="@/assets/imgs/icons/gmail.png" alt=""></a>
        </section>
    </section>
</template>

<script>
import { carousel, fadeIn } from '@/plugins/anime.js';

export default {
  name: 'LandingPage',
  data() {
    return {
    }
  },
  mounted(){
    carousel('.overlay')
    fadeIn('.reveal')
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.socialMedia {
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}

.socialMedia img{
    margin:10px 10px 0 10px;
    width:14vw;
}

.socialMedia img:hover {
    filter:drop-shadow(0px 0px 5px #1eff00) invert();
}

.overlay {
    position:absolute;
}
.imageOriginSet {
    height:326px;
    width:326px;
    position:relative;
    left:-326px;
}
.imageOriginSet img {
    width:326px;
    opacity:0;
}

a {
    text-decoration:none;
}

h1{
    font-size: 16vw;
}

h2 {
    font-size:6vw;
}

p {
    font-size:5vw;
}



/* Mobile Port */
@media (min-width: 667px) {}

/* Tablets and Up */
@media (min-width: 768px) {
    .socialMedia img{
    margin:10px 10px 0 10px;
}

.socialMedia img:hover {
    filter:drop-shadow(0px 0px 5px #1eff00) invert();
}

.overlay {
    position:absolute;
}
.imageOriginSet {
    height:326px;
    width:326px;
    position:relative;
    left:-326px;
}
.imageOriginSet img {
    width:326px;
    opacity:0;
}

#name {
    text-align: center;
}

.arrowContainer {
    background:black;
    margin-top:20px;
    border-radius:999px;
    height:75px;
    width:75px;
    text-align:center;
    color:white;
    font-size:3em;
    line-height:68px;
}

.arrowContainer:hover {
    background:white;
    color:black;
    border:solid 1px black;
    cursor:pointer;
    height:73px;
    width:73px;
    line-height:67px;
}

a {
    text-decoration:none;
}
}

</style>
