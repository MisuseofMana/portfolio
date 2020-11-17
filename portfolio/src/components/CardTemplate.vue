<template>
    <section class="cardTemplate" :key="links[this.currentNumber].title">

        <p class="leftArrow flexCenter" @click="backNavigation"><v-icon name="arrow-circle-left" scale="2"></v-icon></p>
        
        <h1 class="title">{{ links[this.currentNumber].title}}</h1>
            
        <a class="cardImage" :class="{'notAllowed' : !links[this.currentNumber].link, 'allowed' : links[this.currentNumber].link}" :style="{backgroundImage: `url(${require(`@/assets/imgs/${links[this.currentNumber].background}.png`)})`}" :href="links[this.currentNumber].link" target="_blank" @click="checkLink"></a>
    
        <section class="description">
            <p v-for="(sentences, index) in links[this.currentNumber].description" :key='sentences[0]+index'>{{ sentences }}</p>
        </section>

        <p class="rightArrow flexCenter" @click="forwardNavigation"><v-icon name="arrow-circle-right" scale="2"></v-icon></p>
    </section>
</template>

<script>
    export default {
        name: 'CardTemplate',
        props:['links'],
        data() {
            return {
                navigationAlert: {
                    theme: "outline", 
                    position: "bottom-center",
                    duration:3500,
                    singleton:true
                },
                currentNumber: 0,
                navigated: 0,
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
        created: function() {
            this.currentNumber = Math.floor(Math.random() * Math.floor(this.links.length-1));
        }
    }
</script>

<style scoped>
/* Mobile Styles */
.cardTemplate {
    display:grid;
    height:250px;
    grid-template-rows:1fr 1fr 1fr;
    grid-template-columns:1fr 3fr 1fr;
    grid-template-areas:
    "title title title"
    "arrowLeft card arrowRight"
    "about about about"
    ;
    border-radius:20px;
    margin:0 auto;
    text-decoration:none;
}

.title {
    grid-area: title;
    font-size:8vw;
}

.cardImage {
    display:block;
    border-radius:20px;
    width:100%;
    min-height:140px;
    background-position: center;
    background-size: cover;
    grid-area:card;
}

.description {
    grid-area:about;
    font-size:4vw;
}

.leftArrow {
 grid-area:arrowLeft;
}

.rightArrow {   
    grid-area:arrowRight;
}

.notAllowed {
    cursor:not-allowed;
}

.allowed{
    cursor:pointer;
}

/* Mobile Portrtait */
@media (min-width: 667px) {
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