<template>
    <div class="hero">
        <section class="flexRowAbout">
    
        <img class="imageFit" src="@/assets/imgs/propic.png" alt="">
      
        <section>
            <h1>What's up!</h1>
            <p>I'm Sean Yager, a.k.a Shinbone, a.k.a Misuse of Mana, By day I code, create, and maintain a smattering of websites for my clients. By night I summon creatures, camaraderie, and conflicts to enrich my growing storytelling universe, the realm of Amara.</p>
            <p>I grew up in the cornfields of Indiana swinging tree branch swords and imagining backyard adventures. I went to college at IUPUI and Herron School of Art for several years before deciding that student debt was going to be a big burden. I took a hard pivot to learn Web Development via Austin Coding Academy and now I work as a freelancer in art and web design to offset my bills. I'm looking for more permenant work though so if you need a consultant, or an artist, or a website remodel please reach out!</p>
            <p>If you're interested in finding out more about my projects, I'm all over the place on social media just look me up!</p>
            <h1 class="handle">@MisuseofMana</h1>
            <SocialMedia/>
        </section>

        </section>
    </div>
</template>

<style scoped>
.imageFit {
    width:50%;
    padding:5px;
}



/* Mobile Portrtait */
@media (min-width: 500px) {

}

/* Tablets and Up */
@media (min-width: 768px) {
    .imageFit {
        width:30%;
        padding:0px 25px;
    }

    .socialMedia img {
        width:100px;
        margin:10px;
    }

    h1 {
        font-size:9vw;
        text-align:left;
    }

    .handle {
        text-align:right;
        margin-right:20px;
    }

    p  {
        font-size:3.4vw;
        font-weight:100;
    }
}

@media (min-width: 1024px) {
    .flexRowAbout {
        display:flex;
        flex-direction: row;
        align-items: center;
        justify-content:center;
    }
    .imageFit {
        width:100%;
        padding:0px 40px;
    }
    
    h1 {
        font-size:4vw;
        text-align:left;
    }

    p {
        font-size:1.3vw;
        text-align:left;
    }

    .handle {
        text-align:right;
        margin-right:20px;
    }
}

</style>