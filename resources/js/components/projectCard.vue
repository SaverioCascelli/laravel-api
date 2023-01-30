<script>
export default {
    name: 'projectCard',
    props: {
        project: Object,
    }
}
</script>


<template>
    <div class=" col-4 card-wrapper p-3">
        <div class="card project-card">

            <div class="card-title pt-2 ps-2">
                <router-link :to="{ name: 'show', params: { slug: project.slug } }">{{ project.name }}</router-link>
                <br>
                <p class="badge text-bg-success " v-if="project.type != null">{{ project.type.name }}</p>
            </div>

            <div class="card-body mt-2">
                <div class="card-text">
                    {{ project.summary }}
                </div>
                <div v-if="project.technologies > 0" class="technlogies-wrapper">

                    <p v-for="(technology, key) in project.technologies " :key="key" class="badge text-bg-primary me-1">
                        {{ technology.name }}
                    </p>
                </div>
            </div>
        </div>
    </div>

</template>


<style lang="scss" scoped>
@use '../../scss/appVue.scss';

.project-card {
    height: 200px;

    .card-title {
        height: 50px;
    }

    .card-text {
        height: 70px;
        overflow: hidden;
    }
}
</style>
