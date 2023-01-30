<script>
import projectCard from '../components/projectCard.vue';
import axios from 'axios';
import { store } from '../data/store'

export default {

    name: 'projects',
    components: {
        projectCard,
    },
    data() {
        return {
            url: 'http://127.0.0.1:8000/api/projects',
            store,

        }
    },
    methods: {
        getApi(url) {
            axios.get(url)
                .then(result => {
                    store.projects = result.data.data.data;
                    store.pageData = result.data.data;
                    console.log(result);
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
            <projectCard v-for=" project in store.projects" :key="project.id" :project="project" />
        </div>
        <div class="row">

            <div class="pagination justify-content-center ">

                <button v-for="(page, key) in store.pageData.links" @click="getApi(store.pageData.links[key].url)"
                    :key="(key)" class="btn btn-outline-light me-1" :disabled="(page.active ||
                    store.pageData.current_page == 1 && key == 0 ||
                    store.pageData.current_page == store.pageData.last_page && key == store.pageData.last_page + 1)">

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
