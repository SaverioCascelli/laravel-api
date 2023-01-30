
<script>
import axios from 'axios';
import { store } from '../data/store'

export default {
    name: 'Header',
    data() {
        return {
            store,
            tosearch: '',
            projects: [],
        }
    },
    methods: {
        getApi() {
            axios.get('http://127.0.0.1:8000/api/projects/search', {
                params: {
                    tosearch: this.tosearch,
                }
            })
                .then(result => {
                    store.projects = result.data.data.data;
                    store.pageData = result.data.data;
                    this.tosearch = '';
                    console.log(store.projects);
                    console.log(store.pageData);

                })
        }
    }
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
        <div class="row justify-content-between">
            <div class="col-3">technologies</div>

            <div class="col-3">type</div>

            <div class="col-3 search d-flex">
                <div class="input-group bg-white rounded-pill">
                    <input v-model.trim="tosearch" placeholder="Search" type="text" class="form-control">
                    <div class="input-group-append">
                        <button @click="getApi" class="btn btn-light" type="button"><svg
                                xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-search" viewBox="0 0 16 16">
                                <path
                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg></button>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>

<style lang="scss" scoped>
ul {
    list-style: none;
    display: flex;
    gap: 1rem;
}

.search {
    overflow: hidden;

    .form-control {
        box-shadow: none;
        outline: 0px;
        border: 0;
    }
}
</style>
