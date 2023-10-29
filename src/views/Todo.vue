import SingleProject from '@/components/ُSingleProject.vue';
<template>
  
  <div v-if="projects">
    
    <div v-for="project in projects"  :key="project.id" >

<SingleProject :project="project"   @delete="handleDelete"/>
      

 

    </div>


  </div>

 </template>
 
 <script>

 import SingleProject from '@/components/ُSingleProject.vue';
 export default {

  components:{SingleProject},


  data(){
    return {
      projects:[]
    }
  },

  mounted(){
    fetch('http://localhost:3000/projects')
    .then(res=>res.json())
    .then(data=>this.projects=data).catch(err=>console.log(err))
console.log(this.projects)
 
  

  },      



  methods:{
    handleDelete(id){
this.projects=this.projects.filter(i=>{
  return i.id !==id
})
    }
  }
 
 }
 </script>
 
 <style>
 
 </style>