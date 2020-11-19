<template>
    <div>
        <section class="hero">
            <h1>Photography</h1>
        </section>

        <section class="hero">
            <p>Back in the early 2000's I bought a Cannon Rebel T3 camera and it quickly became a good friend of mine. I twist and alter my mundane life into a catalogue of still frames that tell a story beyond the captured moment. Look carefully, you might find more than you expect.</p>
        </section>

        <section class="cardBorder hero" v-for="(links, index) in this.filteredLinks" :key="links.title + index">
            <h1>{{links.title}}</h1>
            <a :key="links.title + 'img'" :class="{'notAllowed' : !links.link, 'allowed' : links.link}" :style="{backgroundImage: `url()})`}" :href="links.link" target="_blank" @click="checkLink">
                <img class="imageSize" :src="require(`@/assets/imgs/${links.background}.png`)" alt="">
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
                const filteredLinks = links.filter(links => links.category === 'Photography')
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