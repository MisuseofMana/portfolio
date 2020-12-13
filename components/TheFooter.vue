<template>
    <footer>
        <section class='footerWrapper'>
            <section class="quote">
                <h1>Black Lives Matter</h1>
            </section>
            
            <section class="links">
                <h2>My Friends and Their Work</h2>
                <ul class="flexRowWrap">
                    <a target="_blank" href="https://www.instagram.com/threepanelorigin"><li>Dan Wolff</li></a>
                    <a target="_blank" href="https://www.instagram.com/threepanelorigin"><li>Three Panel Origin</li></a>
                    <a target="_blank" href="https://bakanobingo.com/"><li>Baka No Bingo</li></a>
                    <a target="_blank" href="https://www.instagram.com/drawdillondraw"><li>DrawDillonDraw</li></a>
                    <a target="_blank" href="https://www.instagram.com/treyzart"><li>TreyZArt</li></a>
                    <a target="_blank" href="https://www.instagram.com/darcybabs"><li>DarcyBabs</li></a>
                    <a target="_blank" href="https://www.twitter.com/moegeemoe"><li>MoeGeeMoe</li></a>
                    <a target="_blank" href="https://www.instagram.com/joshhainesart"><li>JoshHainesArt</li></a>
                    <a target="_blank" href="https://www.instagram.com/justinsmithart"><li>JustinSmithArt</li></a>

                </ul>
            </section>

            <section class="title">
                <h3><NuxtLink to="/">SEANYAGER.COM</NuxtLink></h3>
            </section>

            <section class="updated">
                <p>©2020 Sean Yager · All rights reserved</p>
            </section>
        </section>
    </footer>
</template>

<style scoped>
    footer {
        width:100%;
        margin:0 auto;
        background:white;
        text-align:center;
    }

    .footerWrapper {
        width:90%;
        padding:50px;
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

    .footerTop {
        margin-bottom:30px
    }

    .quote, .links, .title {
        margin-bottom:50px;
    }
    
    .quote {
        grid-area: quote;
    }

    .links {
        grid-area: links;
    }

    .links ul {
        list-style: none;
    }

    .links a {
        text-decoration:none;
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
    
}

@media (min-width: 1024px) {
    .footerWrapper {
        grid-template-areas:
        "quote links"
        "title updated"
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