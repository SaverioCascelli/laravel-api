<script>
import axios from 'axios';
export default {
    name: 'projectShow',

    data() {
        return {
            url: 'http://127.0.0.1:8000/api/projects',
            project: {},

            pageData: [],
        }
    },
    methods: {
        getApi(url) {
            axios.get(url + '/' + this.$route.params.slug)
                .then(result => {
                    this.project = result.data.project;
                    console.log(this.project);
                })
        }
    },
    mounted() {
        this.getApi(this.url);
    }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h1 class="col-white"> name {{ project.name }}</h1>
                <img :src="project.img" :alt="project.name">
                <div class="text" v-html="project.summary"></div>

            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>
