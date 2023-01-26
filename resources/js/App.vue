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
      pageData:[],
   }
  },
  methods:{
    getApi(url){
      axios.get(url)
        .then(result =>{
          this.projects = result.data.data.data;
            this.pageData = result.data.data;
          console.log(this.pageData.links[1].url);
        })
    }
  },
  mounted(){
    this.getApi(this.url);
  }

}


</script>

<template>
  <main>

    <div class="container">
        <div class="project-container">
        <projectCard
        v-for="project in projects"
        :key="project.id"
        :name="project.name"
        :text="project.summary"
        />
        </div>

        <div class="pagination">
            <button
                v-for="(page,key) in pageData.last_page"
                @click="getApi(pageData.links[key+1].url)"
                :key = "(key + 1)"
            >{{ key + 1 }}</button>
        </div>
    </div>
  </main>

</template>

<style scoped lang="scss">
@use '../scss/appVue.scss';

.container{
    width: 80%;
    margin: auto;
    .pagination{
        margin-top: 80px;
        button{
            width: 30px;
            aspect-ratio: 1 / 1;
        }
    }
}
.project-container{
  display: flex;
  flex-wrap: wrap;
  }

</style>
