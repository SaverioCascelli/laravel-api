<script>
export default {
    name:'projectCard',
    props:{
        name:String,
        text:String,
    }
}
</script>


<template>
    <div class="project-card">
        <div class="card-title">
            <strong>Title:{{ name }}</strong>
        </div>

        <div class="card-text">
            {{ text }}
        </div>
    </div>

</template>


<style lang="scss" scoped>
.project-card{
    width: calc((100% / 5) );
    padding: 10px;
    margin: 10px 0 10px 0;
    height: 150px;
    overflow: hidden;
}
</style>
