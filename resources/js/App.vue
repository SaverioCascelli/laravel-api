<script>
import projectCard from './components/projectCard.vue';
import axios from 'axios';


export default{
  components: { projectCard },
  name:'App',
  data(){
    return{
      url: 'http://127.0.0.1:8000/api/projects',
      projects:[],
   }
  },
  methods:{
    getApi(){
      axios.get(this.url)
        .then(result =>{
          this.projects = result.data.data;

          console.log(this.projects);
        })
    }
  },
  mounted(){
    this.getApi();
  }

}


</script>

<template>
  <main>

    <div class="project-container">
      <projectCard
      v-for="project in projects"
      :key="project.id"
      :name="project.name"
      :text="project.summary"
      />
    </div>

  </main>

</template>

<style scoped lang="scss">
@use '../scss/appVue.scss';
.project-container{
  width: calc(100%);
  margin: 25px;
  display: flex;
  flex-wrap: wrap;
  }

</style>
