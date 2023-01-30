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

        <div class="pagination">
            <button v-for="(page, key) in pageData.links" @click="getApi(pageData.links[key].url)" :key="(key)">
                <span v-if="key == 0"><i class="bi bi-arrow-left-short"></i></span>
                <span v-if="key > 0 && key < pageData.links.length - 1">{{ key }}</span>

                <span v-if="key == pageData.links.length"><i class="bi bi-arrow-right-short"></i></span>
            </button>

        </div>
    </div>
</template>
<style scoped lang="scss">
@use '../../scss/appVue.scss';

.container {

    .pagination {
        margin-top: 80px;

        button {
            width: 30px;
            aspect-ratio: 1 / 1;
        }
    }
}
</style>
