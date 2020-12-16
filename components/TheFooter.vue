<template>
    <footer>
        <section class='footerWrapper'>
            <section class="quote">
                <h1>Black Lives Matter</h1>
            </section>
            
            <section class="links">
                <h2>My Friends &amp; Their Work</h2>
                <section class="flexRowWrap">
                    <a target="_blank" href="https://www.instagram.com/threepanelorigin">Dan Wolff</a>
                    <a target="_blank" href="https://www.instagram.com/threepanelorigin">Three Panel Origin</a>
                    <a target="_blank" href="https://bakanobingo.com/">Baka No Bingo</a>
                    <a target="_blank" href="https://www.instagram.com/drawdillondraw">DrawDillonDraw</a>
                    <a target="_blank" href="https://www.instagram.com/treyzart">TreyZArt</a>
                    <a target="_blank" href="https://www.instagram.com/darcybabs">DarcyBabs</a>
                    <a target="_blank" href="https://www.twitter.com/moegeemoe">MoeGeeMoe</a>
                    <a target="_blank" href="https://www.instagram.com/joshhainesart">JoshHainesArt</a>
                    <a target="_blank" href="https://www.instagram.com/justinsmithart">JustinSmithArt</a>
                </section>
            </section>

            <section class="title">
                <h3><NuxtLink to="/">SEANYAGER.COM</NuxtLink></h3>
            </section>

            <section class="updated flexColumn">
                <p>©2020 Sean Yager · All rights reserved</p>
            </section>
        </section>
    </footer>
</template>

<style scoped>
    footer {
        width:100vw;
        background:white;
        text-align:center;
        border-top: solid 2px black
    }

    .footerWrapper {
        width:90%;
        padding:10px;
        max-width:1400px;
        margin:0 auto;
        display:grid;
        grid-column-gap: 10px;
        grid-template-columns: auto;
        grid-template-rows: auto;
        grid-template-areas:
        "quote"
        "links"
        "title" 
        "updated"
    }

    .quote, .links, .title {
        margin-bottom:20px;
    }
    
    .quote {
        grid-area: quote;
    }

    .links {
        grid-area: links;
    }

    .links a {
        text-decoration:none;
        border-radius:10px;
        padding:10px;
        margin:10px;
        text-indent: 0px;
        color:black;
        background:rgb(243, 243, 243);
        box-shadow: 2px 2px 1px rgb(206, 206, 206);
    }
    
    .links a:hover{
        cursor:pointer;
        background-color:var(--primary-color);
        color:white;
    }

    .title {
        grid-area: title;
        display:flex;
        align-items:center;
        justify-content: center;
    }

    .updated {
        grid-area: updated;
    }

@media (min-width: 768px) {
    .footerWrapper {
        width:90%;
        padding:10px;
        max-width:1400px;
        margin:0 auto;
        display:grid;
        grid-column-gap: 10px;
        grid-template-columns: 50% 50%;
        grid-template-rows: auto;
        grid-template-areas:
        "quote links"
        "title updated"
    }

    h1 {
        font-size:10vw;
    }

    h2 {
        font-size:5vw;
    }

    a {
        font-size:3vw;
    }

    p {
        font-size:3vw;
        line-height:3.2vw;
    }
}

@media (min-width: 1024px) {
    .footerWrapper {
        padding:20px;
        grid-template-areas:
        "quote links"
        "title updated"
    }

    h1 {
        font-size:5vw;
    }

    h2 {
        font-size:2vw;
    }

    a {
        font-size:2vw;
    }

    p {
        font-size:2vw;
        line-height:2.2vw;
    }

    .links li {
        border-radius:20px;
        text-indent: 0px;
        color:black;
        background:rgb(243, 243, 243);
        box-shadow: 2px 2px 1px rgb(206, 206, 206);
    }
    
    .links li:hover{
        cursor:pointer;
        background-color:var(--primary-color);
        color:white;
    }

    .quote, .links {
        margin-bottom:50px;
    }
}
    
</style>