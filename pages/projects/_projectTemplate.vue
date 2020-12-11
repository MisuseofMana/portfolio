<template>
    <div class="container">
        <section class="hero">

            <h1 class="pageTitle">{{content.pageName}}</h1>
            <span class="pageDescription" v-for="(desc, index) in content.description" :key="desc[0]+index">
                <p v-html="desc"></p>
            </span>
        </section>

        <section class="cardBorder hero ifMobile" v-for="(item, index) in this.content.links" :key="item.title + index">
            <h2 class="projectTitle">{{item.title}}</h2>
            <p class="projectDescription" v-for="(sentence, index) in item.description" :key="sentence[0]+index">{{sentence}}</p>
            <a class="projectImage" :key="item.title + 'img'" :class="{'notAllowed' : !item.link, 'allowed' : item.link}" :href="item.link" target="_blank" @click="checkLink(item.link)">
                <img class="imageSize" :src="require(`@/assets/imgs/${item.background}.png`)" :alt="item.cardalt">
            </a>
        </section>

        <section class="cardBorder ifDesktop hero">
            <section class="flexRowWrap">
                <section class="projectWrapper" v-for="(project, index) in this.content.links" :key="project.title + index" :style="{backgroundImage: `url(${require(`@/assets/imgs/${project.background}.png`)})`}">   
                <section class='projectOverlay flexColumn' :key="project.title">
                    <h1>{{ project.title}}</h1>
                    
                    <section :key="project.title  + 'describe'" class="description">
                        <p v-for="(sentences, index) in project.description" :key='sentences[0]+index'>{{ sentences }}</p>
                    </section>

                    <a v-if="project.link" :href="project.link" target="_blank" class="link">See More</a>
                </section>
            </section>
        </section>
        </section>
    </div>
</template>

<script>
import Links from '@/plugins/links.js'

    export default {
        async asyncData({ params }) {
            const slug = params.projectTemplate
            return { slug }
        },
        methods: {
            checkLink(exists) {
                if(exists){
                    return true;
                }
                else {
                    return false;
                }
            },
        },
        computed: {
            content: function () {
                return Links[this.slug]
            }
        }
    }
</script>

<style scoped>
.container {
    margin: 0 0 30px 0;
}

.cardBorder {
    margin-bottom:10px;
}

.imageSize {
    border-radius: 20px;
    width:90%;
    margin:0 auto;
}

.pageTitle {
    font-size:8vw;
}

.pageDescription {
    font-size:5vw;
}

.projectTitle {
    font-size:9vw;
    margin:10px 0;
    font-family: var(--h1-font);
}

.projectDescription{
    font-size:4vw;
    margin:10px 0;
    text-align:center;
}

.projectImage {
    display:block;
    margin: 0 0 40px 0;
}

/* Mobile Portrait */
@media (min-width: 500px) {

}

/* Tablets and Up */
@media (min-width: 768px) {
.cardBorder {
    margin-bottom:0px;
}

.imageSize {
    border-radius: 20px;
    width:90%;
    margin:0 auto;
}

.pageTitle {
    font-size:8vw;
}

.pageDescription {
    font-size:3vw;
}

.projectTitle {
    font-size:9vw;
    margin:10px 0;
    font-family: var(--h1-font);
}

.projectDescription{
    font-size:3vw;
    margin:10px 0;
    text-align:center;
}
}

@media (min-width: 1024px) {
.cardBorder {
    margin-bottom:20px;
}

.pageTitle {
    font-size:3vw;
}
.projectWrapper {
    width:325px;
    height:500px;
    border-radius:20px;
    display:grid;
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-rows:1fr 3fr 1fr;
    background-position: center;
    background-size: cover;
    box-shadow:3px 3px 3px 1px #ccc;
    margin:30px 15px;
    transition: box-shadow .3s;
}

.projectWrapper:hover {
    box-shadow:5px 5px 5px 1px #aaa;
    transition: box-shadow .3s;
}

.projectOverlay {
    grid-column: 1/4;
    grid-row:1/4;
    border-radius:20px;
    background:rgba(0, 116, 124, .9);
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    opacity:0;
    padding:10px;
    transition: opacity .3s
}

.projectWrapper:hover > .projectOverlay {
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    opacity:1;
    padding:10px;
    transition: opacity .3s;
}

.projectOverlay h1 {
    font-size:2vw;
    color:white;
    margin:0px;
    text-align: center;
}

.description {
    grid-row:3/4;
    grid-column:1/4;
}

.description p, p{
    margin:10px;
    font-size:1.2vw;
    font-weight:100;
    text-align:center;
}

.notAllowed {
    cursor:not-allowed;
}

.allowed{
    cursor:pointer;
}

.link {
    font-family: var(--plain-font);
    margin-top:20px;
    display:flex;
    justify-content: center;
    align-items: center;
    width:70%;
    text-decoration:none;
    height:40px;
    border-radius:10px;
    background:white;
    color:black;
    text-align:center;
}
}
</style>