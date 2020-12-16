<template>
    <section class="cardTemplate ifMobile">
        
        <section class="flexColumn">
            <transition name="fade" mode="out-in">
                <section class="cardHeader" :key="this.allProjects[this.currentNumber].title">
                    <section class='title'>
                        <h1>{{ allProjects[this.currentNumber].title}}</h1>
                        <h2> {{ allProjects[this.currentNumber].category}} </h2>
                    </section>
                </section>
            </transition>
            
            <section class="flexRow navRow">
                <Icon @click="backNavigation" name="arrow-circle-left" class="arrow"/>

                <transition name="fade" mode="out-in">
                    <a :key="this.allProjects[this.currentNumber].title + 'imgSmall'" class="cardImage ifMobile" :style="{backgroundImage: `url(${require(`@/assets/imgs/${allProjects[this.currentNumber].smallBackground}.png`)})`}" :href="allProjects[this.currentNumber].link" target="_blank" @click="checkLink"></a>
                </transition>

                <Icon @click="forwardNavigation" name="arrow-circle-right" class="arrow"/>
            </section>
                    
            <transition name="fade" mode="out-in">
                <section v-for="(sentences, index) in allProjects[this.currentNumber].description" :key="sentences.length+index" class="description">
                    <p :key="sentences.length+'sent'">{{ sentences }}</p>
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
                currentNumber: 0,
                toolTip: 0,
                // toast: false,
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
                else this.currentNumber = this.allProjects.length - 1;
            },
            // tooltipCheck() {
            //     this.toolTip++
            //     if(this.toolTip === 4){
            //         this.toggleToast();
            //     }
            // },
            // toggleToast() {
            //     this.toast = !this.toast
            //     setTimeout(() => { this.toast = !this.toast }, 3000);
            // }
        },
        computed: {
            allProjects: function() {
                let allEntries = [
                    ...Links.comics.links,
                    ...Links.books.links,
                    ...Links.coding.links,
                    ...Links.podcasts.links,
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
    margin: 0 0 10px 0;
}

.cardHeader {
    margin-bottom:10px;
}

.title {

    text-align:center;
}

h1 {
    text-align: center;
}

.navRow {
    width:100%;
}

a.cardImage {
    border-radius:20px;
    width:150px;
    height:150px;
    box-shadow:1px 1px 3px black;
    margin-bottom:15px;
    background-position: center;
    background-size: cover;
}

.description {
    text-align:center;
}

.notAllowed {
    cursor:not-allowed;
}

.allowed{
    cursor:pointer;
}

.arrow {
    width: auto;
    height: 9vw; 
    max-width: 100%;
    max-height: 100%;
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
}
</style>