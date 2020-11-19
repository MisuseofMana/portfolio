<template>
    <div>
        <section class="hero">
            <h1>Games</h1>
        </section>

        <section class="hero">
            <p>A list of my esoteric and expirimental web games. I have an interest in cryptography and ciphers that pairs well with my dabbling in web development.</p>
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
                const filteredLinks = links.filter(links => links.category === 'Web Game')
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