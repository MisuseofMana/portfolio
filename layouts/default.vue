<template>
    <div class="fullSite">
        <NavBar class="ifMobile"/>
        <DesktopNavBar class="ifDesktop"/>
        <Nuxt />
        <TheFooter />
    </div>
</template>

<style>
    .fullSite {
        width:100vw;
    }
</style>
