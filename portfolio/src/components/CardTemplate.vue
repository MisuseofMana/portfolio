<template>
    <section class="cardTemplate flexColumn">
            <transition name="fade" mode="out-in">
                <section :key="this.links[this.currentNumber].title">
                    <section class='title'>
                        <h1>{{ links[this.currentNumber].title}}</h1>
                        <p> {{ links[this.currentNumber].category}} </p>
                    </section>
                </section>
            </transition>

            <section class="flexRow navRow">
                <v-icon @click="backNavigation" name="arrow-circle-left" scale="3"></v-icon>
                
                <transition name="fade" mode="out-in">
                    <a :key="this.links[this.currentNumber].title + 'img'" class="cardImage ifDesktop" :class="{'notAllowed' : !links[this.currentNumber].link, 'allowed' : links[this.currentNumber].link}" :style="{backgroundImage: `url(${require(`@/assets/imgs/${links[this.currentNumber].background}.png`)})`}" :href="links[this.currentNumber].link" target="_blank" @click="checkLink"></a>
                </transition>

                <transition name="fade" mode="out-in">
                    <a :key="this.links[this.currentNumber].title + 'imgSmall'" class="cardImage ifMobile" :class="{'notAllowed' : !links[this.currentNumber].link, 'allowed' : links[this.currentNumber].link}" :style="{backgroundImage: `url(${require(`@/assets/imgs/${links[this.currentNumber].smallBackground}.png`)})`}" :href="links[this.currentNumber].link" target="_blank" @click="checkLink"></a>
                </transition>

                <v-icon @click="forwardNavigation" name="arrow-circle-right" scale="3"></v-icon>
            </section>
                    
                <transition name="fade" mode="out-in">
                    <section :key="this.links[this.currentNumber].title  + 'describe'" class="description">
                        <p v-for="(sentences, index) in links[this.currentNumber].description" :key='sentences[0]+index'>{{ sentences }}</p>
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
                links,
            }
        },
        methods: {
            checkLink() {
                if(!this.links[this.currentNumber].link){
                    return false;
                }
                else {
                    return true;
                }
            },
            forwardNavigation() {
                if(this.currentNumber < this.links.length-1) this.currentNumber++;
                else this.currentNumber = 0
                this.navigated++
                this.checkNavigation()
            },
            backNavigation() {
                if(this.currentNumber > 0) this.currentNumber-- ;
                else this.currentNumber = this.links.length - 1
                this.navigated++
                this.checkNavigation()
            },
            checkNavigation() {
                if(this.navigated === 3) this.showToast()
            },
            showToast() {
                this.$toasted.show('Tip: Try clicking an image to find out more about that project.', this.navigationAlert)
            },
        },
        computed: {
            beforeNumber: function () {
                if (this.currentNumber === 0 ) return this.links.length-1
                else return this.currentNumber - 1
            },
            afterNumber: function () {
                if (this.currentNumber === this.links.length-1) return 0
                else return this.currentNumber + 1
            },
        },
        created: function() {
            this.currentNumber = Math.floor(Math.random() * Math.floor(this.links.length-1));
        },
        mounted: function () {
            console.log(this.links)
        }
    }
</script>

<style scoped>
/* Mobile Styles */

.cardNav {
    height:150px;
    width:150px;
    margin: 0 0 20px 0;
}

.title {
    margin-bottom:15px;
}

.title h1 {
    font-size:8vw;
    margin:0px;
}

.title p {
    font-size:4vw;
    margin:0px;
}

.navRow {
    width:100%;
}

.cardSizing {
    width:7%;
    height:100px;
    background-position: center;
    background-size: cover;
    border-radius:20px;
    position:relative;
    opacity:.6;
}

a.cardImage {
    display:block;
    border-radius:20px;
    width:150px;
    box-shadow:1px 1px 3px black;
    height:150px;
    background-position: center;
    background-size: cover;
}

a.cardImage.ifDesktop {
    display:none;
}

a.cardImage.ifMobile {
    display:block;
}

.description {
    margin:10px;
    font-size:4vw;
    height:100px;
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
}

</style>