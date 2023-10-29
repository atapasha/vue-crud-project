<template>
  <form  @submit.prevent="handleSubmit">

    <a-form-item
    label="title"
    name="title"
    :rules="[{ required: true, message: 'Please input your title!' }]"
  >
    <a-input v-model:value="title"  />
  </a-form-item>
    <a-button html-type="submit">Update Todo</a-button>
      </form>

  
 </template>

<script> 
export default {
props:['id'],

  data(){
    return {
    title:'',

uri:'http://localhost:3000/projects/'+this.id
    }
  },

  
     
      mounted(){

        fetch(this.uri).then(res=>res.json())
        .then(data=>{
         
          this.title=data.title

        }).catch(err=>console.log(err))

},


methods:{
  handleSubmit(){
 
    fetch(this.uri,{

      method:'PATCH',

      headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
              title:this.title,

            }),

    
    }).then(()=>{         
      
      localStorage.setItem('pros',this.title)

      this.$router.push('/todo')
    })
 
  }
}
}
</script>

<style>

</style>