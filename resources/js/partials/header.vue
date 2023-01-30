
<script>
export default {
    name: 'Header'
}
</script>
<template>
    <div class="container mt-5">
        <div class="row">
            <ul class="col">
                <li>
                    <router-link class="btn btn-warning" :to="{ name: 'home' }">home</router-link>
                </li>
                <li>
                    <router-link class="btn btn-warning" :to="{ name: 'projects' }">projects</router-link>
                </li>
            </ul>
        </div>
    </div>


</template>

<style lang="scss" scoped>
ul {
    list-style: none;
    display: flex;
    gap: 1rem;


}
</style>
