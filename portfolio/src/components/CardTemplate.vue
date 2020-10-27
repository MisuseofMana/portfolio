<template>
    <section class="cardBody" :class="{'notAllowed' : !link, 'allowed' : link}">
        <a :href="link" target="_blank" @click="checkLink">>
            <section class="cardImage" :style="{backgroundImage: `url(${require(`@/assets/imgs/${background}.png`)})`}">
                <!-- <img :src="require(`@/assets/imgs/${backgroundImage}.png`)" :alt="cardAlt"> -->
            </section>
            <section class="cardOverlay">
                <h1>{{ title }}</h1>
                <p v-for="(sentences, index) in description" :key='sentences[0]+index'>{{ sentences }}</p>
            </section>
        </a>
    </section>
</template>

<script>
    export default {
        name: 'CardTemplate',
        props:['background', 'card-alt', 'title', 'description', 'link', 'enabled'],
        methods: {
            checkLink() {
                if(!this.link){
                    return false;
                }
                else {
                    return true;
                }
            }
        }
    }
</script>

<style scoped>
.cardBody, a {
    width:400px;
    height:550px;
    display:grid;
    grid-template-rows:5fr 1fr 1fr 1fr 1fr;
    grid-template-columns:550px;
    border-radius:20px;
    margin-bottom:20px;
    text-decoration:none;
}

.allowed a:hover > .cardImage {
    filter:blur(2px) brightness(1.2);
}

.notAllowed a:hover > .cardImage {
    filter:blur(2px) brightness(.3) grayscale(1);
}

.cardBody a:hover > .cardOverlay h1, a:hover > .cardOverlay p, a:hover {
    color:rgb(255, 255, 255);
}

a:hover > .cardOverlay {
    opacity:1;
    background:rgba(0,0,0,.6);
    border-radius:20px;
}

.cardBody:not(:last-child) {
    margin-right:20px;
}

.cardImage {
    border-radius:20px;
    width:400px;
    height:550px;
    background-position: top;
    background-size: cover;
    grid-row:1 / 6;
    grid-column: 1 / 3;
    z-index:0;
}

.cardOverlay {
    width:400px;
    height:550px;
    grid-row:1 / 6;
    grid-column:1 / 3;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    text-align:center;
    background: rgba(0,0,0,0);
    color:white;
    z-index:1;
    opacity:0;
}

h1 {
    color:white;
    font-size:2em;
}

.notAllowed {
    cursor:not-allowed;
}

.allowed{
    cursor:pointer;
}

</style>