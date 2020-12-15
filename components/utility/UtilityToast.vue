<template>
    <div class="toastBlock flexRowCenter">
        <p>
            {{ toastText }}
        </p>
    </div>
</template>

<script>
    export default {
        props: ['toastText'],
    }
</script>

<style scoped>
    .toastBlock {
        position:fixed;
        top:0;
        bottom:0;
        height:100vh;
        width:100vw;
        padding:10px;
        margin:0 0 10px 0;
        background:#eee;
        border:1px solid black;
    }
</style>