
<script>
export default {
    name: 'Header'
}
</script>
<template>

    <ul>
        <li>
            <router-link :to="{name:'home'}">home</router-link>
        </li>
        <li>
            <router-link :to="{name:'test'}">test</router-link>
        </li>
    </ul>

</template>

<style>

</style>
