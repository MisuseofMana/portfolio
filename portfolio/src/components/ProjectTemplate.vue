<template>
    <div>
        <section class="hero">
            <h1>{{content.pageName}}</h1>
        </section>

        <section class="hero">
            <span v-for="(desc, index) in content.description" :key="desc[0]+index">
                <p v-html="desc"></p>
            </span>
        </section>

        <section class="cardBorder hero" v-for="(item, index) in this.content.links" :key="item.title + index">
            <h1>{{item.title}}</h1>
            <a :key="item.title + 'img'" :class="{'notAllowed' : !item.link, 'allowed' : item.link}" :href="item.link" target="_blank" @click="checkLink(item.link)">
                <img class="imageSize" :src="require(`@/assets/imgs/${item.background}.png`)" :alt="item.cardalt">
            </a>

            <p v-for="(sentence, index) in item.description" :key="sentence[0]+index">{{sentence}}</p>
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
    height:400px;
    width:90%;
    margin:0 auto;
}
</style> 