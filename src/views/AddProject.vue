<template>
  <form  @submit.prevent="handleSubmit">
<label for="">Title:</label>
<input v-model="title" type="text" required>
<button>Add Todo</button>
  </form>
</template>

<script>
export default {

    data(){

        return{
            title:'',

            titleList:JSON.parse(localStorage.getItem("titleList"))

        }

        
    },
    methods:{
        handleSubmit(){

            let project={title:this.title }
  

    
        fetch('http://localhost:3000/projects',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(project)
        }).then(()=>{
            localStorage.setItem('titleList',JSON.stringify(project));

            this.$router.push('/todo')
        })

        }
} }
</script>

<style>

</style>