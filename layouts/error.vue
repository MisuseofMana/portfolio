<template>
    <div class="hero">
        <h1>404</h1>
        <p>Sorry! Something went wrong here, this page couldn't be found.</p>
        <img :src="`${require(`@/assets/imgs/${randomNumber}.png`)}`" alt="">
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
    width:400px;
}
</style>