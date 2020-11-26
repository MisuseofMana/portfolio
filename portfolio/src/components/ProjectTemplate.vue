<template>
    <div>
        <section class="hero">
            <h1 class="pageTitle">{{content.pageName}}</h1>
        </section>

        <section class="hero">
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

        <section class="ifDesktop hero">
            <section v-for="(item, index) in this.content.links" :key="item.title + index">
                <h2 class="projectTitle">{{item.title}}</h2>
                <p class="projectDescription" v-for="(sentence, index) in item.description" :key="sentence[0]+index">{{sentence}}</p>
                <a class="projectImage" :key="item.title + 'img'" :class="{'notAllowed' : !item.link, 'allowed' : item.link}" :href="item.link" target="_blank" @click="checkLink(item.link)">
                <img class="imageSize" :src="require(`@/assets/imgs/${item.background}.png`)" :alt="item.cardalt">
                </a>
            </section>
        </section>
    </div>
</template>

<script>

    export default {
        props: ['content'],
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
    }
</script>

<style>
.cardBorder {
    margin-bottom:15px;
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
    margin-bottom:15px;
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
        margin-bottom:15px;
    }   

    .imageSize {
        border-radius: 20px;
        width:10%;
        margin:0 auto;
    }

    .pageTitle {
        font-size:4vw;
    }

    .pageDescription {
        font-size:2vw;
    }

    .projectTitle {
        font-size:4vw;
        margin:10px 0;
        font-family: var(--h1-font);
    }

    .projectDescription{
        font-size:2vw;
        margin:10px 0;
        text-align:center;
    }
}
</style> 