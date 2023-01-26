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


<style>
.project-card{
    width: calc(100% / 6);
    margin: 10px;
}
</style>