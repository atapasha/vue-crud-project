<template>
  <Navbar/> 

  <router-view />

</template>

<script>
import Weather from './components/Weather.vue'
import Todo from './views/Todo.vue'
import Dashboard from './components/Dashboard.vue'
import Navbar from './components/Navbar.vue'
export default {
  name: 'App',
  components: {
    Weather,
    Todo, 
    Dashboard,
    Navbar
  }
}
</script>

<style>

</style>
