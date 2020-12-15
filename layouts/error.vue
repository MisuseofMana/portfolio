<template>
    <div class="hero flexColumn">
        <h1>Oops! Error 404</h1>
        <h2>Not Found</h2>
        <img :src="`${require(`@/assets/imgs/${randomNumber}.png`)}`" alt="">
        <p>Sorry! Something went wrong here, this page couldn't be found.</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            randomNumber: 0,
        }
    },
    created: function() {
        this.randomNumber = Math.floor(Math.random() * (20 - 1 + 1) + 1);
    }
}
</script>

<style scoped>
img {
    width:300px;
}

.hero {
    text-align:center;
}
</style>