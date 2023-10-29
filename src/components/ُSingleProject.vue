<template>
  <div class="project">

    <div class="actions">
<h3>{{project.title}}</h3>
<div class="icon">
    <router-link  :to="{name:'EditProject',params:{id:project.id}}">
        <spann class="material-icon">edit</spann>

    </router-link>
     <spann @click="deleteProject" class="material-icon">delete</spann>
</div>
     </div>
  </div>
</template>

<script>
export default {
    methods:{

        deleteProject(){
            fetch('http://localhost:3000/projects'+this.project.id,{
                method:'DELETE'
            }).then(()=>this.$emit('delete',this.project.id)).catch(err=>console.log(err.message))
        },

        changeComplete(){

            fetch('http://localhost:3000/projects'+this.project.id,{
                method:'PATCH',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                complete:!this.project.complete
            })


            }
                
                )

        }
    },

    props:['project']
}
</script>

<style>

.actions{

    display:flex;
    justify-content: space-between;
    align-items: center;

}

.icon{
    display: flex;
justify-content: space-between;
align-items:flex-start;
margin-right: 30px;
padding: 30px;
background-color: rgb(30, 238, 120);
}

</style>