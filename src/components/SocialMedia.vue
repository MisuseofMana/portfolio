<template>
    <section class="socialMedia">
        <a href="https://github.com/MisuseofMana" target="_blank"><img src="../assets/imgs/icons/github.png" alt=""></a>
        <a href="https://www.instagram.com/misuseofmana/" target="_blank"><img src="../assets/imgs/icons/instagram.png" alt=""></a>
        <a href="https://twitter.com/MisuseOfMana" target="_blank"><img src="../assets/imgs/icons/twitter.png" alt=""></a>
        <a href="https://www.linkedin.com/in/seanyager/" target="_blank"><img src="../assets/imgs/icons/linkedin.png" alt=""></a>
        <a href="https://www.gumroad.com/misuseofmana" target="_blank"><img src="../assets/imgs/icons/gumroad.png" alt=""></a>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.socialMedia {
    width:100%;
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.socialMedia img {
    width:30px;
    margin:10px;
}

@media (min-width: 768px) {
    .socialMedia {
    width:100%;
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
}

    .socialMedia img {
        width:60px;
        margin:10px;
    }
}

@media (min-width: 1024px) {
      .socialMedia img {
        width:50px;
        margin:10px;
    }

    .socialMedia a {
        margin:0 20px 0 0;
    }

    .socialMedia a:hover > img {
        box-shadow:0px 0px 10px 2px rgb(0, 116, 124);
    }
}
</style>