<script>
import Header from './partials/header.vue'

export default {
    components: {
        Header,
    },

}


</script>

<template>
    <header>
        <Header />

    </header>
    <main>



        <router-view></router-view>

    </main>

</template>

<style scoped lang="scss">

</style>
