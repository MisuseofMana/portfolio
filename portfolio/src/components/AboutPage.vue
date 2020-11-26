<template>
    <div class="hero">
        <section>
            <img class="imageFit floatLeft" src="@/assets/imgs/propic.png" alt="">
            <h1>What's up!</h1>
        </section>

        <section>
            <p>I'm Sean Yager, a.k.a Shinbone, a.k.a Misuse of Mana, By day I code, create, and maintain a smattering of websites for my clients. By night I summon creatures, camaraderie, and conflicts to enrich my growing storytelling universe, the realm of Amara.</p>
        </section>

        <section>
            <p>I grew up in the cornfields of Indiana swinging tree branch swords and imagining backyard adventures. I went to college at IUPUI and Herron School of Art for several years before deciding that student debt was going to be a big burden. I took a hard pivot to learn Web Development via Austin Coding Academy and now I work as a freelancer in art and web design to offset my bills. I'm looking for more permenant work though so if you need a consultant, or an artist, or a website remodel please reach out!</p>
            <p>If you're interested in finding out more about my projects, I'm all over the place on social media just look me up!</p>
            <h1 class="handle">@MisuseofMana</h1>
        </section>

        <section class="socialMedia flexRowEnd">
            <a href="https://github.com/MisuseofMana"><img src="@/assets/imgs/icons/github.png" alt=""></a>
            <a href="https://www.instagram.com/misuseofmana/"><img src="@/assets/imgs/icons/instagram.png" alt=""></a>
            <a href="https://twitter.com/MisuseOfMana"><img src="@/assets/imgs/icons/twitter.png" alt=""></a>
            <a href="https://www.linkedin.com/in/seanyager/"><img src="@/assets/imgs/icons/linkedin.png" alt=""></a>
        </section>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.imageFit {
    width:50%;
    padding:5px;
}

.socialMedia img {
    width:50px;
    margin:10px;
}

/* Mobile Portrtait */
@media (min-width: 500px) {

}

/* Tablets and Up */
@media (min-width: 768px) {
    .imageFit {
        width:30%;
        padding:10px;
    }

    .socialMedia img {
        width:100px;
        margin:10px;
    }
    h1 {
        font-size:9vw;
    }

    p  {
        font-size:4vw;
        font-weight:100;
    }
}

@media (min-width: 1024px) {
    .imageFit {
        width:15%;
        padding:40px;
    }

    .socialMedia img {
        width:75px;
        margin:10px;
    }
    h1 {
        font-size:5vw;
        text-align:left;
    }

    p {
        font-size:1.7vw;
    }

    .handle {
        text-align:right;
        margin-right:20px;
    }

    .socialMedia {
        margin-left:auto;
    }

    .socialMedia a {
        margin:0 20px 0 0;
    }

    .socialMedia a:hover > img {
        box-shadow:0px 0px 10px 2px rgb(0, 116, 124);
    }
}

</style>