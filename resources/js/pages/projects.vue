<script>
import projectCard from '../components/projectCard.vue';
import axios from 'axios';

export default {

    name: 'projects',
    components: {
        projectCard,
    },
    data() {
        return {
            url: 'http://127.0.0.1:8000/api/projects',
            projects: [],

            pageData: [],
        }
    },
    methods: {
        getApi(url) {
            axios.get(url)
                .then(result => {
                    this.projects = result.data.data.data;
                    this.pageData = result.data.data;
                    console.log(this.pageData);
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
        <div class="row justify-content-between">
            <projectCard v-for=" project in projects" :key="project.id" :project="project" />
        </div>
        <div class="row">

            <div class="pagination justify-content-center ">

                <button v-for="(page, key) in pageData.links" @click="getApi(pageData.links[key].url)" :key="(key)"
                    class="btn btn-outline-light me-1"
                    :disabled="(page.active || pageData.current_page == 1 && key == 0 || pageData.current_page == pageData.last_page && key == pageData.last_page + 1)">

                    <span v-html="page.label"></span>
                </button>

            </div>
        </div>

    </div>
</template>
<style scoped lang="scss">
@use '../../scss/appVue.scss';

.container {

    .pagination {
        margin-top: 80px;


    }
}
</style>
