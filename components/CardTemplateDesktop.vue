<template>
    <section class="cardTemplate ifDesktop">
        <section class="flexRowWrap">
            <section class="projectWrapper" v-for="(project, index) in this.allProjects" :key="project.title + index" :style="{backgroundImage: `url(${require(`@/assets/imgs/${project.background}.png`)})`}">   
                <section class='projectOverlay flexColumn' :key="project.title">
                    <h1>{{ project.title}}</h1>
                    <p> {{ project.category}} </p>
                    
                    <section :key="project.title  + 'describe'" class="description">
                        <p v-for="(sentences, index) in project.description" :key='sentences[0]+index'>{{ sentences }}</p>
                    </section>

                    <a v-if="project.link" :href="project.link" target="_bla" class="link">See More</a>
                </section>
            </section>
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
                navigated: 0,
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
            checkNavigation() {
                if(this.navigated === 3) this.showToast()
            },
            showToast() {
                this.$toasted.show('Tip: Try clicking an image to find out more about that project.', this.navigationAlert)
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

h1 {
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
    font-size:1.4vw;
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

</style>