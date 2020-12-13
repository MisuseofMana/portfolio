<template>
    <section class="cardTemplate ifMobile">
        <section class="flexColumn">
            <transition name="fade" mode="out-in">
                <section :key="this.allProjects[this.currentNumber].title">
                    <section class='title'>
                        <h1>{{ allProjects[this.currentNumber].title}}</h1>
                        <p> {{ allProjects[this.currentNumber].category}} </p>
                    </section>
                </section>
            </transition>

            <section class="flexRow navRow">
                <Icon @click="backNavigation" name="arrow-circle-left" :scale="arrowSize" />

                <transition name="fade" mode="out-in">
                    <a :key="this.allProjects[this.currentNumber].title + 'imgSmall'" class="cardImage ifMobile" :class="{'notAllowed' : !allProjects[this.currentNumber].link, 'allowed' : allProjects[this.currentNumber].link}" :style="{backgroundImage: `url(${require(`@/assets/imgs/${allProjects[this.currentNumber].smallBackground}.png`)})`}" :href="allProjects[this.currentNumber].link" target="_blank" @click="checkLink"></a>
                </transition>
                
                <transition name="fade" mode="out-in">
                    <a :key="this.allProjects[this.currentNumber].title + 'imgBig'" class="cardImage ifDesktop" :class="{'notAllowed' : !allProjects[this.currentNumber].link, 'allowed' : allProjects[this.currentNumber].link}" :style="{backgroundImage: `url(${require(`@/assets/imgs/${allProjects[this.currentNumber].background}.png`)})`}" :href="allProjects[this.currentNumber].link" target="_blank" @click="checkLink"></a>
                </transition>

                <Icon @click="forwardNavigation" name="arrow-circle-right" :scale="arrowSize" />
            </section>
                    
                <transition name="fade" mode="out-in">
                    <section :key="this.allProjects[this.currentNumber].title  + 'describe'" class="description">
                        <p v-for="(sentences, index) in allProjects[this.currentNumber].description" :key='sentences[0]+index'>{{ sentences }}</p>
                    </section>
            </transition>
        </section>
    </section>
</template>

<script>
import Links from '@/plugins/links.js'

    export default {
        name: 'CardTemplate',
        data() {
            return {
                navigationAlert: {
                    theme: "outline", 
                    position: "bottom-center",
                    singleton:true
                },
                currentNumber: 0,
                arrowSize:2,
            }
        },
        methods: {
            checkLink() {
                if(!this.allProjects[this.currentNumber].link){
                    return false;
                }
                else {
                    return true;
                }
            },
            forwardNavigation() {
                if(this.currentNumber < this.allProjects.length-1) this.currentNumber++;
                else this.currentNumber = 0
            },
            backNavigation() {
                if(this.currentNumber > 0) this.currentNumber-- ;
                else this.currentNumber = this.allProjects.length - 1
            },
        },
        computed: {
            allProjects: function() {
                let allEntries = [
                    ...Links.comics.links,
                    ...Links.books.links,
                    ...Links.coding.links,
                    ...Links.podcasts.links,
                    ...Links.games.links,
                    ...Links.photography.links
                ]
                return allEntries;
            },
            beforeNumber: function () {
                if (this.currentNumber === 0 ) return this.allProjects.length-1
                else return this.currentNumber - 1
            },
            afterNumber: function () {
                if (this.currentNumber === this.allProjects.length-1) return 0
                else return this.currentNumber + 1
            },
        },
        created: function() {
            this.currentNumber = Math.floor(Math.random() * Math.floor(this.allProjects.length-1));
        },
    }
</script>

<style scoped>
.cardTemplate {
    margin: 0 0 20px 0;
}

.title {
    margin-bottom:15px;
}

h1 {
    text-align: center;
}

.navRow {
    width:100%;
}

a.cardImage {
    border-radius:20px;
    width:400px;
    height:400px;
    box-shadow:1px 1px 3px black;
    margin-bottom:15px;
    background-position: center;
    background-size: cover;
}

.description {
    min-height:140px;
}

.description p, p{
    text-align:center;
}

.notAllowed {
    cursor:not-allowed;
}

.allowed{
    cursor:pointer;
}

@media (min-width: 768px) {
.cardTemplate {
    padding: 0 0 20px 0;
}

a.cardImage {
    box-shadow:1px 1px 3px black;
    margin-bottom:15px;
    background-position: center;
    background-size: cover;
}

.description {
    min-height:100px;
}

.description p, p{
    text-align:center;
}
}



</style>