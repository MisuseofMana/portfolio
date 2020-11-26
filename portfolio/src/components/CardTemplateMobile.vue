<template>
    <section class="cardTemplate flexColumn">
            <transition name="fade" mode="out-in">
                <section :key="this.allProjects[this.currentNumber].title">
                    <section class='title'>
                        <h1>{{ allProjects[this.currentNumber].title}}</h1>
                        <p> {{ allProjects[this.currentNumber].category}} </p>
                    </section>
                </section>
            </transition>

            <section class="flexRow navRow">
                <v-icon @click="backNavigation" name="arrow-circle-left" :scale="arrowSize"></v-icon>
                
                <transition name="fade" mode="out-in">
                    <a :key="this.allProjects[this.currentNumber].title + 'img'" class="cardImage ifDesktop" :class="{'notAllowed' : !allProjects[this.currentNumber].link, 'allowed' : allProjects[this.currentNumber].link}" :style="{backgroundImage: `url(${require(`@/assets/imgs/${allProjects[this.currentNumber].background}.png`)})`}" :href="allProjects[this.currentNumber].link" target="_blank" @click="checkLink"></a>
                </transition>

                <transition name="fade" mode="out-in">
                    <a :key="this.allProjects[this.currentNumber].title + 'imgSmall'" class="cardImage ifMobile" :class="{'notAllowed' : !allProjects[this.currentNumber].link, 'allowed' : allProjects[this.currentNumber].link}" :style="{backgroundImage: `url(${require(`@/assets/imgs/${allProjects[this.currentNumber].smallBackground}.png`)})`}" :href="allProjects[this.currentNumber].link" target="_blank" @click="checkLink"></a>
                </transition>

                <v-icon @click="forwardNavigation" name="arrow-circle-right" :scale="arrowSize"></v-icon>
            </section>
                    
                <transition name="fade" mode="out-in">
                    <section :key="this.allProjects[this.currentNumber].title  + 'describe'" class="description">
                        <p v-for="(sentences, index) in allProjects[this.currentNumber].description" :key='sentences[0]+index'>{{ sentences }}</p>
                    </section>
            </transition>
    </section>
</template>

<script>
import Links from '../plugins/links.js'

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
                navigated: 0,
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
                this.navigated++
                this.checkNavigation()
            },
            backNavigation() {
                if(this.currentNumber > 0) this.currentNumber-- ;
                else this.currentNumber = this.allProjects.length - 1
                this.navigated++
                this.checkNavigation()
            },
            checkNavigation() {
                if(this.navigated === 3) this.showToast()
            },
            showToast() {
                this.$toasted.show('Tip: Try clicking an image to find out more about that project.', this.navigationAlert)
            },
            resizeIcons: function() {
                const mobilePortSize = window.matchMedia( "(max-width: 500px)" );
                const tabletSize = window.matchMedia( "(max-width: 768px)" );
                if(mobilePortSize.matches && !tabletSize.matches){
                    this.arrowSize = 4;
                }
                else if (tabletSize.matches && !mobilePortSize.matches){
                    this.arrowSize = 5;
                }
                else this.arrowSize = 2
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
        mounted: function() {
            this.resizeIcons()
        }
    }
</script>

<style scoped>
/* Mobile Styles */
.cardTemplate {
    margin: 0 0 20px 0;
}

.title {
    margin-bottom:15px;
}

h1 {
    font-size:8vw;
    margin:0px;
    text-align: center;
}

.navRow {
    width:100%;
}


a.cardImage {
    display:block;
    border-radius:20px;
    width:150px;
    box-shadow:1px 1px 3px black;
    height:150px;
    margin-bottom:15px;
    background-position: center;
    background-size: cover;
}

.description {
    min-height:140px;
}

.description p, p{
    margin:10px;
    font-size:5vw;
    font-weight:100;
    text-align:center;
}

.notAllowed {
    cursor:not-allowed;
}

.allowed{
    cursor:pointer;
}

/* Mobile Portrtait */
@media (min-width: 500px) {

}

/* Tablets and Up */
@media (min-width: 768px) {
.cardTemplate {
    padding: 0 0 20px 0;
}

h1 {
    font-size:5vw;
    margin:0px;
    text-align: center;
}

a.cardImage {
    width:270px;
    height:410px;
    box-shadow:1px 1px 3px black;
    margin-bottom:15px;
    background-position: center;
    background-size: cover;
}

a.cardImage.ifDesktop {
    display:block;
}

a.cardImage.ifMobile {
    display:none;
}

.description {
    min-height:100px;
}

.description p, p{
    margin:10px;
    font-size:2.7vw;
    font-weight:100;
    text-align:center;
}
}

</style>