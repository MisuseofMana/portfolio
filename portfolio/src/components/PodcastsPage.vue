<template>
    <div>
        <section class="hero">
            <h1>Podcasts</h1>
        </section>

        <section class="hero">
            <p>I'm also an half-hearted audiophile, there's only so much time in a day for me to create and produce high quality content, so this is my throwaway hobby and collaborative musing time with my friends, family, and podcasting pals.</p>
            
            <p>My cohost on "Welcome to Amara" Andy, along with our audio editor <a href="https://www.fiverr.com/shifted_audio">Pedro</a> aid me in bringing to life the world of Amara. In contrast, I make garbage musings under the guise of "This is Nothing".</p>
        </section>

        <section class="cardBorder hero" v-for="(links, index) in this.filteredLinks" :key="links.title + index">
            <h1>{{links.title}}</h1>
            <a :key="links.title + 'img'" :class="{'notAllowed' : !links.link, 'allowed' : links.link}" :style="{backgroundImage: `url()})`}" :href="links.link" target="_blank" @click="checkLink">
                <img class="imageSize" :src="require(`@/assets/imgs/${links.background}.png`)" :alt="links.cardalt">
            </a>

            <p v-for="(sentences, index) in links.description" :key="sentences[0]+index">{{sentences}}</p>
        </section>
    </div>
</template>

<script>
import {links} from '../plugins/links.js'

    export default {
        props: ['page'],
        links,
        methods: {
            checkLink() {
                if(!this.links[this.currentNumber].link){
                    return false;
                }
                else {
                    return true;
                }
            },
        },
        computed: {
            filteredLinks: function() {
                const filteredLinks = links.filter(links => links.category === 'Podcast')
                return filteredLinks;
            }

        }
    }
</script>

<style>
.cardBorder {
    margin-bottom:15px;
}

.imageSize {
    border-radius: 20px;
    height:400px;
    width:90%;
    margin:0 auto;
}
</style> 