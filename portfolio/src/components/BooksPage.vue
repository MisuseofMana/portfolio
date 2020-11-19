<template>
    <div>
        <section class="hero">
            <h1>Books</h1>
        </section>

        <section class="hero">
            <p>I've dabble in self publishing and produced two version of a book titled "Dungeons of Amara." You can purchase the 2019 version of the book at the link below. The older version is discontinued with no plans to reprint.</p>
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
                const filteredLinks = links.filter(links => links.category === 'Publication')
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