<template>
    <div class="hero">
        <section class="heroPadding">
            <section>
                <img class="imageFit" src="@/assets/imgs/propic.png" alt="">
                <h1>What's up!</h1>
                <p>I'm Sean Yager, a.k.a Shinbone, a.k.a Misuse of Mana, By day I code, create, and maintain a smattering of websites for my clients. By night I summon creatures, camaraderie, and conflicts to enrich my growing storytelling universe, the realm of Amara.</p>
                <p>I grew up in the cornfields of Indiana swinging tree branch swords and imagining backyard adventures. I went to college at IUPUI and Herron School of Art for several years before deciding that student debt was going to be a big burden. I took a hard pivot to learn Web Development via Austin Coding Academy and now I work as a freelancer in art and web design to offset my bills. I'm looking for more permenant work though so if you need a consultant, or an artist, or a website remodel please reach out!</p>
                <p>If you're interested in finding out more about my projects, I'm all over the place on social media just look me up!</p>
            </section>

            <h1 class="handle">@MisuseofMana</h1>

            <section class="flexRowAround">
                <SocialMedia/>
            </section>
        </section>
    </div>
</template>

<script>
    export default {
        head() {
        return {
            title: `About`,
            meta:  [
                    { property:"og:url", content:`@/assets/imgs/og/about.png` },
                    { property:"og:description", content:`All about Sean Yager. Sean is a freelance illustrator, web dev, writer, and well rounded dude.` },
                ]
            }
    }
    }
</script>

<style scoped>
img.imageFit{
    width:50%;
    border-radius:999px;
    margin:0 10px 10px 10px;
    float:right;
}

.handle {
    text-align:center;
}

/* Tablets and Up */
@media (min-width: 768px) {
    img.imageFit {
        width:40%;
    }

    .handle {
        text-align:right;
        margin-right:20px;
    }

}

@media (min-width: 1024px) {
    img.imageFit {
        width:30%;
        padding:20px;
    }
    
    h1 {
        text-align:left;
    }

    .handle {
        text-align:center;
        margin:20px;
    }
}

</style>